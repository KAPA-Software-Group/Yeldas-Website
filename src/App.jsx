import { lazy, Suspense } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";

/**
 * Below-fold sections are lazy-loaded so the browser only downloads, parses,
 * and executes their code after the hero is visible. This improves FCP and
 * reduces initial main-thread work.
 *
 * Suspense fallback is null — sections are invisible until loaded anyway due
 * to the scroll-reveal animations applied inside each component.
 */
const PracticeAreas        = lazy(() => import("./components/PracticeAreas"));
const ServicesDetail       = lazy(() => import("./components/ServicesDetail"));
const PersonalizedServices = lazy(() => import("./components/PersonalizedServices"));
const ConsultationCTA      = lazy(() => import("./components/ConsultationCTA"));
const Footer               = lazy(() => import("./components/Footer"));

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-gold focus:text-white focus:font-sans focus:text-sm focus:rounded-sm"
      >
        Skip to main content
      </a>

      {/* Header + Hero load eagerly — they are always above the fold */}
      <Header />

      <main id="main">
        <Hero />

        {/* Lazy sections — Suspense boundary is invisible (null fallback) */}
        <Suspense fallback={null}>
          <PracticeAreas />
          <ServicesDetail />
          <PersonalizedServices />
          <ConsultationCTA />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  );
}
