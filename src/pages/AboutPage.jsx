import { useState, useEffect } from "react";
import { ArrowRight, CheckCircle, X } from "lucide-react";
import LineBreakText from "../components/LineBreakText";
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
            <LineBreakText text={ABOUT.hero.heading} />
          </h1>
          <div className="hero-line mt-8 h-px w-16 bg-gold/40" aria-hidden="true" />
          <p className="hero-line mt-8 max-w-2xl font-sans text-xl leading-relaxed text-white/65">
            <LineBreakText text={ABOUT.hero.subtext} />
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
              <LineBreakText text={ABOUT.story.heading} />
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
                <LineBreakText text={para} />
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
              <LineBreakText text={ABOUT.valuesSection.heading} />
            </h2>
            <p className="max-w-xs font-sans text-base text-ink-muted lg:text-right">
              <LineBreakText text={ABOUT.valuesSection.subtext} />
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
                <LineBreakText text={value.title} />
              </h3>
              <p className="flex-1 font-sans text-sm leading-relaxed text-ink-muted">
                <LineBreakText text={value.description} />
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
              <LineBreakText text={ABOUT.approach.heading} />
            </h2>
            <div className="sr mt-7 h-px w-14 bg-gold/50" aria-hidden="true" />
            <p className="sr mt-7 font-sans text-base leading-relaxed text-ink-muted">
              <LineBreakText text={ABOUT.approach.body} />
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
                    <LineBreakText text={point} />
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

// ─── Team Modal ───────────────────────────────────────────────────────────────
function TeamModal({ member, onClose }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setVisible(true));
    const handler = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const paragraphs = member.bio.split("\n\n").filter(Boolean);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8"
      style={{
        background: `rgba(10, 15, 31, ${visible ? 0.75 : 0})`,
        backdropFilter: "blur(6px)",
        transition: "background 0.35s ease",
      }}
      onClick={onClose}
    >
      <div
        className="relative flex w-full max-w-4xl flex-col overflow-hidden rounded-sm bg-white shadow-2xl lg:flex-row"
        style={{
          maxHeight: "90vh",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0) scale(1)" : "translateY(20px) scale(0.97)",
          transition: "opacity 0.35s ease, transform 0.35s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-ink shadow transition-colors hover:bg-cream"
        >
          <X size={16} strokeWidth={2} />
        </button>

        {/* Photo */}
        <div className="h-64 shrink-0 overflow-hidden lg:h-auto lg:w-[38%]">
          {member.photo ? (
            <img
              src={member.photo}
              alt={member.name}
              className="h-full w-full object-cover object-top"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-navy">
              <span className="select-none font-serif text-4xl text-gold-muted">?</span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col overflow-y-auto p-8 lg:p-10">
          <div className="mb-1 h-px w-10 bg-gold/50" aria-hidden="true" />
          <p className="mt-4 font-sans text-xs font-bold uppercase tracking-law text-gold">
            {member.role}
          </p>
          <h3 className="mt-2 font-serif text-2xl leading-tight text-ink lg:text-3xl">
            {member.name}
          </h3>

          <div className="mt-6 h-px bg-cream-darker" aria-hidden="true" />

          {/* Bio paragraphs */}
          <div className="mt-6 flex flex-col gap-4">
            {paragraphs.map((para, i) => (
              <p key={i} className="font-sans text-sm leading-relaxed text-ink-muted">
                {para}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Team Card ────────────────────────────────────────────────────────────────
function TeamCard({ member, onClick }) {
  return (
    <div
      role="button"
      tabIndex={0}
      aria-label={`${member.name} — click to read bio`}
      className="cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded-[2.5rem]"
      style={{ height: "34rem" }}
      onClick={onClick}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
    >
      <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] border-2 border-ink/10 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-gold/30 hover:shadow-2xl">
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
          <div className="flex h-full w-full flex-col items-center justify-center bg-navy-mid">
            <div
              className="flex items-center justify-center rounded-full border border-gold/30 bg-navy text-gold-muted"
              style={{ width: "5rem", height: "5rem" }}
            >
              <span className="font-serif text-2xl select-none">?</span>
            </div>
            <p className="mt-5 font-sans text-xs uppercase tracking-law text-white/30">
              Photo Coming Soon
            </p>
          </div>
        )}

        {/* Name bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy via-navy/80 to-transparent px-6 pb-6 pt-14">
          <p className="font-serif text-xl text-white leading-tight">{member.name}</p>
          <p className="mt-1 font-sans text-xs uppercase tracking-law text-gold-muted">
            {member.role}
          </p>
        </div>

        <div className="absolute right-4 top-4 h-2 w-2 rounded-full bg-gold/60" aria-hidden="true" />
      </div>
    </div>
  );
}

// ─── Team Section ─────────────────────────────────────────────────────────────
function TeamSection() {
  const headerRef = useScrollReveal(0.12);
  const gridRef = useScrollReveal(0.08);
  const [selected, setSelected] = useState(null);
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
              <LineBreakText text={ABOUT.teamSection.heading} />
            </h2>
            <p className="max-w-xs font-sans text-base text-ink-muted lg:text-right">
              <LineBreakText text={ABOUT.teamSection.subtext} />
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

              <TeamCard member={member} teamCopy={ABOUT.teamSection} onClick={() => setSelected(member)} />

            </div>
          ))}
        </div>
      </div>

      {selected && <TeamModal member={selected} onClose={() => setSelected(null)} />}
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
          <LineBreakText text={ABOUT.cta.heading} />
        </h2>
        <p className="sr mx-auto mt-8 max-w-xl font-sans text-lg leading-relaxed text-white/60">
          <LineBreakText text={ABOUT.cta.subtext} />
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
