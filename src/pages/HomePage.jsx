import { lazy, Suspense } from "react";
import Hero from "../components/Hero";

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
      <Suspense fallback={null}>
        <ClientsStat />
        <MeetTheTeam />
        <PracticeAreas />
        <ServicesDetail />
        <PersonalizedServices />
        <ConsultationCTA />
      </Suspense>
    </main>
  );
}
