import { motion } from "framer-motion";

/**
 * SpotlightBackground
 *
 * Three-layer animated gold spotlight focused on the 3000+ number.
 * - Core: tight bright pulse that flares and contracts
 * - Mid:  slower drifting halo that roams off-axis
 * - Rim:  wide slow bloom that fades in and out independently
 */
const SpotlightBackground = ({ children, className = "" }) => {
  return (
    <div className={`relative isolate overflow-visible ${className}`}>

      {/* ── Rim bloom — wide, slow, moody ───────────────────────────────── */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute z-0"
        style={{
          inset: "-60% -40%",
          background:
            "radial-gradient(ellipse 80% 70% at 50% 50%, rgba(184,147,63,0.13) 0%, transparent 65%)",
          filter: "blur(36px)",
        }}
        animate={{
          opacity: [0.15, 0.45, 0.15],
          scaleX:  [1,   1.25, 0.85, 1],
          scaleY:  [1,   0.85, 1.2,  1],
        }}
        transition={{
          duration:   7,
          ease:       "easeInOut",
          repeat:     Infinity,
          repeatType: "mirror",
        }}
      />

      {/* ── Mid halo — drifts off-centre ────────────────────────────────── */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute z-0"
        style={{
          inset: "-30% -20%",
          background:
            "radial-gradient(ellipse 65% 55% at 50% 50%, rgba(184,147,63,0.28) 0%, rgba(184,147,63,0.08) 50%, transparent 70%)",
          filter: "blur(22px)",
        }}
        animate={{
          opacity: [0.2, 0.45, 0.25, 0.45, 0.2],
          x:       [0,   18,  -14,   8,   0],
          y:       [0,  -12,   10,  -6,   0],
          scale:   [1,   1.15, 0.9,  1.1, 1],
        }}
        transition={{
          duration:   5.5,
          ease:       "easeInOut",
          repeat:     Infinity,
          repeatType: "mirror",
        }}
      />

      {/* ── Core flare — tight, bright, punchy ──────────────────────────── */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute z-0"
        style={{
          inset: "-10% -8%",
          background:
            "radial-gradient(ellipse 55% 45% at 50% 50%, rgba(220,178,80,0.55) 0%, rgba(184,147,63,0.18) 40%, transparent 68%)",
          filter: "blur(10px)",
        }}
        animate={{
          opacity: [0.2, 0.5, 0.25, 0.45, 0.2],
          scale:   [0.88, 1.18, 0.92, 1.12, 0.88],
        }}
        transition={{
          duration:   3.2,
          ease:       "easeInOut",
          repeat:     Infinity,
          repeatType: "mirror",
          delay:      0.4,
        }}
      />

      {/* Content sits above all glow layers */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default SpotlightBackground;
