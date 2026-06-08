import { Check } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { useContent } from "../i18n";
import LineBreakText from "./LineBreakText";

/**
 * PersonalizedServices
 *
 * Two-column section: left = text + feature list, right = decorative pull quote panel
 * Background: white — creates contrast between the cream PracticeAreas and navy CTA
 */

export default function PersonalizedServices() {
  const leftRef  = useScrollReveal(0.15);
  const rightRef = useScrollReveal(0.1);
  const { PERSONALIZED, BRAND } = useContent();

  return (
    <section
      id="about"
      aria-labelledby="personalized-services-heading"
      className="bg-white py-20 lg:py-24"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">
          {/* ── Left Column — Content ───────────────────────────────────── */}
          <div ref={leftRef} className="sr">
            {/* Eyebrow */}
            <p className="eyebrow mb-5 flex items-center gap-3">
              <span className="gold-rule" aria-hidden="true" />
              {PERSONALIZED.eyebrow}
            </p>

            {/* Heading */}
            <h2
              id="personalized-services-heading"
              className="font-serif text-3xl md:text-4xl text-ink leading-tight mb-5"
            >
              <LineBreakText text={PERSONALIZED.heading} />
            </h2>

            {/* Body copy */}
            <p className="font-sans text-base lg:text-[1.05rem] text-ink-muted leading-relaxed mb-8 max-w-md">
              <LineBreakText text={PERSONALIZED.body} />
            </p>

            {/* Feature List */}
            <ul className="space-y-3.5" role="list">
              {PERSONALIZED.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3.5 group"
                >
                  <span
                    className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full border border-gold/40 bg-gold-subtle flex items-center justify-center"
                    aria-hidden="true"
                  >
                    <Check size={11} strokeWidth={2.5} className="text-gold-dark" />
                  </span>
                  <span className="font-sans text-base text-ink-muted leading-snug">
                    <LineBreakText text={feature} />
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Right Column — Decorative Pull Quote Panel ──────────────── */}
          <div ref={rightRef} className="relative sr">
            {/* Background block */}
            <div className="relative bg-navy rounded-sm p-8 xl:p-10 overflow-hidden">
              {/* Decorative grid texture */}
              <div
                className="absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(0deg, #B8933F 0, #B8933F 1px, transparent 0, transparent 48px), repeating-linear-gradient(90deg, #B8933F 0, #B8933F 1px, transparent 0, transparent 48px)",
                }}
                aria-hidden="true"
              />

              {/* Large decorative quotation mark */}
              <div
                className="relative font-serif text-[6rem] leading-none text-gold/15 select-none mb-1 -mt-4 -ml-2"
                aria-hidden="true"
              >
                &ldquo;
              </div>

              {/* Pull Quote */}
              <blockquote className="relative">
                <p className="font-serif text-xl xl:text-2xl text-white leading-snug italic mb-7">
                  <LineBreakText text={PERSONALIZED.pullQuote} />
                </p>
                <footer>
                  <div className="w-10 h-px bg-gold mb-4" aria-hidden="true" />
                  <cite className="font-sans text-xs text-white/45 not-italic uppercase tracking-law">
                    {BRAND.name}
                  </cite>
                </footer>
              </blockquote>
            </div>

            {/* Decorative offset border */}
            <div
              className="absolute -bottom-3 -right-3 w-full h-full border border-gold/20 rounded-sm pointer-events-none hidden sm:block"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
