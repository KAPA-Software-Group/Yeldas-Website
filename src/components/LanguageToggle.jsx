import { Link } from "react-router-dom";
import { LANGUAGE_OPTIONS, SUPPORTED_LOCALES } from "../constants/content";
import { useI18n } from "../i18n";
import { cn } from "../lib/utils";

export default function LanguageToggle({ className = "" }) {
  const { locale, content, localizedCurrentPath } = useI18n();

  return (
    <div
      role="group"
      aria-label={content.UI.languageSwitcherLabel}
      className={cn(
        "inline-flex items-center overflow-hidden rounded-sm border border-white/15 bg-white/5",
        className
      )}
    >
      {SUPPORTED_LOCALES.map((code) => {
        const active = code === locale;
        return (
          <Link
            key={code}
            to={localizedCurrentPath(code)}
            aria-label={content.UI.switchLanguage[code]}
            aria-current={active ? "true" : undefined}
            className={cn(
              "px-2.5 py-1.5 font-sans text-xs font-bold transition-colors duration-200",
              active
                ? "bg-gold text-white"
                : "text-white/65 hover:bg-white/10 hover:text-white"
            )}
          >
            {LANGUAGE_OPTIONS[code].shortLabel}
          </Link>
        );
      })}
    </div>
  );
}
