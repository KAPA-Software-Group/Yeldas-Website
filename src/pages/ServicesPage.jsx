import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { SERVICES } from "../constants/content";
import { useScrollReveal } from "../hooks/useScrollReveal";
import TorontoSkyline from "../components/ui/toronto-skyline";

// ─── Per-category context copy (left column) ─────────────────────────────────
const CATEGORY_META = {
  inadmissibility: {
    description:
      "Navigate complex admissibility challenges with experienced legal counsel. We represent clients facing medical, criminal, and removal proceedings.",
  },
  "permanent-resident": {
    description:
      "Secure your path to permanent residence through the right stream for your profile — from Express Entry to compassionate grounds.",
  },
  "temporary-resident": {
    description:
      "Enter, work, or study in Canada with confidence. We handle the full range of temporary resident applications.",
  },
  "business-immigration": {
    description:
      "Bring your entrepreneurial vision to Canada through specialized business immigration programs designed for founders and executives.",
  },
  citizenship: {
    description:
      "Achieve Canadian citizenship or resolve citizenship-related challenges with skilled, experienced legal representation.",
  },
};

// ─── Hero ─────────────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section
      className="relative overflow-hidden bg-navy px-6 lg:px-12"
      style={{ minHeight: "clamp(34rem, 58vw, 56rem)" }}
      aria-label="Services hero"
    >
      <div
        className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-gold/0 via-gold/40 to-gold/0"
        aria-hidden="true"
      />
      {/* Decorative numeral */}
      <div
        className="pointer-events-none absolute left-[62%] top-[40%] -translate-y-1/2 select-none font-serif leading-none text-white/[0.03]"
        style={{ fontSize: "clamp(20rem, 44vw, 44rem)" }}
        aria-hidden="true"
      >
        §
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl items-center" style={{ minHeight: "inherit", paddingTop: "clamp(5.5rem, 12vw, 9rem)" }}>
        <div className="py-10 lg:py-16">
          <p className="hero-line eyebrow mb-6 flex items-center gap-3 text-gold-muted">
            <span className="gold-rule" aria-hidden="true" />
            What We Offer
          </p>
          <h1 className="hero-line font-serif leading-display text-white"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}>
            Our{" "}
            <em className="not-italic text-gold-muted">Services</em>
          </h1>
          <div className="hero-line mt-8 h-px w-16 bg-gold/40" aria-hidden="true" />
          <p className="hero-line mt-8 max-w-2xl font-sans text-xl leading-relaxed text-white/65">
            Comprehensive immigration and legal services tailored to your unique
            situation — from first consultation to final resolution.
          </p>
          <div className="hero-line mt-10">
            <Link
              to="/contact"
              className="inline-flex cursor-pointer items-center gap-2.5 rounded-sm bg-gold px-7 py-3.5 font-sans text-sm font-bold text-white transition-colors duration-200 hover:bg-gold-light group"
            >
              Request a Consultation
              <ArrowRight size={15} strokeWidth={2} aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>

      {/* Toronto skyline silhouette */}
      <TorontoSkyline opacity={0.55} />

      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-navy to-transparent"
        aria-hidden="true"
      />
    </section>
  );
}

// ─── Intro ────────────────────────────────────────────────────────────────────
function IntroSection() {
  const ref = useScrollReveal(0.1);
  return (
    <section className="border-b border-cream-darker bg-cream py-24 lg:py-32">
      <div ref={ref} className="mx-auto max-w-7xl px-6 lg:px-12">
        <p className="sr eyebrow mb-6 flex items-center gap-3">
          <span className="gold-rule gold-rule--dark" aria-hidden="true" />
          Full Spectrum Coverage
        </p>
        <div className="sr flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-20">
          <h2 className="text-balance font-serif leading-display text-ink"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.75rem)" }}>
            Every Service,{" "}
            <em className="not-italic text-navy-mid">Under One Roof</em>
          </h2>
          <p className="max-w-sm font-sans text-lg leading-relaxed text-ink-muted lg:text-right lg:shrink-0">
            Structured representation across the full range of Canadian
            immigration law — one firm, every need.
          </p>
        </div>
        <div className="sr mt-10 h-px bg-cream-darker" aria-hidden="true" />
      </div>
    </section>
  );
}

// ─── Service Section ──────────────────────────────────────────────────────────
function ServiceSection({ category, index }) {
  const headerRef = useScrollReveal(0.08);
  const cardRef   = useScrollReveal(0.06);
  const isLight   = index % 2 === 0;
  const meta      = CATEGORY_META[category.id] ?? {};

  return (
    <section
      id={category.id}
      className={[
        "border-b border-cream-darker py-24 lg:py-32",
        isLight ? "bg-white" : "bg-cream",
      ].join(" ")}
      aria-labelledby={`${category.id}-heading`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1.5fr] lg:gap-20 xl:gap-28">

          {/* Left — label + title + description */}
          <div ref={headerRef} className="lg:sticky lg:top-32 lg:self-start">
            <p className="sr mb-5 font-sans text-xs font-bold uppercase tracking-law text-gold">
              Practice Area {String(index + 1).padStart(2, "0")}
            </p>
            <h2
              id={`${category.id}-heading`}
              className="sr text-balance font-serif text-3xl leading-tight text-ink md:text-4xl"
            >
              {category.title}
            </h2>
            <div className="sr mt-7 h-px w-14 bg-gold/50" aria-hidden="true" />
            {meta.description && (
              <p className="sr mt-7 font-sans text-base leading-relaxed text-ink-muted">
                {meta.description}
              </p>
            )}
          </div>

          {/* Right — items card */}
          <div
            ref={cardRef}
            className="sr rounded-sm border border-cream-darker bg-white p-8 shadow-sm sm:p-10 lg:p-12"
          >
            <ul
              className="grid grid-cols-1 gap-x-10 gap-y-7 sm:grid-cols-2 lg:gap-x-12 lg:gap-y-8"
              role="list"
            >
              {category.items.map((item) => (
                <li key={item} className="flex items-start gap-3.5">
                  <CheckCircle
                    size={17}
                    strokeWidth={1.6}
                    className="mt-0.5 shrink-0 text-gold"
                    aria-hidden="true"
                  />
                  <span className="font-sans text-base leading-relaxed text-ink-muted sm:text-lg">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* Card footer */}
            <div className="mt-10 flex items-center gap-3 border-t border-cream-darker pt-7">
              <span className="font-sans text-xs uppercase tracking-law text-ink-light">
                {category.items.length} service{category.items.length !== 1 ? "s" : ""}
              </span>
              <div className="h-px flex-1 bg-cream-darker" aria-hidden="true" />
              <Link
                to="/contact"
                className="inline-flex cursor-pointer items-center gap-1.5 font-sans text-xs font-bold uppercase tracking-law text-gold transition-colors duration-200 hover:text-gold-light group"
              >
                Enquire
                <ArrowRight size={11} strokeWidth={2} aria-hidden="true"
                  className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// ─── CTA ──────────────────────────────────────────────────────────────────────
function CTASection() {
  const ref = useScrollReveal(0.12);
  return (
    <section className="bg-navy py-24 lg:py-36" aria-label="Get in touch">
      <div
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-gold/0 via-gold/30 to-gold/0"
        aria-hidden="true"
      />
      <div ref={ref} className="mx-auto max-w-3xl px-6 text-center lg:px-12">
        <p className="sr eyebrow mb-6 flex items-center justify-center gap-3 text-gold-muted">
          <span className="gold-rule" aria-hidden="true" />
          Ready to Begin
          <span className="gold-rule" aria-hidden="true" />
        </p>
        <h2 className="sr text-balance font-serif leading-display text-white"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}>
          Not Sure Where to Start?
        </h2>
        <p className="sr mx-auto mt-8 max-w-xl font-sans text-lg leading-relaxed text-white/60">
          Every immigration journey is different. Contact our team for a
          confidential consultation and we will identify the right path for you.
        </p>
        <div className="sr mt-10">
          <Link
            to="/contact"
            className="inline-flex cursor-pointer items-center gap-2.5 rounded-sm bg-gold px-9 py-4 font-sans text-sm font-bold text-white transition-colors duration-200 hover:bg-gold-light group"
          >
            Request a Consultation
            <ArrowRight size={15} strokeWidth={2} aria-hidden="true"
              className="transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function ServicesPage() {
  return (
    <main id="main" className="overflow-x-clip">
      <HeroSection />
      <IntroSection />
      {SERVICES.categories.map((category, index) => (
        <ServiceSection key={category.id} category={category} index={index} />
      ))}
      <CTASection />
    </main>
  );
}
