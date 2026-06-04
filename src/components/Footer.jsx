import { Phone, Mail, MapPin, Linkedin } from "lucide-react";
import LocalizedLink from "./LocalizedLink";
import { useContent } from "../i18n";
import LineBreakText from "./LineBreakText";

/**
 * Footer
 *
 * Three-column layout: Brand + tagline | Quick Links | Contact Details
 * Bottom bar: copyright + legal links
 */

export default function Footer() {
  const { BRAND, FOOTER, UI } = useContent();

  return (
    <footer className="relative bg-navy-mid border-t border-white/10" role="contentinfo">
      {/* Thin gold gradient rule at the very top */}
      <div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-gold/0 via-gold/25 to-gold/0 -translate-y-px"
        aria-hidden="true"
      />
      {/* ── Main Footer Grid ────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* ── Col 1: Brand ─────────────────────────────────────────────── */}
          <div>
            {/* Logo */}
            <div className="flex items-center gap-3 mb-5">
              <img src="/logo.png" alt={BRAND.name} className="h-10 sm:h-12 w-auto" />
              <div className="flex flex-col" style={{ lineHeight: 1.15 }}>
                <span style={{
                  fontFamily: "'Josefin Sans', sans-serif",
                  fontWeight: 200,
                  fontSize: "0.95rem",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "#fff",
                }}>
                  Anwari
                </span>
                <span style={{
                  fontFamily: "'Josefin Sans', sans-serif",
                  fontWeight: 200,
                  fontSize: "0.95rem",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "#fff",
                }}>
                  Law
                </span>
              </div>
            </div>

            <p className="font-sans text-sm text-white/50 leading-relaxed max-w-xs mb-6">
              <LineBreakText text={FOOTER.tagline} />
            </p>

            {/* Social */}
            {BRAND.social.linkedin && BRAND.social.linkedin !== "#" && (
              <a
                href={BRAND.social.linkedin}
                aria-label={UI.linkedInAria}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-8 h-8 border border-white/15 hover:border-gold/50 text-white/50 hover:text-gold rounded-sm transition-all duration-200 cursor-pointer"
              >
                <Linkedin size={14} strokeWidth={1.5} />
              </a>
            )}
          </div>

          {/* ── Col 2: Quick Links ────────────────────────────────────────── */}
          <div>
            <h3 className="font-sans text-xs font-bold text-white/40 uppercase tracking-law mb-5">
              {FOOTER.quickLinksHeading}
            </h3>
            <nav aria-label={UI.footerNavigation}>
              <ul className="space-y-3" role="list">
                {FOOTER.quickLinks.map((link) => (
                  <li key={link.label}>
                    <LocalizedLink
                      to={link.href}
                      className="font-sans text-sm text-white/60 hover:text-white transition-colors duration-200 cursor-pointer"
                    >
                      {link.label}
                    </LocalizedLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* ── Col 3: Contact ────────────────────────────────────────────── */}
          <div>
            <h3 className="font-sans text-xs font-bold text-white/40 uppercase tracking-law mb-5">
              {FOOTER.contactHeading}
            </h3>
            <ul className="space-y-4" role="list">
              <li>
                <a
                  href={`tel:${BRAND.phone.replace(/\D/g, "")}`}
                  className="inline-flex items-start gap-3 group cursor-pointer"
                >
                  <Phone
                    size={14}
                    strokeWidth={1.5}
                    className="flex-shrink-0 mt-0.5 text-gold/60 group-hover:text-gold transition-colors duration-200"
                    aria-hidden="true"
                  />
                  <span className="font-sans text-sm text-white/60 group-hover:text-white transition-colors duration-200">
                    {BRAND.phone}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BRAND.email}`}
                  className="inline-flex items-start gap-3 group cursor-pointer"
                >
                  <Mail
                    size={14}
                    strokeWidth={1.5}
                    className="flex-shrink-0 mt-0.5 text-gold/60 group-hover:text-gold transition-colors duration-200"
                    aria-hidden="true"
                  />
                  <span className="font-sans text-sm text-white/60 group-hover:text-white transition-colors duration-200 break-all">
                    {BRAND.email}
                  </span>
                </a>
              </li>
              <li>
                <div className="inline-flex items-start gap-3">
                  <MapPin
                    size={14}
                    strokeWidth={1.5}
                    className="flex-shrink-0 mt-0.5 text-gold/60"
                    aria-hidden="true"
                  />
                  <address className="font-sans text-sm text-white/60 not-italic leading-relaxed">
                    {BRAND.address.street}
                    <br />
                    {BRAND.address.city}
                  </address>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ──────────────────────────────────────────────────── */}
      <div className="border-t border-white/[0.07]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-sans text-xs text-white/30">
            {FOOTER.copyright}
          </p>
          <nav aria-label={UI.legalLinks}>
            <ul className="flex items-center gap-5" role="list">
              {FOOTER.legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-sans text-xs text-white/30 hover:text-white/60 transition-colors duration-200 cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
