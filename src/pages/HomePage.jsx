import { lazy } from "react";
import Hero from "../components/Hero";
import LazySection from "../components/LazySection";

const ClientsStat          = lazy(() => import("../components/ClientsStat"));
const MeetTheTeam          = lazy(() => import("../components/MeetTheTeam"));
const PracticeAreas        = lazy(() => import("../components/PracticeAreas"));
const ServicesDetail       = lazy(() => import("../components/ServicesDetail"));
const PersonalizedServices = lazy(() => import("../components/PersonalizedServices"));
const ConsultationCTA      = lazy(() => import("../components/ConsultationCTA"));

export default function HomePage() {
  return (
    <main id="main" className="overflow-x-clip">
      <Hero />
      <LazySection minHeight={360} rootMargin="900px 0px">
        <ClientsStat />
      </LazySection>
      <LazySection minHeight={680}>
        <MeetTheTeam />
      </LazySection>
      <LazySection minHeight={620}>
        <PracticeAreas />
      </LazySection>
      <LazySection minHeight={680}>
        <ServicesDetail />
      </LazySection>
      <LazySection minHeight={520}>
        <PersonalizedServices />
      </LazySection>
      <LazySection minHeight={420}>
        <ConsultationCTA />
      </LazySection>
    </main>
  );
}
