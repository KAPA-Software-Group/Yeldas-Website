import { createContext, useContext, useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { CONTENT, DEFAULT_LOCALE, SUPPORTED_LOCALES } from "./constants/content";

const I18nContext = createContext(null);

const passthroughPrefixes = ["http://", "https://", "mailto:", "tel:", "#"];

export function isSupportedLocale(locale) {
  return SUPPORTED_LOCALES.includes(locale);
}

export function getLocaleFromPath(pathname = "/") {
  const [, firstSegment] = pathname.split("/");
  return isSupportedLocale(firstSegment) ? firstSegment : DEFAULT_LOCALE;
}

export function stripLocaleFromPath(pathname = "/") {
  const normalized = pathname.startsWith("/") ? pathname : `/${pathname}`;
  const parts = normalized.split("/");
  if (!isSupportedLocale(parts[1])) return normalized || "/";

  const stripped = `/${parts.slice(2).join("/")}`;
  return stripped === "/" ? "/" : stripped.replace(/\/$/, "");
}

export function pageKeyFromPath(pathname = "/") {
  const path = stripLocaleFromPath(pathname);
  if (path === "/" || path === "") return "home";
  if (path === "/services") return "services";
  if (path === "/about") return "about";
  if (path === "/contact") return "contact";
  return "home";
}

export function buildLocalizedPath(to = "/", locale = DEFAULT_LOCALE) {
  if (typeof to !== "string") return to;
  if (passthroughPrefixes.some((prefix) => to.startsWith(prefix))) return to;

  const hashIndex = to.indexOf("#");
  const hash = hashIndex >= 0 ? to.slice(hashIndex) : "";
  const withoutHash = hashIndex >= 0 ? to.slice(0, hashIndex) : to;
  const queryIndex = withoutHash.indexOf("?");
  const search = queryIndex >= 0 ? withoutHash.slice(queryIndex) : "";
  const pathname = queryIndex >= 0 ? withoutHash.slice(0, queryIndex) : withoutHash;
  const strippedPath = stripLocaleFromPath(pathname || "/");
  const localizedPath = strippedPath === "/" ? `/${locale}` : `/${locale}${strippedPath}`;

  return `${localizedPath}${search}${hash}`;
}

export function I18nProvider({ children }) {
  const location = useLocation();
  const locale = getLocaleFromPath(location.pathname);
  const content = CONTENT[locale] ?? CONTENT[DEFAULT_LOCALE];
  const pathWithoutLocale = stripLocaleFromPath(location.pathname);

  useEffect(() => {
    document.documentElement.lang = locale === "ja" ? "ja" : "en";
    document.documentElement.dir = "ltr";
  }, [locale]);

  const value = useMemo(
    () => ({
      locale,
      content,
      pathWithoutLocale,
      localizePath: (to, nextLocale = locale) => buildLocalizedPath(to, nextLocale),
      localizedCurrentPath: (nextLocale) =>
        buildLocalizedPath(
          `${pathWithoutLocale}${location.search}${location.hash}`,
          nextLocale
        ),
    }),
    [content, locale, location.hash, location.search, pathWithoutLocale]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const value = useContext(I18nContext);
  if (!value) throw new Error("useI18n must be used inside I18nProvider");
  return value;
}

export function useContent() {
  return useI18n().content;
}
