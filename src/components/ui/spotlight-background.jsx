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
      <div
        aria-hidden="true"
        className="spotlight-rim pointer-events-none absolute z-0"
        style={{
          inset: "-60% -40%",
          background:
            "radial-gradient(ellipse 80% 70% at 50% 50%, rgba(184,147,63,0.13) 0%, transparent 65%)",
          filter: "blur(36px)",
        }}
      />

      {/* ── Mid halo — drifts off-centre ────────────────────────────────── */}
      <div
        aria-hidden="true"
        className="spotlight-mid pointer-events-none absolute z-0"
        style={{
          inset: "-30% -20%",
          background:
            "radial-gradient(ellipse 65% 55% at 50% 50%, rgba(184,147,63,0.28) 0%, rgba(184,147,63,0.08) 50%, transparent 70%)",
          filter: "blur(22px)",
        }}
      />

      {/* ── Core flare — tight, bright, punchy ──────────────────────────── */}
      <div
        aria-hidden="true"
        className="spotlight-core pointer-events-none absolute z-0"
        style={{
          inset: "-10% -8%",
          background:
            "radial-gradient(ellipse 55% 45% at 50% 50%, rgba(220,178,80,0.55) 0%, rgba(184,147,63,0.18) 40%, transparent 68%)",
          filter: "blur(10px)",
        }}
      />

      {/* Content sits above all glow layers */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default SpotlightBackground;
