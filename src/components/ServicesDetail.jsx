import {
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";
import { CategoryList } from "@/components/ui/category-list";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { RollingNumber } from "./ui/rolling-number";
import LocalizedLink from "./LocalizedLink";
import { useI18n } from "../i18n";

/**
 * ServicesDetail
 *
 * Two-column layout:
 *   Left  — sticky intro, CTA, stats
 *   Right — CategoryList component (hover-expand cards per service category)
 *
 * Background: cream-dark — visually distinct from the white PersonalizedServices section.
 */

export default function ServicesDetail() {
  const leftRef  = useScrollReveal(0.15);
  const rightRef = useScrollReveal(0.1);
  const { content, locale } = useI18n();
  const { SERVICES } = content;
  const helperSpacer = locale === "ja" ? "" : " ";

  const categories = SERVICES.categories.map((cat) => ({
    id: cat.id,
    title: cat.title,
    subtitle: SERVICES.detail.categorySubtitles[cat.id],
    icon: <ArrowRight size={22} strokeWidth={1.5} />,
  }));

  return (
    <section
      id="services-detail"
      aria-labelledby="services-detail-heading"
      className="bg-white py-24 lg:py-32 border-t border-cream-darker"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 xl:gap-24 items-start">
          {/* ── Left — Intro ────────────────────────────────────────────── */}
          <div ref={leftRef} className="lg:sticky lg:top-28">
            <p className="sr eyebrow mb-5 flex items-center gap-3">
              <span className="gold-rule" aria-hidden="true" />
              {SERVICES.eyebrow}
            </p>

            <h2
              id="services-detail-heading"
              className="font-serif text-4xl md:text-5xl text-ink leading-tight mb-6"
            >
              {SERVICES.heading}
            </h2>

            <p className="font-sans text-lg text-ink-muted leading-relaxed mb-10 max-w-md">
              {SERVICES.subtext}
            </p>

            <div className="w-10 h-px bg-gold mb-10" aria-hidden="true" />

            <LocalizedLink
              to="/contact"
              className="inline-flex items-center gap-2 font-sans text-sm font-bold uppercase tracking-law text-gold hover:text-gold-dark transition-colors duration-200 cursor-pointer group"
              aria-label={SERVICES.detail.ctaAriaLabel}
            >
              {SERVICES.detail.ctaLabel}
              <ArrowUpRight
                size={14}
                strokeWidth={2}
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </LocalizedLink>

            {/* Stats */}
            <div className="mt-12 inline-flex items-center gap-6">
              <div>
                <RollingNumber value={5} className="font-serif text-3xl text-ink leading-none" />
                <p className="font-sans text-xs text-ink-light uppercase tracking-law mt-1">
                  {SERVICES.detail.practiceAreasLabel}
                </p>
              </div>
              <div className="w-px h-10 bg-cream-darker" aria-hidden="true" />
              <div>
                <RollingNumber value={30} suffix="+" className="font-serif text-3xl text-ink leading-none" />
                <p className="font-sans text-xs text-ink-light uppercase tracking-law mt-1">
                  {SERVICES.detail.servicesOfferedLabel}
                </p>
              </div>
            </div>
          </div>

          {/* ── Right — CategoryList ─────────────────────────────────────── */}
          <div ref={rightRef} className="sr">
            <CategoryList categories={categories} />

            <p className="mt-5 font-sans text-xs text-ink-light leading-relaxed">
              {SERVICES.detail.helperPrefix}{helperSpacer}
              <LocalizedLink
                to="/contact"
                className="text-gold hover:text-gold-dark underline underline-offset-2 transition-colors duration-150 cursor-pointer"
              >
                {SERVICES.detail.helperLink}
              </LocalizedLink>{helperSpacer}
              {SERVICES.detail.helperSuffix}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
