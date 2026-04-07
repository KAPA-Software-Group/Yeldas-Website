/**
 * ─── ANWARI LAW — CONTENT CONSTANTS ─────────────────────────────────────────
 *
 * This file is the single source of truth for all copy on the site.
 * Edit text here and it will update throughout the entire page.
 * No need to hunt through component files.
 */

// ─── Brand & Contact ─────────────────────────────────────────────────────────
export const BRAND = {
  name: "Anwari Law",
  tagline: "Immigration & Legal Services",
  phone: "(647) 704-9419",
  email: "yelda@anwarilaw.ca",
  address: {
    street: "151 Yonge Street, 11th Floor",
    city: "Toronto, Ontario M5C 2W7",
  },
  social: {
    // Replace "#" with actual profile URLs when available
    linkedin: "#",
  },
};

// ─── Navigation ──────────────────────────────────────────────────────────────
export const NAV = {
  links: [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
  cta: { label: "Request Consultation", href: "#contact" },
};

// ─── Hero Section ─────────────────────────────────────────────────────────────
export const HERO = {
  eyebrow: "Immigration & Legal Services",
  // Headline split into two lines for typographic control
  headlineTop: "Guiding You Forward,",
  headlineBottom: "Every Step of the Way.",
  subtext:
    "We believe in doing as much as possible to satisfy our clients, whether through a small notarization or seeking refugee status.",
  primaryCTA: { label: "Request Consultation", href: "#contact" },
  secondaryCTA: { label: "Explore Our Services", href: "#services" },
  // Image: Replace with your actual professional photo path, e.g. "/images/hero.jpg"
  imageSrc: null,
  imageAlt: "Anwari Law — Professional legal counsel in Toronto",
};

// ─── Areas of Practice ───────────────────────────────────────────────────────
export const PRACTICE_AREAS = {
  eyebrow: "What We Do",
  heading: "Areas of Practice",
  subtext:
    "Comprehensive immigration and legal services tailored to your situation.",
  areas: [
    {
      number: "01",
      title: "Refugees",
      description:
        "Refugee Protection, Permanent Residence and more. We guide clients through complex refugee claim processes with expertise and unwavering care.",
      href: "#",
      ariaLabel: "Learn more about our refugee legal services",
    },
    {
      number: "02",
      title: "Refusal & Appeals",
      description:
        "Request for Deferral of Removal or re-apply if needed. Skilled representation for immigration refusals and administrative appeals.",
      href: "#",
      ariaLabel: "Learn more about our refusal and appeals services",
    },
    {
      number: "03",
      title: "Other Services",
      description:
        "Criminal Inadmissibility and Rehabilitation, Notarial Services, Express Entry and more — full-spectrum legal coverage for all your needs.",
      href: "#",
      ariaLabel: "Learn more about our other legal services",
    },
  ],
};

// ─── Personalized Services Section ───────────────────────────────────────────
export const PERSONALIZED = {
  eyebrow: "Our Approach",
  heading: "Personalized Legal Services",
  body: "One size does not fit all when it comes to your legal needs. We craft a team and strategy specific to your desired outcome.",
  features: [
    "Strategy tailored to your unique situation",
    "Direct access to your dedicated legal team",
    "Clear, transparent communication at every step",
    "Comprehensive end-to-end case management",
  ],
  // Pull quote displayed as a decorative accent
  pullQuote:
    "We don't just process cases — we understand the lives behind them.",
};

// ─── Consultation CTA Section ─────────────────────────────────────────────────
export const CONSULTATION = {
  eyebrow: "Take the Next Step",
  heading: "Ready to Take the First Step?",
  subtext:
    "Speak directly with our legal team. We offer confidential consultations to understand your situation and map a clear path forward.",
  cta: { label: "Request a Consultation", href: "#contact" },
  phone: "(647) 704-9419",
  phoneLabel: "Or call us directly",
};

// ─── Services Detail ─────────────────────────────────────────────────────────
export const SERVICES = {
  eyebrow: "What We Offer",
  heading: "Our Services",
  subtext:
    "Every case is unique. We provide tailored counsel across the full spectrum of Canadian immigration law.",
  categories: [
    {
      id: "inadmissibility",
      title: "Inadmissibility",
      items: [
        "Medical Inadmissibility",
        "Criminal Inadmissibility",
        "Deportation & Removal",
      ],
    },
    {
      id: "permanent-resident",
      title: "Permanent Resident Application",
      items: [
        "Express Entry",
        "Family Class Sponsorship",
        "Business Class Immigration",
        "Caregiver Program",
        "Humanitarian & Compassionate Applications",
        "Provincial Nomination Programs",
      ],
    },
    {
      id: "temporary-resident",
      title: "Temporary Resident",
      items: [
        "Temporary Resident Permits",
        "Work Permits",
        "LMIA Exemption Work Permits",
        "LMIA-Based Work Permits",
        "Spousal Sponsorship Open Work Permit",
        "Post-Graduate Work Permit",
        "Study Permits",
        "Visitor Visa",
        "Super Visa",
      ],
    },
    {
      id: "business-immigration",
      title: "Business Immigration",
      items: [
        "Start-Up Visas",
        "Self-Employed Programs",
        "Entrepreneur Program",
        "Intra-Company Transferee",
      ],
    },
    {
      id: "citizenship",
      title: "Citizenship",
      items: [
        "Citizenship Applications",
        "Citizenship Refusals",
        "Passport Applications",
        "Passport Refusals",
        "Citizenship Revocation",
        "Citizenship Resumption",
      ],
    },
  ],
};

// ─── Footer ──────────────────────────────────────────────────────────────────
export const FOOTER = {
  tagline: "Expert immigration and legal services you can trust.",
  quickLinks: [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
  legalLinks: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
  copyright: "© 2023 Anwari Law. All rights reserved.",
};
