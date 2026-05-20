import { useState } from "react";
import { Phone, Mail, MapPin, ArrowRight, CheckCircle, Clock } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { useContent } from "../i18n";

function HeroSection() {
  const { CONTACT_PAGE } = useContent();

  return (
    <section
      className="relative overflow-hidden bg-navy px-6 lg:px-12"
      style={{ minHeight: "clamp(28rem, 45vw, 44rem)" }}
      aria-label={CONTACT_PAGE.hero.ariaLabel}
    >
      <div
        className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-gold/0 via-gold/40 to-gold/0"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 select-none font-serif leading-none text-white/[0.028]"
        style={{ fontSize: "clamp(10rem, 22vw, 22rem)" }}
        aria-hidden="true"
      >
        @
      </div>

      <div className="relative mx-auto flex max-w-7xl items-center" style={{ minHeight: "inherit", paddingTop: "clamp(5rem, 12vw, 8rem)" }}>
        <div className="py-12">
          <p className="hero-line eyebrow mb-6 flex items-center gap-3 text-gold-muted">
            <span className="gold-rule" aria-hidden="true" />
            {CONTACT_PAGE.hero.eyebrow}
          </p>
          <h1
            className="hero-line font-serif leading-display text-white"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            {CONTACT_PAGE.hero.heading}
          </h1>
          <div className="hero-line mt-8 h-px w-16 bg-gold/40" aria-hidden="true" />
          <p className="hero-line mt-8 max-w-2xl font-sans text-xl leading-relaxed text-white/65">
            {CONTACT_PAGE.hero.subtext}
          </p>
        </div>
      </div>

      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-navy to-transparent"
        aria-hidden="true"
      />
    </section>
  );
}

function ContactForm() {
  const { BRAND, CONTACT_PAGE } = useContent();
  const form = CONTACT_PAGE.form;
  const [fields, setFields] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!fields.name.trim()) e.name = form.errors.name;
    if (!fields.email.trim()) e.email = form.errors.email;
    else if (!/\S+@\S+\.\S+/.test(fields.email)) e.email = form.errors.emailInvalid;
    if (!fields.message.trim()) e.message = form.errors.message;
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }

    const subject = fields.subject || form.mailtoLabels.fallbackSubject;
    const body = encodeURIComponent(
      `${form.mailtoLabels.name}: ${fields.name}\n${form.mailtoLabels.phone}: ${fields.phone}\n${form.mailtoLabels.subject}: ${fields.subject}\n\n${fields.message}`
    );
    window.location.href = `mailto:${BRAND.email}?subject=${encodeURIComponent(subject)}&body=${body}`;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-start gap-5 rounded-sm border border-cream-darker bg-white p-10 shadow-sm">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/10">
          <CheckCircle size={24} strokeWidth={1.6} className="text-gold" aria-hidden="true" />
        </div>
        <div>
          <h3 className="font-serif text-2xl text-ink">{form.successTitle}</h3>
          <p className="mt-2 font-sans text-base leading-relaxed text-ink-muted">
            {form.successBody}
          </p>
        </div>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-sm border border-cream-darker bg-cream px-4 py-3.5 font-sans text-base text-ink placeholder-ink-light transition-colors duration-200 focus:border-gold/60 focus:bg-white focus:outline-none";
  const errorClass = "mt-1.5 font-sans text-xs text-red-500";
  const labelClass = "mb-1.5 block font-sans text-xs font-bold uppercase tracking-law text-ink-light";

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-sm border border-cream-darker bg-white p-8 shadow-sm sm:p-10 lg:p-12"
      aria-label={form.ariaLabel}
    >
      <p className="mb-8 font-sans text-sm leading-relaxed text-ink-muted">
        {form.subtext}
      </p>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className={labelClass}>
            {form.labels.name} <span className="text-gold" aria-hidden="true">*</span>
          </label>
          <input
            id="cf-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            value={fields.name}
            onChange={handleChange}
            placeholder={form.placeholders.name}
            className={inputClass}
            aria-required="true"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "cf-name-err" : undefined}
          />
          {errors.name && <p id="cf-name-err" className={errorClass} role="alert">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="cf-email" className={labelClass}>
            {form.labels.email} <span className="text-gold" aria-hidden="true">*</span>
          </label>
          <input
            id="cf-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={fields.email}
            onChange={handleChange}
            placeholder={form.placeholders.email}
            className={inputClass}
            aria-required="true"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "cf-email-err" : undefined}
          />
          {errors.email && <p id="cf-email-err" className={errorClass} role="alert">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="cf-phone" className={labelClass}>
            {form.labels.phone}
          </label>
          <input
            id="cf-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={fields.phone}
            onChange={handleChange}
            placeholder={form.placeholders.phone}
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="cf-subject" className={labelClass}>
            {form.labels.subject}
          </label>
          <input
            id="cf-subject"
            name="subject"
            type="text"
            value={fields.subject}
            onChange={handleChange}
            placeholder={form.placeholders.subject}
            className={inputClass}
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="cf-message" className={labelClass}>
            {form.labels.message} <span className="text-gold" aria-hidden="true">*</span>
          </label>
          <textarea
            id="cf-message"
            name="message"
            rows={6}
            required
            value={fields.message}
            onChange={handleChange}
            placeholder={form.placeholders.message}
            className={`${inputClass} resize-none`}
            aria-required="true"
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "cf-message-err" : undefined}
          />
          {errors.message && <p id="cf-message-err" className={errorClass} role="alert">{errors.message}</p>}
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          className="inline-flex cursor-pointer items-center gap-2.5 rounded-sm bg-gold px-8 py-3.5 font-sans text-sm font-bold text-white transition-colors duration-200 hover:bg-gold-light group w-full sm:w-auto justify-center"
        >
          {form.submitLabel}
          <ArrowRight
            size={15}
            strokeWidth={2}
            aria-hidden="true"
            className="transition-transform duration-200 group-hover:translate-x-1"
          />
        </button>
        <p className="font-sans text-xs text-ink-light">
          {form.requiredNote}
        </p>
      </div>
    </form>
  );
}

function ContactDetails() {
  const { BRAND, CONTACT_PAGE } = useContent();
  const details = CONTACT_PAGE.details;
  const items = [
    {
      icon: <Phone size={18} strokeWidth={1.5} />,
      label: details.phoneLabel,
      value: BRAND.phone,
      href: `tel:${BRAND.phone.replace(/\D/g, "")}`,
    },
    {
      icon: <Mail size={18} strokeWidth={1.5} />,
      label: details.emailLabel,
      value: BRAND.email,
      href: `mailto:${BRAND.email}`,
    },
    {
      icon: <MapPin size={18} strokeWidth={1.5} />,
      label: details.officeLabel,
      value: `${BRAND.address.street}, ${BRAND.address.city}`,
      href: null,
    },
    {
      icon: <Clock size={18} strokeWidth={1.5} />,
      label: details.officeHours.label,
      value: details.officeHours.value,
      href: null,
    },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="rounded-sm border border-cream-darker bg-navy p-8 sm:p-10">
        <h3 className="mb-2 font-serif text-2xl text-white">
          {details.heading}
        </h3>
        <div className="mb-7 mt-1 h-px w-10 bg-gold/50" aria-hidden="true" />
        <ul className="flex flex-col gap-6" role="list">
          {items.map((item) => (
            <li key={item.label} className="flex items-start gap-4">
              <span className="mt-0.5 shrink-0 text-gold" aria-hidden="true">
                {item.icon}
              </span>
              <div>
                <p className="mb-0.5 font-sans text-xs font-bold uppercase tracking-law text-white/40">
                  {item.label}
                </p>
                {item.href ? (
                  <a
                    href={item.href}
                    className="font-sans text-sm leading-relaxed text-white/75 transition-colors duration-200 hover:text-gold break-all"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="font-sans text-sm leading-relaxed text-white/75">
                    {item.value}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-sm border border-cream-darker bg-gold-subtle p-6">
        <div className="flex items-start gap-3">
          <CheckCircle size={16} strokeWidth={1.6} className="mt-0.5 shrink-0 text-gold" aria-hidden="true" />
          <div>
            <p className="font-sans text-xs font-bold uppercase tracking-law text-gold">
              {details.responseTime.label}
            </p>
            <p className="mt-1 font-sans text-sm leading-relaxed text-ink-muted">
              {details.responseTime.value}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactSection() {
  const headerRef = useScrollReveal(0.1);
  const formRef = useScrollReveal(0.06);
  const detailRef = useScrollReveal(0.08);
  const { CONTACT_PAGE } = useContent();

  return (
    <section className="bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div ref={headerRef} className="mb-14 lg:mb-20">
          <p className="sr eyebrow mb-5 flex items-center gap-3">
            <span className="gold-rule gold-rule--dark" aria-hidden="true" />
            {CONTACT_PAGE.form.heading}
          </p>
          <div className="sr h-px bg-cream-darker" aria-hidden="true" />
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.6fr_1fr] lg:gap-16 xl:gap-20">
          <div ref={formRef} className="sr">
            <ContactForm />
          </div>
          <div ref={detailRef} className="sr">
            <ContactDetails />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ContactPage() {
  return (
    <main id="main" className="overflow-x-clip">
      <HeroSection />
      <ContactSection />
    </main>
  );
}
