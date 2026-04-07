import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { BRAND, NAV } from "../constants/content";

/**
 * Header
 *
 * - Transparent on top, becomes solid navy on scroll
 * - Logo placeholder (left), nav links (center/right), CTA button (far right)
 * - Mobile: collapses to hamburger menu
 *
 * To add your logo: replace the <LogoPlaceholder /> with an <img> tag
 */

function LogoPlaceholder() {
  return (
    <div className="flex items-center gap-2.5">
      {/*
        Logo image — uncomment and update src when you have the asset:
        <img src="/images/logo.svg" alt="Anwari Law" className="h-8 w-auto" />
      */}
      <div
        className="flex items-center justify-center w-9 h-9 rounded border border-gold/60 bg-gold/10"
        aria-hidden="true"
      >
        <span className="font-serif text-gold text-sm font-semibold leading-none">A</span>
      </div>
      <span className="font-serif text-white text-[1.05rem] font-medium tracking-wide leading-none">
        {BRAND.name}
      </span>
    </div>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu when user clicks a nav link
  const handleNavClick = () => setMenuOpen(false);

  return (
    <header
      className={[
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-navy shadow-lg shadow-navy/30 py-3"
          : "bg-transparent py-5",
      ].join(" ")}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between gap-6">
        {/* Logo */}
        <a href="#" aria-label="Anwari Law — Return to top" className="flex-shrink-0">
          <LogoPlaceholder />
        </a>

        {/* Desktop Navigation */}
        <nav
          role="navigation"
          aria-label="Main navigation"
          className="hidden md:flex items-center gap-8"
        >
          {NAV.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-sans text-sm font-normal text-white/80 hover:text-white transition-colors duration-200 tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Right Side */}
        <div className="hidden md:flex items-center gap-6">
          <a
            href={`tel:${BRAND.phone.replace(/\D/g, "")}`}
            className="flex items-center gap-2 text-white/70 hover:text-gold transition-colors duration-200 text-sm font-sans"
          >
            <Phone size={14} strokeWidth={1.5} aria-hidden="true" />
            <span>{BRAND.phone}</span>
          </a>

          <a
            href={NAV.cta.href}
            className="inline-flex items-center px-5 py-2.5 bg-gold hover:bg-gold-light text-white text-sm font-sans font-bold tracking-wide transition-all duration-200 cursor-pointer rounded-sm"
          >
            {NAV.cta.label}
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          className="md:hidden text-white p-1.5 -mr-1.5 cursor-pointer"
        >
          {menuOpen ? (
            <X size={22} strokeWidth={1.5} />
          ) : (
            <Menu size={22} strokeWidth={1.5} />
          )}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {menuOpen && (
        <div className="md:hidden bg-navy border-t border-white/10 px-6 pb-6 pt-4 space-y-1">
          {NAV.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={handleNavClick}
              className="block py-3 font-sans text-base text-white/80 hover:text-white border-b border-white/5 transition-colors duration-200 cursor-pointer"
            >
              {link.label}
            </a>
          ))}

          <div className="pt-4 space-y-3">
            <a
              href={`tel:${BRAND.phone.replace(/\D/g, "")}`}
              onClick={handleNavClick}
              className="flex items-center gap-2.5 text-white/70 hover:text-gold text-sm font-sans transition-colors duration-200 cursor-pointer"
            >
              <Phone size={14} strokeWidth={1.5} aria-hidden="true" />
              {BRAND.phone}
            </a>
            <a
              href={NAV.cta.href}
              onClick={handleNavClick}
              className="block w-full text-center px-5 py-3 bg-gold hover:bg-gold-light text-white text-sm font-sans font-bold tracking-wide transition-colors duration-200 cursor-pointer rounded-sm"
            >
              {NAV.cta.label}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
