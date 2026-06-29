/**
 * WireframeDottedGlobe — Performance-optimised version
 *
 * Key improvements over the previous version:
 *
 *  1. LOCAL GeoJSON  — fetched from /data/ on the same origin instead of
 *                      GitHub CDN. Browser caches it with a long max-age so
 *                      it's only downloaded once per user.
 *
 *  2. DOT CACHE      — The expensive point-in-polygon dot computation is
 *                      stored in sessionStorage after the first render. Every
 *                      subsequent mount in the same session skips the whole
 *                      computation and uses the cached array directly.
 *
 *  3. STABLE RESIZE  — A resize updates the canvas size + d3 projection IN
 *                      PLACE. The globe is never torn down, re-fetched, or
 *                      flashed back to the loading state, so it no longer
 *                      "glitches in and out" or jumps when the layout reflows.
 *
 *  4. SMOOTH MOTION  — Rotation is time-based (degrees per second) and the
 *                      single rAF loop is throttled evenly, so the spin is
 *                      consistent regardless of frame rate instead of
 *                      staggering.
 *
 *  5. PAUSE ON HIDE  — The render loop stops when the canvas scrolls out of
 *                      the viewport or the browser tab is hidden, and resumes
 *                      automatically. This eliminates wasted GPU/CPU work.
 *
 * Countries that contain a marker point are filled solid white with a pulsing
 * effect; all other land shows gold halftone dots.
 */

import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

// ── Dot cache helpers ────────────────────────────────────────────────────────
// Key includes a version tag so we can bust the cache if the data changes.
const CACHE_KEY = "anwari_globe_v3";

function readDotCache(markerCount) {
  try {
    const raw = sessionStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    // Invalidate if marker count changed (different highlighted set)
    if (parsed.markerCount !== markerCount) return null;
    return parsed; // { normalDots, highlightedIndices, markerCount }
  } catch {
    return null;
  }
}

function writeDotCache(normalDots, highlightedIndices, markerCount) {
  try {
    sessionStorage.setItem(
      CACHE_KEY,
      JSON.stringify({ normalDots, highlightedIndices, markerCount })
    );
  } catch {
    // sessionStorage quota exceeded — silently skip
  }
}

// ── Component ────────────────────────────────────────────────────────────────
export default function WireframeDottedGlobe({
  className = "",
  markers = [],
  highlightColor = "#FFFFFF",
  ariaLabel = "Rotating globe showing countries served by Anwari Law",
  errorMessage = "Failed to load globe data",
  // legacy props kept so existing call sites don't break
  markerColor,
  markerSize,
}) {
  const containerRef = useRef(null);
  const canvasRef    = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError]         = useState(null);

  const markersRef     = useRef(markers);
  markersRef.current   = markers;
  const colorRef       = useRef(markerColor || highlightColor);
  colorRef.current     = markerColor || highlightColor;

  useEffect(() => {
    const container = containerRef.current;
    const canvas    = canvasRef.current;
    if (!container || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // ── Live geometry (updated in place on resize, never torn down) ─────────
    let width      = 0;
    let height     = 0;
    let radius     = 0;
    let projection = null;
    let path       = null;

    // ── Render data ─────────────────────────────────────────────────────────
    const rotation          = [0, -15];
    const normalDots         = [];
    const highlightedFeatures = [];

    // ── Canvas / projection setup (safe to call repeatedly) ─────────────────
    const setupCanvas = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      if (w < 24 || h < 24) return false;

      width  = w;
      height = h;
      radius = Math.min(w, h) / 2.4;

      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width        = w * dpr;
      canvas.height       = h * dpr;
      canvas.style.width  = `${w}px`;
      canvas.style.height = `${h}px`;
      // setTransform (not scale) so the dpr transform never compounds across
      // repeated resizes on the same persistent context.
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      if (!projection) {
        projection = d3.geoOrthographic().clipAngle(90);
        path = d3.geoPath().projection(projection).context(ctx);
      }
      projection.scale(radius).translate([w / 2, h / 2]).rotate(rotation);
      return true;
    };

    // ── Point-in-polygon helpers ───────────────────────────────────────────
    const pointInRing = (point, ring) => {
      const [x, y] = point;
      let inside = false;
      for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
        const [xi, yi] = ring[i];
        const [xj, yj] = ring[j];
        if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi)
          inside = !inside;
      }
      return inside;
    };

    const pointInFeature = (point, feature) => {
      const { type, coordinates } = feature.geometry;
      if (type === "Polygon") {
        if (!pointInRing(point, coordinates[0])) return false;
        for (let i = 1; i < coordinates.length; i++)
          if (pointInRing(point, coordinates[i])) return false;
        return true;
      }
      if (type === "MultiPolygon") {
        for (const poly of coordinates) {
          if (pointInRing(point, poly[0])) {
            let inHole = false;
            for (let i = 1; i < poly.length; i++)
              if (pointInRing(point, poly[i])) { inHole = true; break; }
            if (!inHole) return true;
          }
        }
      }
      return false;
    };

    // ── Dot generation ─────────────────────────────────────────────────────
    const generateDots = (feature, spacing = 24) => {
      const dots = [];
      const [[minLng, minLat], [maxLng, maxLat]] = d3.geoBounds(feature);
      const step = spacing * 0.08;
      for (let lng = minLng; lng <= maxLng; lng += step)
        for (let lat = minLat; lat <= maxLat; lat += step)
          if (pointInFeature([lng, lat], feature)) dots.push([lng, lat]);
      return dots;
    };

    // ── Render ────────────────────────────────────────────────────────────
    const render = () => {
      if (!projection) return;
      ctx.clearRect(0, 0, width, height);

      const scale = projection.scale();
      const sf    = scale / radius;
      const cx    = width  / 2;
      const cy    = height / 2;

      // Ocean sphere
      ctx.beginPath();
      ctx.arc(cx, cy, scale, 0, 2 * Math.PI);
      ctx.fillStyle = "#0F172A";
      ctx.fill();
      ctx.strokeStyle = "#B8933F";
      ctx.lineWidth   = 1.5 * sf;
      ctx.stroke();

      // Graticule
      const graticule = d3.geoGraticule();
      ctx.beginPath();
      path(graticule());
      ctx.strokeStyle = "#B8933F";
      ctx.lineWidth   = 0.5 * sf;
      ctx.globalAlpha = 0.15;
      ctx.stroke();
      ctx.globalAlpha = 1;

      // Normal land dots
      normalDots.forEach(([lng, lat]) => {
        const p = projection([lng, lat]);
        if (!p) return;
        const [px, py] = p;
        if (px < 0 || px > width || py < 0 || py > height) return;
        ctx.beginPath();
        ctx.arc(px, py, 1.1 * sf, 0, 2 * Math.PI);
        ctx.fillStyle   = "#C8A44F";
        ctx.globalAlpha = 0.75;
        ctx.fill();
        ctx.globalAlpha = 1;
      });

      // Highlighted country fills + outlines
      const pulse         = (Math.sin(Date.now() / 700) + 1) / 2;
      const color         = colorRef.current;
      const [rotL, rotP]  = projection.rotate();
      const visCenter     = [-rotL, -rotP];

      highlightedFeatures.forEach((feature) => {
        const centroid    = d3.geoCentroid(feature);
        const angularDist = d3.geoDistance(centroid, visCenter);
        const visible     = angularDist < Math.PI / 2;

        // Fill
        ctx.beginPath();
        path(feature);
        ctx.fillStyle   = color;
        ctx.globalAlpha = visible ? 0.25 + 0.25 * pulse : 0.08;
        ctx.fill();

        // Border
        ctx.beginPath();
        path(feature);
        ctx.strokeStyle = color;
        ctx.lineWidth   = 1.2 * sf;
        ctx.globalAlpha = visible ? 0.7 + 0.3 * pulse : 0.15;
        ctx.stroke();
        ctx.globalAlpha = 1;
      });
    };

    // ── Animation loop (time-based, evenly throttled) ──────────────────────
    const SPEED        = 5;   // degrees per second — consistent regardless of fps
    const FRAME_MS     = 32;  // ~30fps cap, evenly paced
    let rafId          = null;
    let lastFrameTime  = 0;

    const loop = (now) => {
      rafId = requestAnimationFrame(loop);
      const dt = now - lastFrameTime;
      if (dt < FRAME_MS) return;
      lastFrameTime = now;
      // Clamp dt so a long pause (e.g. tab refocus) can't jolt the rotation.
      const seconds = Math.min(dt, 100) / 1000;
      rotation[0] += SPEED * seconds;
      projection.rotate(rotation);
      render();
    };

    // ── Loop start / stop (driven by visibility) ───────────────────────────
    let onScreen  = true;
    let tabActive = !document.hidden;

    const startLoop = () => {
      if (rafId != null || !projection) return;
      lastFrameTime = performance.now();
      rafId = requestAnimationFrame(loop);
    };

    const stopLoop = () => {
      if (rafId != null) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
    };

    const updateRunning = () => {
      if (onScreen && tabActive) startLoop();
      else stopLoop();
    };

    // ── Resize: update geometry in place, no teardown / no loading flash ────
    let resizeFrame = 0;
    const resizeObserver = new ResizeObserver(([entry]) => {
      const { width: w, height: h } = entry.contentRect;
      if (Math.abs(w - width) < 2 && Math.abs(h - height) < 2) return;
      cancelAnimationFrame(resizeFrame);
      resizeFrame = requestAnimationFrame(() => {
        if (setupCanvas()) render();
      });
    });
    resizeObserver.observe(container);

    // ── Pause when tab hidden ─────────────────────────────────────────────
    const onVisChange = () => {
      tabActive = !document.hidden;
      updateRunning();
    };
    document.addEventListener("visibilitychange", onVisChange);

    // ── Pause when canvas is off-screen ───────────────────────────────────
    const scrollObs = new IntersectionObserver(
      ([entry]) => {
        onScreen = entry.isIntersecting;
        updateRunning();
      },
      { threshold: 0 }
    );
    scrollObs.observe(canvas);

    // ── Load GeoJSON (local file — browser caches after first visit) ───────
    let cancelled = false;
    const loadWorldData = async () => {
      try {
        setIsLoading(true);

        const markerPoints = markersRef.current.map((m) => [m.lng, m.lat]);
        const cached       = readDotCache(markerPoints.length);

        // We still need the feature objects (for rendering), so always fetch
        // the GeoJSON. The browser's HTTP cache makes this near-instant after
        // the first visit. A cache hit lets us skip the dot computation.
        const res = await fetch("/data/ne_110m_admin_0_countries.json");
        if (!res.ok) throw new Error("Failed to load country data");
        const countryData = await res.json();
        if (cancelled) return;

        if (cached) {
          // Restore precomputed dots
          cached.normalDots.forEach((d) => normalDots.push(d));
          // Restore highlighted feature objects from saved indices
          cached.highlightedIndices.forEach((idx) => {
            if (countryData.features[idx])
              highlightedFeatures.push(countryData.features[idx]);
          });
        } else {
          // ── CACHE MISS — compute and save ─────────────────────────────
          const highlightedIndices = [];

          countryData.features.forEach((feature, idx) => {
            const hit = markerPoints.some((pt) => pointInFeature(pt, feature));
            if (hit) {
              highlightedIndices.push(idx);
              highlightedFeatures.push(feature);
            } else {
              const dots = generateDots(feature, 24);
              dots.forEach((d) => normalDots.push(d));
            }
          });

          writeDotCache(normalDots, highlightedIndices, markerPoints.length);
        }

        setupCanvas();
        render();
        updateRunning();
        setIsLoading(false);
      } catch {
        if (cancelled) return;
        setError(errorMessage);
        setIsLoading(false);
      }
    };

    loadWorldData();

    return () => {
      cancelled = true;
      stopLoop();
      cancelAnimationFrame(resizeFrame);
      resizeObserver.disconnect();
      scrollObs.disconnect();
      document.removeEventListener("visibilitychange", onVisChange);
    };
  }, [errorMessage]);

  return (
    <div ref={containerRef} className={`relative w-full h-full ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-gold animate-ping" aria-hidden="true" />
        </div>
      )}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center px-8">
          <p className="font-sans text-xs text-white/30 text-center">{error}</p>
        </div>
      )}
      <canvas
        ref={canvasRef}
        aria-label={ariaLabel}
        role="img"
        className="w-full h-full"
      />
    </div>
  );
}
