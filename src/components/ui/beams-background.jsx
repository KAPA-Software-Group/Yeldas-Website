import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

/**
 * BeamsBackground
 *
 * Animated light-beam canvas — used as an absolute background layer.
 * Colours are tuned to the site's gold palette (hue ~38–50).
 *
 * Props:
 *   intensity — "subtle" | "medium" | "strong" (default "medium")
 *   className — extra classes on the root div
 */

const opacityMap = {
  subtle: 0.5,
  medium: 0.75,
  strong: 1,
};

function createBeam(width, height) {
  const angle = -35 + Math.random() * 10;
  return {
    x:          Math.random() * width  * 1.5 - width  * 0.25,
    y:          Math.random() * height * 1.5 - height * 0.25,
    width:      30  + Math.random() * 60,
    length:     height * 2.5,
    angle,
    speed:      0.5 + Math.random() * 1.0,
    opacity:    0.08 + Math.random() * 0.12,
    hue:        36  + Math.random() * 16,   // gold/amber range
    pulse:      Math.random() * Math.PI * 2,
    pulseSpeed: 0.02 + Math.random() * 0.03,
  };
}

export function BeamsBackground({ className = "", intensity = "medium" }) {
  const canvasRef          = useRef(null);
  const beamsRef           = useRef([]);
  const animationFrameRef  = useRef(null);
  const intensityRef       = useRef(intensity);
  intensityRef.current     = intensity;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const BEAM_COUNT = 20;

    const updateCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1;
      const w   = canvas.parentElement?.clientWidth  || window.innerWidth;
      const h   = canvas.parentElement?.clientHeight || window.innerHeight;
      canvas.width        = w * dpr;
      canvas.height       = h * dpr;
      canvas.style.width  = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.scale(dpr, dpr);
      beamsRef.current = Array.from({ length: BEAM_COUNT }, () =>
        createBeam(w, h)
      );
    };

    updateCanvasSize();

    let resizeTimer = null;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(updateCanvasSize, 150);
    };
    window.addEventListener("resize", onResize);

    const resetBeam = (beam, index) => {
      const w       = canvas.style.width  ? parseInt(canvas.style.width)  : window.innerWidth;
      const h       = canvas.style.height ? parseInt(canvas.style.height) : window.innerHeight;
      const col     = index % 3;
      const spacing = w / 3;
      beam.y        = h + 100;
      beam.x        = col * spacing + spacing / 2 + (Math.random() - 0.5) * spacing * 0.5;
      beam.width    = 80 + Math.random() * 80;
      beam.speed    = 0.4 + Math.random() * 0.5;
      beam.hue      = 34 + Math.random() * 18;
      beam.opacity  = 0.07 + Math.random() * 0.1;
      return beam;
    };

    const drawBeam = (beam) => {
      const w = parseInt(canvas.style.width)  || window.innerWidth;
      const h = parseInt(canvas.style.height) || window.innerHeight;
      ctx.save();
      ctx.translate(beam.x, beam.y);
      ctx.rotate((beam.angle * Math.PI) / 180);

      const pulsingOpacity =
        beam.opacity *
        (0.8 + Math.sin(beam.pulse) * 0.2) *
        opacityMap[intensityRef.current];

      const grad = ctx.createLinearGradient(0, 0, 0, beam.length);
      grad.addColorStop(0,   `hsla(${beam.hue}, 70%, 60%, 0)`);
      grad.addColorStop(0.1, `hsla(${beam.hue}, 70%, 60%, ${pulsingOpacity * 0.5})`);
      grad.addColorStop(0.4, `hsla(${beam.hue}, 70%, 60%, ${pulsingOpacity})`);
      grad.addColorStop(0.6, `hsla(${beam.hue}, 70%, 60%, ${pulsingOpacity})`);
      grad.addColorStop(0.9, `hsla(${beam.hue}, 70%, 60%, ${pulsingOpacity * 0.5})`);
      grad.addColorStop(1,   `hsla(${beam.hue}, 70%, 60%, 0)`);

      ctx.fillStyle = grad;
      ctx.fillRect(-beam.width / 2, 0, beam.width, beam.length);
      ctx.restore();
    };

    const animate = () => {
      const w = parseInt(canvas.style.width)  || window.innerWidth;
      const h = parseInt(canvas.style.height) || window.innerHeight;
      ctx.clearRect(0, 0, w, h);
      ctx.filter = "blur(28px)";

      beamsRef.current.forEach((beam, i) => {
        beam.y     -= beam.speed;
        beam.pulse += beam.pulseSpeed;
        if (beam.y + beam.length < -100) resetBeam(beam, i);
        drawBeam(beam);
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Pause when section is off-screen
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animationFrameRef.current) {
          animationFrameRef.current = requestAnimationFrame(animate);
        } else if (!entry.isIntersecting && animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
          animationFrameRef.current = null;
        }
      },
      { threshold: 0 }
    );
    obs.observe(canvas);

    animate();

    return () => {
      window.removeEventListener("resize", onResize);
      clearTimeout(resizeTimer);
      obs.disconnect();
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
        style={{ filter: "blur(12px)" }}
      />
      {/* Subtle breathing veil — keeps text legible */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{ background: "rgba(15,23,42,0.55)" }}
        animate={{ opacity: [0.7, 0.85, 0.7] }}
        transition={{ duration: 10, ease: "easeInOut", repeat: Infinity }}
      />
    </>
  );
}
