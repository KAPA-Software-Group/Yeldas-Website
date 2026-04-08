import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { HERO } from "../constants/content";
import WireframeDottedGlobe from "./ui/wireframe-dotted-globe";
import { Waves } from "./ui/wave-background";
import { RollingNumber } from "./ui/rolling-number";
import TorontoSkyline from "./ui/toronto-skyline";

/**
 * ─── GLOBE MARKERS ───────────────────────────────────────────────────────────
 * Add, remove, or edit entries here to control which countries are highlighted.
 * Each entry needs: name (label), lat (latitude), lng (longitude).
 *
 * Find coordinates at: https://www.latlong.net/
 */
const GLOBE_MARKERS = [
  // — Original —
  { name: "Canada",           lat:  56.1304, lng: -106.3468 },
  { name: "United States",    lat:  37.0902, lng:  -95.7129 },
  { name: "United Kingdom",   lat:  55.3781, lng:   -3.4360 },
  { name: "Germany",          lat:  51.1657, lng:   10.4515 },
  { name: "India",            lat:  20.5937, lng:   78.9629 },
  { name: "Pakistan",         lat:  30.3753, lng:   69.3451 },
  { name: "Afghanistan",      lat:  33.9391, lng:   67.7100 },
  // — Africa —
  { name: "Nigeria",          lat:   9.0820, lng:    8.6753 },
  { name: "Kenya",            lat:  -0.0236, lng:   37.9062 },
  { name: "Egypt",            lat:  26.8206, lng:   30.8025 },
  { name: "Ethiopia",         lat:   9.1450, lng:   40.4897 },
  { name: "Ghana",            lat:   7.9465, lng:   -1.0232 },
  { name: "Somalia",          lat:   5.1521, lng:   46.1996 },
  // — Asia & Middle East —
  { name: "Philippines",      lat:  12.8797, lng:  121.7740 },
  { name: "Bangladesh",       lat:  23.6850, lng:   90.3563 },
  { name: "Sri Lanka",        lat:   7.8731, lng:   80.7718 },
  { name: "Vietnam",          lat:  14.0583, lng:  108.2772 },
  { name: "South Korea",      lat:  35.9078, lng:  127.7669 },
  { name: "UAE",              lat:  23.4241, lng:   53.8478 },
  { name: "Saudi Arabia",     lat:  23.8859, lng:   45.0792 },
  { name: "Iraq",             lat:  33.2232, lng:   43.6793 },
  // — Europe —
  { name: "France",           lat:  46.2276, lng:    2.2137 },
  { name: "Poland",           lat:  51.9194, lng:   19.1451 },
  { name: "Romania",          lat:  45.9432, lng:   24.9668 },
  // — Latin America & Caribbean —
  { name: "Mexico",           lat:  23.6345, lng:  -102.5528 },
  { name: "Brazil",           lat: -14.2350, lng:  -51.9253 },
  { name: "Colombia",         lat:   4.5709, lng:   -74.2973 },
  { name: "Jamaica",          lat:  18.1096, lng:   -77.2975 },
  // — Oceania —
  { name: "Australia",        lat: -25.2744, lng:  133.7751 },
];

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative min-h-[100svh] flex flex-col lg:flex-row overflow-hidden"
    >
      {/* ── Wave background — base layer behind both panels ──────────────── */}
      <Waves strokeColor="rgba(184, 147, 63, 0.14)" />

      {/* ── Toronto skyline underlay — anchored to bottom of hero ────────── */}
      <TorontoSkyline />

      {/* ── Left Panel — Text Content ─────────────────────────────────────── */}
      {/*
        bg-navy/[0.88] lets the silk shimmer through very subtly beneath the
        text, giving depth without hurting legibility.
      */}
      <div className="relative z-10 flex flex-col justify-center bg-navy/[0.74] lg:w-[58%] min-h-[100svh] lg:min-h-screen px-8 md:px-16 xl:px-24 pt-28 pb-16 lg:pt-24">
        {/* Subtle top accent line */}
        <div
          className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-gold/0 via-gold/40 to-gold/0"
          aria-hidden="true"
        />

        <div className="max-w-xl">
          {/* Eyebrow */}
          <p className="hero-line eyebrow mb-6 flex items-center gap-3">
            <span className="gold-rule" aria-hidden="true" />
            {HERO.eyebrow}
          </p>

          {/* Headline */}
          <h1 className="hero-line font-serif text-3xl sm:text-4xl md:text-5xl xl:text-[4.25rem] text-white leading-display mb-6">
            <span className="block">{HERO.headlineTop}</span>
            <em className="not-italic text-gold-muted block">{HERO.headlineBottom}</em>
          </h1>

          {/* Thin gold divider */}
          <div className="hero-line w-16 h-px bg-gold/50 mb-7" aria-hidden="true" />

          {/* Subtext */}
          <p className="hero-line font-sans text-lg text-white/65 leading-relaxed mb-10 max-w-md">
            {HERO.subtext}
          </p>

          {/* CTAs */}
          <div className="hero-line flex flex-wrap items-center gap-4">
            <Link
              to={HERO.primaryCTA.href}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-gold hover:bg-gold-light text-white font-sans font-bold text-sm tracking-wide transition-all duration-200 rounded-sm cursor-pointer group"
            >
              {HERO.primaryCTA.label}
              <ArrowRight
                size={15}
                strokeWidth={2}
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>

            <Link
              to={HERO.secondaryCTA.href}
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/25 hover:border-gold/60 text-white/80 hover:text-white font-sans text-sm tracking-wide transition-all duration-200 rounded-sm cursor-pointer"
            >
              {HERO.secondaryCTA.label}
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-8 md:left-16 xl:left-24 flex items-center gap-3 opacity-40"
          aria-hidden="true"
        >
          <div className="w-px h-10 bg-white/50 animate-pulse" />
          <span className="font-sans text-xs text-white uppercase tracking-law">
            Scroll
          </span>
        </div>
      </div>

      {/* ── Right Panel — Rotating Globe ─────────────────────────────────── */}
      {/*
        bg-navy/[0.60] — more transparent than the left panel so the silk is
        visible in the areas around the globe (corners, top, bottom).
      */}
      <div className="hidden lg:block lg:w-[42%] relative bg-navy/[0.40] z-10">
        {/* Globe fills the full panel */}
        <WireframeDottedGlobe
          className="absolute inset-0"
          markers={GLOBE_MARKERS}
          highlightColor="#FFFFFF"
        />

        {/* Radial vignette — fades globe edges into the panel bg */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at center, transparent 50%, #0F172A 100%)",
          }}
          aria-hidden="true"
        />

        {/* Caption */}
        <div className="absolute bottom-8 left-0 right-0 flex flex-col items-center gap-3 z-10 pointer-events-none">
          <div className="w-10 h-px bg-gold/50" aria-hidden="true" />
          <p className="font-serif text-xl text-white/80 leading-tight">
            Countries We've Served
          </p>
          <p className="font-sans text-xs text-gold-muted uppercase tracking-law">
            <RollingNumber value={28} /> Nations &amp; Growing
          </p>
        </div>
      </div>
    </section>
  );
}
