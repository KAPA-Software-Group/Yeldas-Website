import { useRef } from "react";
import { RollingNumber } from "./ui/rolling-number";
import { useScrollReveal } from "../hooks/useScrollReveal";
import SpotlightBackground from "./ui/spotlight-background";

/**
 * ClientsStat
 *
 * A full-width typographic "hook" section — bold, dark, impactful.
 * Intended as a conversion-pressure moment between content sections.
 *
 * Layout:
 *   - Deep navy base with a diagonal gold gradient sweep
 *   - Massive rolling "3000+" counter in display serif
 *   - Supporting label + thin gold dividers
 *   - Quiet secondary line for credibility
 */
export default function ClientsStat() {
  const wrapRef = useScrollReveal(0.1);

  return (
    <section
      aria-label="3000+ clients serviced"
      className="relative bg-navy overflow-hidden"
    >
      {/* ── Gold diagonal sweep ──────────────────────────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(118deg, rgba(184,147,63,0.07) 0%, transparent 55%, rgba(184,147,63,0.04) 100%)",
        }}
        aria-hidden="true"
      />

      {/* ── Dot-grid texture (matches ConsultationCTA) ──────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.12]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(184,147,63,0.55) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />

      {/* ── Top rule ────────────────────────────────────────────────────── */}
      <div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-gold/0 via-gold/40 to-gold/0"
        aria-hidden="true"
      />
      {/* ── Bottom rule ─────────────────────────────────────────────────── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-gold/0 via-gold/20 to-gold/0"
        aria-hidden="true"
      />

      {/* ── Content ─────────────────────────────────────────────────────── */}
      <div
        ref={wrapRef}
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20 lg:py-28 flex flex-col items-center text-center"
      >
        {/* Eyebrow rule */}
        <div className="flex items-center gap-4 mb-8 sr" aria-hidden="true">
          <span className="block w-12 h-px bg-gold/50" />
          <span className="font-sans text-xs text-gold-muted uppercase tracking-law">
            Trusted Across Canada &amp; Beyond
          </span>
          <span className="block w-12 h-px bg-gold/50" />
        </div>

        {/* Giant number — spotlight draws the eye straight to it */}
        <SpotlightBackground className="flex flex-col items-center px-16 pb-2 -mx-4">
          <div
            className="sr font-serif text-white select-none"
            style={{
              fontSize: "clamp(4.5rem, 16vw, 13rem)",
              lineHeight: 1,
              transitionDelay: "60ms",
              WebkitFontSmoothing: "antialiased",
              MozOsxFontSmoothing: "grayscale",
              textRendering: "optimizeLegibility",
            }}
          >
            <RollingNumber value={3000} suffix="+" duration={2.2} className="font-serif" />
          </div>

          {/* Label */}
          <p
            className="sr font-sans text-gold-muted uppercase tracking-law text-xs md:text-sm mt-5 mb-8"
            style={{ transitionDelay: "120ms" }}
          >
            Clients Serviced
          </p>

          {/* Thin gold divider */}
          <div
            className="sr w-16 h-px bg-gold/50 mb-8"
            style={{ transitionDelay: "180ms" }}
            aria-hidden="true"
          />
        </SpotlightBackground>

        {/* Secondary credibility line */}
        <p
          className="sr font-serif text-white/40 text-lg md:text-xl lg:text-2xl italic max-w-xl leading-relaxed"
          style={{ transitionDelay: "240ms" }}
        >
          Every case handled with precision, dignity, and an unwavering
          commitment to results.
        </p>
      </div>
    </section>
  );
}
