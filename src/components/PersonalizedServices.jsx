import { Check } from "lucide-react";
import { PERSONALIZED } from "../constants/content";
import { useScrollReveal } from "../hooks/useScrollReveal";

/**
 * PersonalizedServices
 *
 * Two-column section: left = text + feature list, right = decorative pull quote panel
 * Background: white — creates contrast between the cream PracticeAreas and navy CTA
 */

export default function PersonalizedServices() {
  const leftRef  = useScrollReveal(0.15);
  const rightRef = useScrollReveal(0.1);

  return (
    <section
      id="about"
      aria-labelledby="personalized-services-heading"
      className="bg-white py-24 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center">
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
              className="font-serif text-4xl md:text-5xl text-ink leading-tight mb-6"
            >
              {PERSONALIZED.heading}
            </h2>

            {/* Body copy */}
            <p className="font-sans text-lg text-ink-muted leading-relaxed mb-10 max-w-md">
              {PERSONALIZED.body}
            </p>

            {/* Feature List */}
            <ul className="space-y-4" role="list">
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
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Right Column — Decorative Pull Quote Panel ──────────────── */}
          <div ref={rightRef} className="relative sr">
            {/* Background block */}
            <div className="relative bg-navy rounded-sm p-10 xl:p-14 overflow-hidden">
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
                className="relative font-serif text-[8rem] leading-none text-gold/15 select-none mb-2 -mt-6 -ml-2"
                aria-hidden="true"
              >
                &ldquo;
              </div>

              {/* Pull Quote */}
              <blockquote className="relative">
                <p className="font-serif text-2xl xl:text-3xl text-white leading-snug italic mb-8">
                  {PERSONALIZED.pullQuote}
                </p>
                <footer>
                  <div className="w-10 h-px bg-gold mb-4" aria-hidden="true" />
                  <cite className="font-sans text-xs text-white/45 not-italic uppercase tracking-law">
                    Anwari Law
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
