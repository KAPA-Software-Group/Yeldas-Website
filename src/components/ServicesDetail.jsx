import {
  ArrowRight,
  ArrowUpRight,
  Shield,
  Home,
  Clock,
  Briefcase,
  Award,
} from "lucide-react";
import { CategoryList } from "@/components/ui/category-list";
import { SERVICES } from "../constants/content";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { RollingNumber } from "./ui/rolling-number";

/**
 * ServicesDetail
 *
 * Two-column layout:
 *   Left  — sticky intro, CTA, stats
 *   Right — CategoryList component (hover-expand cards per service category)
 *
 * Background: cream-dark — visually distinct from the white PersonalizedServices section.
 */

const CATEGORY_ICONS = {
  inadmissibility: <Shield size={22} strokeWidth={1.5} />,
  "permanent-resident": <Home size={22} strokeWidth={1.5} />,
  "temporary-resident": <Clock size={22} strokeWidth={1.5} />,
  "business-immigration": <Briefcase size={22} strokeWidth={1.5} />,
  citizenship: <Award size={22} strokeWidth={1.5} />,
};

const CATEGORY_SUBTITLES = {
  inadmissibility: "Medical · Criminal · Deportation & Removal",
  "permanent-resident": "Express Entry · Family Class · PNP & more",
  "temporary-resident": "Work Permits · Study Permits · Visitor Visa & more",
  "business-immigration": "Start-Up · Entrepreneur · Intra-Company Transferee",
  citizenship: "Applications · Refusals · Passport & Resumption",
};

export default function ServicesDetail() {
  const leftRef  = useScrollReveal(0.15);
  const rightRef = useScrollReveal(0.1);

  const categories = SERVICES.categories.map((cat) => ({
    id: cat.id,
    title: cat.title,
    subtitle: CATEGORY_SUBTITLES[cat.id],
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

            <a
              href="#contact"
              className="inline-flex items-center gap-2 font-sans text-sm font-bold uppercase tracking-law text-gold hover:text-gold-dark transition-colors duration-200 cursor-pointer group"
              aria-label="Request a consultation about our immigration services"
            >
              Request a Consultation
              <ArrowUpRight
                size={14}
                strokeWidth={2}
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>

            {/* Stats */}
            <div className="mt-12 inline-flex items-center gap-6">
              <div>
                <RollingNumber value={5} className="font-serif text-3xl text-ink leading-none" />
                <p className="font-sans text-xs text-ink-light uppercase tracking-law mt-1">
                  Practice Areas
                </p>
              </div>
              <div className="w-px h-10 bg-cream-darker" aria-hidden="true" />
              <div>
                <RollingNumber value={30} suffix="+" className="font-serif text-3xl text-ink leading-none" />
                <p className="font-sans text-xs text-ink-light uppercase tracking-law mt-1">
                  Services Offered
                </p>
              </div>
            </div>
          </div>

          {/* ── Right — CategoryList ─────────────────────────────────────── */}
          <div ref={rightRef} className="sr">
            <CategoryList categories={categories} />

            <p className="mt-5 font-sans text-xs text-ink-light leading-relaxed">
              Not sure which service applies to your situation?{" "}
              <a
                href="#contact"
                className="text-gold hover:text-gold-dark underline underline-offset-2 transition-colors duration-150 cursor-pointer"
              >
                Contact us
              </a>{" "}
              and we will guide you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
