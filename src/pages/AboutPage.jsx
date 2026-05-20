import { useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";
import LocalizedLink from "../components/LocalizedLink";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { useContent } from "../i18n";

function HeroSection() {
  const { ABOUT } = useContent();

  return (
    <section
      className="relative overflow-hidden bg-navy px-6 lg:px-12"
      style={{ minHeight: "clamp(34rem, 58vw, 56rem)" }}
      aria-label={ABOUT.hero.ariaLabel}
    >
      <div
        className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-gold/0 via-gold/40 to-gold/0"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 select-none font-serif leading-none text-white/[0.028]"
        style={{ fontSize: "clamp(10rem, 22vw, 22rem)" }}
        aria-hidden="true"
      >
        &para;
      </div>

      <div className="relative mx-auto flex max-w-7xl items-center" style={{ minHeight: "inherit", paddingTop: "clamp(5.5rem, 12vw, 9rem)" }}>
        <div className="py-10 lg:py-16">
          <p className="hero-line eyebrow mb-6 flex items-center gap-3 text-gold-muted">
            <span className="gold-rule" aria-hidden="true" />
            {ABOUT.hero.eyebrow}
          </p>
          <h1
            className="hero-line font-serif leading-display text-white"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            {ABOUT.hero.heading}
          </h1>
          <div className="hero-line mt-8 h-px w-16 bg-gold/40" aria-hidden="true" />
          <p className="hero-line mt-8 max-w-2xl font-sans text-xl leading-relaxed text-white/65">
            {ABOUT.hero.subtext}
          </p>
        </div>
      </div>

      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-navy to-transparent"
        aria-hidden="true"
      />
    </section>
  );
}

function StorySection() {
  const ref = useScrollReveal(0.08);
  const { ABOUT } = useContent();

  return (
    <section className="border-b border-cream-darker bg-cream py-24 lg:py-32">
      <div ref={ref} className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20 xl:gap-28">
          <div>
            <p className="sr eyebrow mb-6 flex items-center gap-3">
              <span className="gold-rule gold-rule--dark" aria-hidden="true" />
              {ABOUT.story.eyebrow}
            </p>
            <h2
              className="sr text-balance font-serif leading-display text-ink"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              {ABOUT.story.heading}
            </h2>
            <div className="sr mt-8 h-px w-14 bg-gold/50" aria-hidden="true" />
          </div>

          <div className="flex flex-col justify-center gap-6">
            {ABOUT.story.body.map((para, i) => (
              <p
                key={para}
                className="sr font-sans text-lg leading-relaxed text-ink-muted"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {para}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ValuesSection() {
  const headerRef = useScrollReveal(0.15);
  const gridRef = useScrollReveal(0.08);
  const { ABOUT } = useContent();

  return (
    <section className="border-b border-cream-darker bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div ref={headerRef} className="mb-14 lg:mb-20">
          <p className="sr eyebrow mb-4 flex items-center gap-3">
            <span className="gold-rule gold-rule--dark" aria-hidden="true" />
            {ABOUT.valuesSection.eyebrow}
          </p>
          <div className="sr flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <h2
              className="text-balance font-serif leading-tight text-ink"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              {ABOUT.valuesSection.heading}
            </h2>
            <p className="max-w-xs font-sans text-base text-ink-muted lg:text-right">
              {ABOUT.valuesSection.subtext}
            </p>
          </div>
          <div className="sr mt-8 h-px bg-cream-darker" aria-hidden="true" />
        </div>

        <div
          ref={gridRef}
          className="sr-stagger grid grid-cols-1 gap-5 md:grid-cols-3 lg:gap-6"
        >
          {ABOUT.values.map((value) => (
            <div
              key={value.number}
              className="sr group relative flex flex-col overflow-hidden rounded-sm border border-cream-darker bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/30 hover:shadow-md xl:p-10"
            >
              <div
                className="absolute bottom-0 left-0 h-0.5 w-0 bg-gold transition-all duration-500 group-hover:w-full"
                aria-hidden="true"
              />
              <span
                className="mb-6 select-none font-serif leading-none text-cream-darker transition-colors duration-300 group-hover:text-gold/20"
                style={{ fontSize: "clamp(4rem, 8vw, 6rem)" }}
                aria-hidden="true"
              >
                {value.number}
              </span>
              <h3 className="mb-3 font-serif text-2xl text-ink transition-colors duration-200 group-hover:text-navy">
                {value.title}
              </h3>
              <p className="flex-1 font-sans text-sm leading-relaxed text-ink-muted">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ApproachSection() {
  const leftRef = useScrollReveal(0.08);
  const rightRef = useScrollReveal(0.06);
  const { ABOUT } = useContent();

  return (
    <section className="border-b border-cream-darker bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1.3fr] lg:gap-20 xl:gap-28">
          <div ref={leftRef} className="lg:sticky lg:top-32 lg:self-start">
            <p className="sr eyebrow mb-6 flex items-center gap-3">
              <span className="gold-rule gold-rule--dark" aria-hidden="true" />
              {ABOUT.approach.eyebrow}
            </p>
            <h2
              className="sr text-balance font-serif leading-tight text-ink"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              {ABOUT.approach.heading}
            </h2>
            <div className="sr mt-7 h-px w-14 bg-gold/50" aria-hidden="true" />
            <p className="sr mt-7 font-sans text-base leading-relaxed text-ink-muted">
              {ABOUT.approach.body}
            </p>
          </div>

          <div
            ref={rightRef}
            className="sr rounded-sm border border-cream-darker bg-white p-8 shadow-sm sm:p-10 lg:p-12"
          >
            <ul className="flex flex-col gap-6" role="list">
              {ABOUT.approach.points.map((point) => (
                <li key={point} className="flex items-start gap-4 border-b border-cream-darker pb-6 last:border-0 last:pb-0">
                  <CheckCircle
                    size={17}
                    strokeWidth={1.6}
                    className="mt-0.5 shrink-0 text-gold"
                    aria-hidden="true"
                  />
                  <span className="font-sans text-base leading-relaxed text-ink-muted sm:text-lg">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function TeamCard({ member, teamCopy }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <button
      type="button"
      aria-label={teamCopy.cardAria(member.name, flipped)}
      aria-pressed={flipped}
      className="block w-full cursor-pointer appearance-none rounded-[2.5rem] border-0 bg-transparent p-0 text-left outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-white"
      style={{ perspective: "1200px", height: "34rem" }}
      onClick={() => setFlipped((f) => !f)}
    >
      <span
        className="relative block h-full w-full"
        style={{
          transformStyle: "preserve-3d",
          transition: "transform 0.65s cubic-bezier(0.4, 0, 0.2, 1)",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        <span
          className="absolute inset-0 block overflow-hidden rounded-[2.5rem] border-2 border-ink/10 shadow-xl"
          style={{ backfaceVisibility: "hidden" }}
        >
          {member.photo ? (
            <img
              src={member.photo}
              alt={member.name}
              className="h-full w-full object-cover object-top grayscale transition-all duration-700 ease-out"
              style={{ filter: "grayscale(100%)" }}
              onMouseEnter={(e) => (e.currentTarget.style.filter = "grayscale(0%)")}
              onMouseLeave={(e) => (e.currentTarget.style.filter = "grayscale(100%)")}
            />
          ) : (
            <span className="flex h-full w-full flex-col items-center justify-center bg-navy-mid">
              <span
                className="flex items-center justify-center rounded-full border border-gold/30 bg-navy text-gold-muted"
                style={{ width: "5rem", height: "5rem" }}
              >
                <span className="font-serif text-2xl select-none">?</span>
              </span>
              <span className="mt-5 font-sans text-xs uppercase tracking-law text-white/30">
                {teamCopy.photoComingSoon}
              </span>
            </span>
          )}

          <span className="absolute bottom-0 left-0 right-0 block bg-gradient-to-t from-navy via-navy/80 to-transparent px-6 pb-6 pt-14">
            <span className="block font-serif text-xl text-white leading-tight">{member.name}</span>
            <span className="mt-1 block font-sans text-xs uppercase tracking-law text-gold-muted">
              {member.role}
            </span>
          </span>

          <span className="absolute right-4 top-4 block h-2 w-2 rounded-full bg-gold/60" aria-hidden="true" />
        </span>

        <span
          className="absolute inset-0 flex flex-col rounded-[2.5rem] border-2 border-white/10 bg-navy p-8"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <span className="mb-6 h-px w-10 bg-gold/50" aria-hidden="true" />
          <span className="font-sans text-xs font-bold uppercase tracking-law text-gold-muted">
            {member.role}
          </span>
          <span className="mt-2 block font-serif text-2xl text-white leading-tight">
            {member.name}
          </span>
          <span className="mt-5 h-px w-full bg-white/10" aria-hidden="true" />
          <span className="mt-5 flex-1 font-sans text-sm leading-relaxed text-white/70">
            {member.bio}
          </span>
          <span className="mt-6 h-2 w-2 self-start rounded-full bg-gold/30" aria-hidden="true" />
        </span>
      </span>
    </button>
  );
}

function TeamSection() {
  const headerRef = useScrollReveal(0.12);
  const gridRef = useScrollReveal(0.08);
  const { ABOUT } = useContent();

  return (
    <section className="border-b border-cream-darker bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div ref={headerRef} className="mb-14 lg:mb-20">
          <p className="sr eyebrow mb-4 flex items-center gap-3">
            <span className="gold-rule gold-rule--dark" aria-hidden="true" />
            {ABOUT.teamSection.eyebrow}
          </p>
          <div className="sr flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <h2
              className="text-balance font-serif leading-tight text-ink"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              {ABOUT.teamSection.heading}
            </h2>
            <p className="max-w-xs font-sans text-base text-ink-muted lg:text-right">
              {ABOUT.teamSection.subtext}
            </p>
          </div>
          <div className="sr mt-8 h-px bg-cream-darker" aria-hidden="true" />
        </div>

        <div
          ref={gridRef}
          className="sr-stagger grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {ABOUT.team.map((member) => (
            <div key={member.id} className="sr">
              <TeamCard member={member} teamCopy={ABOUT.teamSection} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  const ref = useScrollReveal(0.12);
  const { ABOUT } = useContent();

  return (
    <section className="bg-navy py-24 lg:py-36" aria-label={ABOUT.cta.ariaLabel}>
      <div ref={ref} className="mx-auto max-w-3xl px-6 text-center lg:px-12">
        <p className="sr eyebrow mb-6 flex items-center justify-center gap-3 text-gold-muted">
          <span className="gold-rule" aria-hidden="true" />
          {ABOUT.cta.eyebrow}
          <span className="gold-rule" aria-hidden="true" />
        </p>
        <h2
          className="sr text-balance font-serif leading-display text-white"
          style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}
        >
          {ABOUT.cta.heading}
        </h2>
        <p className="sr mx-auto mt-8 max-w-xl font-sans text-lg leading-relaxed text-white/60">
          {ABOUT.cta.subtext}
        </p>
        <div className="sr mt-10">
          <LocalizedLink
            to={ABOUT.cta.href}
            className="inline-flex cursor-pointer items-center gap-2.5 rounded-sm bg-gold px-9 py-4 font-sans text-sm font-bold text-white transition-colors duration-200 hover:bg-gold-light group"
          >
            {ABOUT.cta.label}
            <ArrowRight
              size={15}
              strokeWidth={2}
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </LocalizedLink>
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <main id="main" className="overflow-x-clip">
      <HeroSection />
      <TeamSection />
      <StorySection />
      <ValuesSection />
      <ApproachSection />
      <CTASection />
    </main>
  );
}
