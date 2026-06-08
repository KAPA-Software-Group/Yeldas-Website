import { ArrowRight, Phone } from "lucide-react";
import LocalizedLink from "./LocalizedLink";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { useContent } from "../i18n";
import { BeamsBackground } from "./ui/beams-background";
import LineBreakText from "./LineBreakText";

/**
 * ConsultationCTA
 *
 * Full-width dark navy section — conversion-focused.
 * Background layers (back to front):
 *   1. Navy base
 *   2. Radial gold glow (bottom-left origin)
 *   3. Fine dot-grid texture
 *   4. Top + bottom gold gradient rules
 *   5. Decorative oversized § glyph
 */

export default function ConsultationCTA() {
  const contentRef = useScrollReveal(0.15);
  const { CONSULTATION } = useContent();

  return (
    <section
      id="contact"
      aria-labelledby="consultation-heading"
      className="relative bg-navy overflow-hidden py-20 lg:py-28"
    >
      {/* ── Animated beam background ─────────────────────────────────────── */}
      <BeamsBackground intensity="medium" />

      {/* ── Layer 3: Gradient rules top & bottom ────────────────────────── */}
      <div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-gold/0 via-gold/35 to-gold/0"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-gold/0 via-gold/15 to-gold/0"
        aria-hidden="true"
      />

      {/* ── Layer 4: Decorative oversized § glyph ───────────────────────── */}
      <div
        className="absolute -top-8 right-4 lg:right-16 font-serif text-[12rem] lg:text-[16rem] leading-none text-white/[0.022] select-none pointer-events-none"
        aria-hidden="true"
      >
        &sect;
      </div>

      {/* ── Content ────────────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div ref={contentRef} className="max-w-3xl">
          {/* Eyebrow */}
          <p className="sr eyebrow mb-6 flex items-center gap-3">
            <span className="gold-rule" aria-hidden="true" />
            {CONSULTATION.eyebrow}
          </p>

          {/* Heading */}
          <h2
            id="consultation-heading"
            className="sr font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-display mb-6"
            style={{ transitionDelay: "80ms" }}
          >
            <LineBreakText text={CONSULTATION.heading} />
          </h2>

          {/* Subtext */}
          <p
            className="sr font-sans text-base lg:text-[1.05rem] text-white/60 leading-relaxed max-w-xl mb-10"
            style={{ transitionDelay: "160ms" }}
          >
            <LineBreakText text={CONSULTATION.subtext} />
          </p>

          {/* Actions */}
          <div
            className="sr flex flex-col sm:flex-row items-start sm:items-center gap-6"
            style={{ transitionDelay: "240ms" }}
          >
            {/* Primary CTA */}
            <LocalizedLink
              to={CONSULTATION.cta.href}
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-gold hover:bg-gold-light text-white font-sans font-bold text-sm tracking-wide transition-all duration-200 rounded-sm cursor-pointer group"
            >
              {CONSULTATION.cta.label}
              <ArrowRight
                size={15}
                strokeWidth={2}
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </LocalizedLink>

            {/* Phone */}
            <div className="flex flex-col gap-0.5">
              <span className="font-sans text-xs text-white/35 uppercase tracking-law">
                {CONSULTATION.phoneLabel}
              </span>
              <a
                href={`tel:${CONSULTATION.phone.replace(/\D/g, "")}`}
                className="inline-flex items-center gap-2 text-white/80 hover:text-gold font-sans text-base transition-colors duration-200 cursor-pointer"
              >
                <Phone size={15} strokeWidth={1.5} aria-hidden="true" />
                <span>{CONSULTATION.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
