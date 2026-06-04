import { useScrollReveal } from "../hooks/useScrollReveal";
import { useContent } from "../i18n";
import { SmokeBackground } from "./ui/spooky-smoke-animation";
import LineBreakText from "./LineBreakText";

/**
 * MeetTheTeam
 *
 * Editorial two-column section on cream background.
 *   Left  — eyebrow, oversized serif heading, body copy, gold divider
 *   Right — team photo with signature offset-gold-border treatment
 *
 * Positioned between ClientsStat (dark) and ConsultationCTA (dark) so the
 * cream palette creates natural breathing room in the page rhythm.
 */
export default function MeetTheTeam() {
  const leftRef  = useScrollReveal(0.15);
  const rightRef = useScrollReveal(0.1);
  const { HOME } = useContent();
  const copy = HOME.meetTeam;

  return (
    <section
      id="team"
      aria-labelledby="team-heading"
      className="relative bg-cream py-24 pb-32 lg:py-32 overflow-hidden"
    >
      {/* ── Smoke background — blends into cream via multiply ───────────── */}
      <SmokeBackground
        smokeColor="#B8933F"
        className="opacity-[0.18]"
        style={{ mixBlendMode: "multiply" }}
      />

      {/* ── Subtle watermark glyph ───────────────────────────────────────── */}
      <div
        className="absolute -top-16 -left-8 font-serif text-[22rem] leading-none text-ink/[0.028] select-none pointer-events-none"
        aria-hidden="true"
      >
        §
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] gap-16 xl:gap-24 items-center">

          {/* ── Left — Content ───────────────────────────────────────────── */}
          <div ref={leftRef} className="sr">

            {/* Eyebrow */}
            <p className="eyebrow mb-5 flex items-center gap-3">
              <span className="gold-rule" aria-hidden="true" />
              {copy.eyebrow}
            </p>

            {/* Heading */}
            <h2
              id="team-heading"
              className="font-serif text-5xl md:text-6xl lg:text-7xl text-ink leading-display mb-8"
            >
              {copy.headingTop}
              <br />
              <em className="not-italic text-navy-mid">{copy.headingEmphasis}</em>
            </h2>

            {/* Gold rule */}
            <div className="w-12 h-px bg-gold mb-8" aria-hidden="true" />

            {/* Body */}
            <p className="font-sans text-lg text-ink-muted leading-relaxed mb-6 max-w-md">
              <LineBreakText text={copy.body} />
            </p>

            <p className="font-sans text-base text-ink-light leading-relaxed max-w-md">
              <LineBreakText text={copy.secondary} />
            </p>

            {/* Bottom accent */}
            <div className="mt-12 flex items-center gap-5">
              <div className="w-10 h-px bg-gold/50" aria-hidden="true" />
              <span className="font-sans text-xs text-ink-light uppercase tracking-law">
                {copy.location}
              </span>
            </div>
          </div>

          {/* ── Right — Photo ─────────────────────────────────────────────── */}
          <div ref={rightRef} className="relative sr">

            {/* Photo wrapper */}
            <div className="relative rounded-sm overflow-hidden shadow-2xl shadow-ink/10">
              <img
                src="/team.jpg"
                alt={copy.imageAlt}
                className="w-full h-auto object-cover object-top block"
                style={{ maxHeight: "680px", objectPosition: "center 15%" }}
                loading="lazy"
              />

              {/* Subtle gold vignette overlay at the bottom */}
              <div
                className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to top, rgba(184,147,63,0.06) 0%, transparent 100%)",
                }}
                aria-hidden="true"
              />
            </div>

            {/* Offset gold border — matches PersonalizedServices treatment */}
            <div
              className="absolute -bottom-3 -right-3 w-full h-full border border-gold/25 rounded-sm pointer-events-none hidden sm:block"
              aria-hidden="true"
            />

            {/* Caption chip */}
            <div className="absolute -bottom-5 left-6 bg-white border border-cream-darker rounded-sm px-5 py-3 shadow-sm flex items-center gap-3">
              <span className="block w-2 h-2 rounded-full bg-gold flex-shrink-0" aria-hidden="true" />
              <span className="font-sans text-xs text-ink-light uppercase tracking-law">
                {copy.caption}
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
