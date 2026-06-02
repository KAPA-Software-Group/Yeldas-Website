import { ArrowUpRight } from "lucide-react";
import { PRACTICE_AREAS } from "../constants/content";
import { useScrollReveal } from "../hooks/useScrollReveal";

function PracticeCard({ area, className = "" }) {
  return (
    <a
      href={area.href}
      aria-label={area.ariaLabel}
      className={`group relative flex flex-col bg-white border border-cream-darker hover:border-gold/40 p-8 xl:p-10 transition-all duration-300 cursor-pointer rounded-sm overflow-hidden hover:shadow-lg hover:shadow-ink/[0.06] hover:-translate-y-0.5 ${className}`}
    >
      {/* Bottom border accent — grows on hover */}
      <div
        className="absolute bottom-0 left-0 h-0.5 bg-gold transition-all duration-500 w-0 group-hover:w-full"
        aria-hidden="true"
      />

      {/* Title */}
      <h3 className="font-serif text-2xl xl:text-3xl text-ink mb-4 leading-tight group-hover:text-navy transition-colors duration-200">
        {area.title}
      </h3>

      {/* Description */}
      <p className="font-sans text-sm text-ink-muted leading-relaxed mb-8 flex-1">
        {area.description}
      </p>

      {/* Link */}
      <div className="flex items-center gap-2 text-gold font-sans text-xs font-bold uppercase tracking-law">
        <span>Learn More</span>
        <ArrowUpRight
          size={14}
          strokeWidth={2}
          aria-hidden="true"
          className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </div>
    </a>
  );
}

export default function PracticeAreas() {
  const headerRef = useScrollReveal(0.2);
  const gridRef   = useScrollReveal(0.1);

  return (
    <section
      id="services"
      aria-labelledby="practice-areas-heading"
      className="bg-cream-dark py-24 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div ref={headerRef} className="mb-16 lg:mb-20">
          <p className="sr eyebrow mb-4 flex items-center gap-3">
            <span className="gold-rule" aria-hidden="true" />
            {PRACTICE_AREAS.eyebrow}
          </p>
          <div className="sr flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <h2
              id="practice-areas-heading"
              className="font-serif text-4xl md:text-5xl lg:text-6xl text-ink leading-tight max-w-lg"
            >
              {PRACTICE_AREAS.heading}
            </h2>
            <p className="font-sans text-base text-ink-muted max-w-xs lg:text-right">
              {PRACTICE_AREAS.subtext}
            </p>
          </div>
          {/* Separator */}
          <div className="sr mt-8 h-px bg-cream-darker" aria-hidden="true" />
        </div>

        {/* Cards Grid — staggered entrance */}
        <div
          ref={gridRef}
          className="sr-stagger grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
        >
          {PRACTICE_AREAS.areas.map((area) => (
            <PracticeCard key={area.title} area={area} className="sr" />
          ))}
        </div>
      </div>
    </section>
  );
}
