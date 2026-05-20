import { Suspense, lazy } from "react";
import { Navigate, Outlet, Route, Routes, useParams } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import IntroLoader from "./components/IntroLoader";
import ScrollToTop from "./components/ScrollToTop";
import SEO from "./components/SEO";
import { I18nProvider, isSupportedLocale, useI18n } from "./i18n";

const HomePage    = lazy(() => import("./pages/HomePage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const AboutPage    = lazy(() => import("./pages/AboutPage"));
const ContactPage  = lazy(() => import("./pages/ContactPage"));

function SiteLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

function LocaleLayout() {
  const { locale } = useParams();
  if (!isSupportedLocale(locale)) return <Navigate to="/en" replace />;
  return <SiteLayout />;
}

function LocaleFallback() {
  const { locale } = useI18n();
  return <Navigate to={`/${locale}`} replace />;
}

function AppShell() {
  const { content } = useI18n();

  return (
    <>
      <IntroLoader />
      <ScrollToTop />
      <SEO />

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-gold focus:text-white focus:font-sans focus:text-sm focus:rounded-sm"
      >
        {content.UI.skipToMain}
      </a>

      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Navigate to="/en" replace />} />
          <Route path="/:locale" element={<LocaleLayout />}>
            <Route index element={<HomePage />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="*" element={<LocaleFallback />} />
          </Route>
          <Route path="*" element={<Navigate to="/en" replace />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default function App() {
  return (
    <I18nProvider>
      <AppShell />
    </I18nProvider>
  );
}
