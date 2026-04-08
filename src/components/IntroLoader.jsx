import { useEffect, useRef, useState } from "react";
import { hasSeenIntro, markIntroSeen } from "../hooks/useIntroSeen";

// ─── Timing ────────────────────────────────────────────────────────────────────
const LOGO_HOLD_MS = 600;   // how long the logo stays at full opacity
const FADE_IN_MS   = 600;   // logo entrance
const FADE_OUT_MS  = 420;   // overlay exit

const LOGO_SRC = "/logo.png";

/**
 * IntroLoader
 *
 * Renders <Intro> as a real child so that setting show=false actually
 * unmounts it — ensuring all cleanup runs reliably.
 */
export default function IntroLoader() {
  const [show, setShow] = useState(() => !hasSeenIntro());
  if (!show) return null;
  return <Intro onDone={() => setShow(false)} />;
}

function Intro({ onDone }) {
  // Overlay starts fully opaque (black screen from frame 0).
  // Only the logo fades in — the overlay itself only animates on exit.
  const [overlayFading, setOverlayFading] = useState(false);
  const [logoVisible,   setLogoVisible]   = useState(false);
  const doneRef = useRef(false);

  // ── Lock scroll on mount ────────────────────────────────────────────────────
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    // Safety: restore if component unmounts unexpectedly
    return () => { document.body.style.overflow = prev; };
  }, []);

  // ── Sequence: fade logo in → hold → fade overlay out → remove ──────────────
  useEffect(() => {
    // Double-rAF so the element is painted at opacity:0 before transitioning
    let raf = requestAnimationFrame(() =>
      requestAnimationFrame(() => setLogoVisible(true))
    );

    const exitT = setTimeout(() => {
      if (doneRef.current) return;
      doneRef.current = true;
      markIntroSeen();

      // Unlock scroll the moment the fade begins — site is already visible
      document.body.style.overflow = "";

      setOverlayFading(true);
      setTimeout(onDone, FADE_OUT_MS + 40);
    }, FADE_IN_MS + LOGO_HOLD_MS);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(exitT);
    };
  }, [onDone]);

  return (
    <div
      aria-hidden="true"
      style={{
        position:        "fixed",
        inset:           0,
        zIndex:          9999,
        background:      "#000",
        display:         "flex",
        alignItems:      "center",
        justifyContent:  "center",
        // Overlay is opaque until exit — transition only applied during fade-out
        opacity:         overlayFading ? 0 : 1,
        transition:      overlayFading ? `opacity ${FADE_OUT_MS}ms linear` : "none",
        willChange:      "opacity",
        transform:       "translateZ(0)",
        pointerEvents:   overlayFading ? "none" : "all",
      }}
    >
      {/* Vignette */}
      <div
        style={{
          position:      "absolute",
          inset:         0,
          background:    "radial-gradient(ellipse 75% 75% at 50% 50%, transparent 35%, rgba(0,0,0,0.75) 100%)",
          pointerEvents: "none",
        }}
      />

      {/* Gold glow */}
      <div
        style={{
          position:      "absolute",
          width:         "360px",
          height:        "360px",
          borderRadius:  "50%",
          background:    "radial-gradient(circle, rgba(184,147,63,0.14) 0%, transparent 70%)",
          filter:        "blur(55px)",
          pointerEvents: "none",
          opacity:       logoVisible ? 1 : 0,
          transition:    `opacity ${FADE_IN_MS * 1.4}ms ease`,
        }}
      />

      {/* Logo */}
      <img
        src={LOGO_SRC}
        alt=""
        style={{
          position:   "relative",
          zIndex:     1,
          width:      "clamp(140px, 22vw, 240px)",
          objectFit:  "contain",
          opacity:    logoVisible ? 1 : 0,
          transform:  logoVisible ? "scale(1)" : "scale(0.96)",
          transition: `opacity ${FADE_IN_MS}ms ease, transform ${FADE_IN_MS}ms cubic-bezier(0.4, 0, 0.2, 1)`,
          willChange: "opacity, transform",
        }}
      />
    </div>
  );
}
