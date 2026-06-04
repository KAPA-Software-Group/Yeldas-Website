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
 *  3. PAUSE ON HIDE  — The d3 rotation timer stops when:
 *                        a) the canvas scrolls out of the viewport, OR
 *                        b) the browser tab is hidden.
 *                      It resumes automatically when the canvas is visible
 *                      again. This eliminates wasted GPU/CPU work.
 *
 * Countries that contain a marker point are filled solid white with a pulsing
 * effect; all other land shows gold halftone dots.
 */

import { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

// ── Dot cache helpers ────────────────────────────────────────────────────────
// Key includes a version tag so we can bust the cache if the data changes.
const CACHE_KEY = "anwari_globe_v2";

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

    const containerWidth  = container.clientWidth;
    const containerHeight = container.clientHeight;
    const radius = Math.min(containerWidth, containerHeight) / 2.4;

    const dpr = window.devicePixelRatio || 1;
    canvas.width        = containerWidth  * dpr;
    canvas.height       = containerHeight * dpr;
    canvas.style.width  = `${containerWidth}px`;
    canvas.style.height = `${containerHeight}px`;
    ctx.scale(dpr, dpr);

    // ── D3 projection ──────────────────────────────────────────────────────
    const projection = d3
      .geoOrthographic()
      .scale(radius)
      .translate([containerWidth / 2, containerHeight / 2])
      .clipAngle(90);

    const path = d3.geoPath().projection(projection).context(ctx);

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
    const generateDots = (feature, spacing = 16) => {
      const dots = [];
      const [[minLng, minLat], [maxLng, maxLat]] = d3.geoBounds(feature);
      const step = spacing * 0.08;
      for (let lng = minLng; lng <= maxLng; lng += step)
        for (let lat = minLat; lat <= maxLat; lat += step)
          if (pointInFeature([lng, lat], feature)) dots.push([lng, lat]);
      return dots;
    };

    // ── State ──────────────────────────────────────────────────────────────
    let highlightedFeatures = [];
    const normalDots        = [];

    // ── Render ────────────────────────────────────────────────────────────
    const render = () => {
      ctx.clearRect(0, 0, containerWidth, containerHeight);

      const scale       = projection.scale();
      const sf          = scale / radius;
      const cx          = containerWidth  / 2;
      const cy          = containerHeight / 2;

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
        if (px < 0 || px > containerWidth || py < 0 || py > containerHeight) return;
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

    // ── Timer (start / stop) ──────────────────────────────────────────────
    const rotation = [0, -15];
    let globeTimer  = null;

    const startTimer = () => {
      if (globeTimer) return;
      globeTimer = d3.timer(() => {
        rotation[0] += 0.3;
        projection.rotate(rotation);
        render();
      });
    };

    const stopTimer = () => {
      if (globeTimer) {
        globeTimer.stop();
        globeTimer = null;
      }
    };

    // ── Pause when tab hidden ─────────────────────────────────────────────
    const onVisChange = () => (document.hidden ? stopTimer() : startTimer());
    document.addEventListener("visibilitychange", onVisChange);

    // ── Pause when canvas is off-screen ───────────────────────────────────
    const scrollObs = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting ? startTimer() : stopTimer()),
      { threshold: 0 }
    );
    scrollObs.observe(canvas);

    // ── Load GeoJSON (local file — browser caches after first visit) ───────
    const loadWorldData = async () => {
      try {
        setIsLoading(true);

        const markerPoints = markersRef.current.map((m) => [m.lng, m.lat]);
        const cached       = readDotCache(markerPoints.length);

        // ── CACHE HIT ─────────────────────────────────────────────────────
        // We still need the feature objects (for rendering), so always fetch
        // the GeoJSON. But the browser's HTTP cache makes this near-instant
        // after the first visit. We skip the expensive dot computation.
        const res = await fetch("/data/ne_110m_admin_0_countries.json");
        if (!res.ok) throw new Error("Failed to load country data");
        const countryData = await res.json();

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
              const dots = generateDots(feature, 16);
              dots.forEach((d) => normalDots.push(d));
            }
          });

          writeDotCache(normalDots, highlightedIndices, markerPoints.length);
        }

        startTimer();
        setIsLoading(false);
      } catch {
        setError(errorMessage);
        setIsLoading(false);
      }
    };

    loadWorldData();

    return () => {
      stopTimer();
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
