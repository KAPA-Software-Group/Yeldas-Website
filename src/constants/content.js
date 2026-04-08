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
  tagline: "Canadian Immigration Law Firm",
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
    { label: "Home",       href: "/" },
    { label: "Services",   href: "/services" },
    { label: "About",      href: "/about" },
    { label: "Contact Us", href: "/contact" },
  ],
  cta: { label: "Request Consultation", href: "/contact" },
};

// ─── Hero Section ─────────────────────────────────────────────────────────────
export const HERO = {
  eyebrow: "Canadian Immigration Law Firm · Toronto, Ontario",
  // Headline split into two lines for typographic control
  headlineTop: "Canadian Immigration",
  headlineBottom: "Lawyers You Can Trust.",
  subtext:
    "Anwari Law is a Toronto-based immigration law firm representing clients across Canada and internationally — from refugee claims and Express Entry to work permits, citizenship, and appeals.",
  primaryCTA: { label: "Request Consultation", href: "/contact" },
  secondaryCTA: { label: "Explore Our Services", href: "/services" },
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
  cta: { label: "Request a Consultation", href: "/contact" },
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
        "Medical",
        "Criminal",
        "Deportation and removal",
      ],
    },
    {
      id: "permanent-resident",
      title: "Permanent Resident Application",
      items: [
        "Express entry",
        "Family class sponsorship",
        "Business class immigration",
        "Caregiver program",
        "Humanitarian and Compassionate Applications",
        "Provincial Nomination Programs",
      ],
    },
    {
      id: "temporary-resident",
      title: "Temporary Resident",
      items: [
        "Temporary Resident Permits",
        "Work Permits",
        "LMIA exemption work permits",
        "LMIA-based work permits",
        "Spousal Sponsorships Open Work Permit",
        "Post-Graduate Work Permit",
        "Study permits",
        "Visitor visa",
        "Super visa",
      ],
    },
    {
      id: "business-immigration",
      title: "Business Immigration",
      items: [
        "Start-Up Visas",
        "Self-Employed Programs",
        "Entrepreneur Program",
        "Intra-company transferee",
      ],
    },
    {
      id: "citizenship",
      title: "Citizenship",
      items: [
        "Citizenship applications",
        "Citizenship refusals",
        "Passport applications",
        "Passport refusals",
        "Citizenship revocation",
        "Citizenship resumption",
      ],
    },
  ],
};

// ─── Footer ──────────────────────────────────────────────────────────────────
export const FOOTER = {
  tagline: "Canadian immigration law firm based in Toronto, Ontario.",
  quickLinks: [
    { label: "Home",       href: "/" },
    { label: "Services",   href: "/services" },
    { label: "About",      href: "/about" },
    { label: "Contact Us", href: "/contact" },
  ],
  legalLinks: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
  copyright: "© 2023 Anwari Law. All rights reserved.",
};

// ─── About Page ───────────────────────────────────────────────────────────────
export const ABOUT = {
  hero: {
    eyebrow: "Who We Are",
    heading: "A Law Firm Built on Trust & Results",
    subtext:
      "Anwari Law is a Toronto-based immigration law firm dedicated to helping individuals, families, and businesses navigate the complexities of Canadian immigration law.",
  },
  story: {
    eyebrow: "Our Story",
    heading: "Rooted in Community, Driven by Purpose",
    body: [
      "Founded with a commitment to accessible, high-quality immigration legal services, Anwari Law has built a reputation for excellence across the full spectrum of Canadian immigration law.",
      "We understand that immigration is not just a legal process — it is a life-changing journey. Our team brings both legal expertise and genuine empathy to every case, ensuring our clients feel heard, supported, and confident throughout their immigration journey.",
    ],
  },
  values: [
    {
      number: "01",
      title: "Client-Centered",
      description:
        "Every case is unique. We take the time to understand your situation and craft a strategy built around your specific goals and circumstances.",
    },
    {
      number: "02",
      title: "Transparent",
      description:
        "No surprises. We communicate clearly at every stage — explaining your options, setting realistic expectations, and keeping you informed.",
    },
    {
      number: "03",
      title: "Excellence",
      description:
        "We hold ourselves to the highest standard of legal practice, staying current with policy changes and applying rigorous attention to every application.",
    },
  ],
  team: [
    {
      id: "yelda",
      name: "Yelda Anwari",
      role: "Principal Lawyer & Founder",
      photo: "/team-yelda.png",
      bio: "Founder and principal lawyer at Anwari Law. Yelda brings deep expertise across Canadian immigration law, guiding clients through complex challenges with meticulous preparation and genuine dedication.",
    },
    {
      id: "prabh",
      name: "Prabh Simran Kaur",
      role: "Associate Lawyer",
      photo: "/team-prabh.webp",
      bio: "Dual-licensed in India and Ontario, Prabh holds an LL.M. in International Trade Law. At Anwari Law her practice focuses on refugee claims, PRRAs, judicial reviews, and appeals — combining legal insight with a client-centered approach.",
    },
    {
      id: "vai",
      name: "Vaishalei Manoharan",
      role: "Associate Lawyer",
      photo: "/team-vai.webp",
      bio: "A University of Sussex graduate with over two years in civil litigation, Vaishalei is passionate about Refugee and Immigration law and committed to becoming a skilled advocate upon her call to the Bar.",
    },
  ],
  approach: {
    eyebrow: "Our Approach",
    heading: "Strategy Tailored to You",
    body:
      "We don't believe in one-size-fits-all solutions. From your initial consultation, we assess your unique circumstances and build a clear, effective strategy. Our team stays with you from first filing to final resolution.",
    points: [
      "Detailed intake assessment to understand your full situation",
      "Custom strategy aligned with your immigration goals",
      "Dedicated legal team with direct access at every stage",
      "Thorough document preparation and submission management",
      "Proactive updates and transparent communication",
      "Appeals and representation when challenges arise",
    ],
  },
};

// ─── Contact Page ─────────────────────────────────────────────────────────────
export const CONTACT_PAGE = {
  hero: {
    eyebrow: "Get in Touch",
    heading: "Let's Talk About Your Case",
    subtext:
      "Reach out to our team for a confidential consultation. We'll review your situation and outline a clear path forward.",
  },
  form: {
    heading: "Send Us a Message",
    subtext:
      "Fill out the form below and a member of our team will get back to you within one business day.",
  },
  details: {
    heading: "Contact Information",
    officeHours: {
      label: "Office Hours",
      value: "Monday – Friday, 9:00 AM – 5:00 PM EST",
    },
    responseTime: {
      label: "Response Time",
      value: "Within one business day",
    },
  },
};
