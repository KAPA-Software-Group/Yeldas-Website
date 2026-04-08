import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { BRAND, NAV } from "../constants/content";

function LogoPlaceholder() {
  return (
    <div className="flex items-center gap-3">
      <img src="/logo.png" alt="Anwari Law" className="h-16 sm:h-20 lg:h-24 w-auto" />
      <div className="flex flex-col" style={{ lineHeight: 1.15 }}>
        <span style={{
          fontFamily: "'Josefin Sans', sans-serif",
          fontWeight: 200,
          fontSize: "1.05rem",
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "#fff",
        }}>
          Anwari
        </span>
        <span style={{
          fontFamily: "'Josefin Sans', sans-serif",
          fontWeight: 200,
          fontSize: "1.05rem",
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "#fff",
        }}>
          Law
        </span>
      </div>
    </div>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

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
        <Link to="/" aria-label="Anwari Law - Return to homepage" className="flex-shrink-0">
          <LogoPlaceholder />
        </Link>

        {/* Desktop Navigation */}
        <nav
          role="navigation"
          aria-label="Main navigation"
          className="hidden md:flex items-center gap-8"
        >
          {NAV.links.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className={[
                "font-sans text-sm font-normal transition-colors duration-200 tracking-wide",
                location.pathname === link.href
                  ? "text-gold"
                  : "text-white/80 hover:text-white",
              ].join(" ")}
            >
              {link.label}
            </Link>
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

          <Link
            to={NAV.cta.href}
            className="inline-flex items-center px-5 py-2.5 bg-gold hover:bg-gold-light text-white text-sm font-sans font-bold tracking-wide transition-all duration-200 cursor-pointer rounded-sm"
          >
            {NAV.cta.label}
          </Link>
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
            <Link
              key={link.label}
              to={link.href}
              onClick={handleNavClick}
              className={[
                "block py-3 font-sans text-base border-b border-white/5 transition-colors duration-200 cursor-pointer",
                location.pathname === link.href
                  ? "text-gold"
                  : "text-white/80 hover:text-white",
              ].join(" ")}
            >
              {link.label}
            </Link>
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
            <Link
              to={NAV.cta.href}
              onClick={handleNavClick}
              className="block w-full text-center px-5 py-3 bg-gold hover:bg-gold-light text-white text-sm font-sans font-bold tracking-wide transition-colors duration-200 cursor-pointer rounded-sm"
            >
              {NAV.cta.label}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
