import { useEffect } from "react";
import { SUPPORTED_LOCALES } from "../constants/content";
import { buildLocalizedPath, pageKeyFromPath, useI18n } from "../i18n";

function setMeta(selector, createAttrs, content) {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement("meta");
    Object.entries(createAttrs).forEach(([key, value]) => element.setAttribute(key, value));
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

function setLink(selector, createAttrs, href) {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement("link");
    Object.entries(createAttrs).forEach(([key, value]) => element.setAttribute(key, value));
    document.head.appendChild(element);
  }
  element.setAttribute("href", href);
}

export default function SEO() {
  const { locale, content, pathWithoutLocale } = useI18n();

  useEffect(() => {
    const pageKey = pageKeyFromPath(pathWithoutLocale);
    const pageMeta = content.META.pages[pageKey] ?? content.META.pages.home;
    const canonicalPath = buildLocalizedPath(pathWithoutLocale, locale);
    const canonicalUrl = `${window.location.origin}${canonicalPath}`;
    const imageUrl = `${window.location.origin}/logo.png`;

    document.title = pageMeta.title;

    setMeta('meta[name="description"]', { name: "description" }, pageMeta.description);
    setMeta('meta[property="og:type"]', { property: "og:type" }, "website");
    setMeta('meta[property="og:site_name"]', { property: "og:site_name" }, content.META.siteName);
    setMeta('meta[property="og:title"]', { property: "og:title" }, pageMeta.title);
    setMeta('meta[property="og:description"]', { property: "og:description" }, pageMeta.description);
    setMeta('meta[property="og:url"]', { property: "og:url" }, canonicalUrl);
    setMeta('meta[property="og:locale"]', { property: "og:locale" }, content.META.locale);
    setMeta('meta[property="og:image"]', { property: "og:image" }, imageUrl);
    setMeta('meta[name="twitter:card"]', { name: "twitter:card" }, "summary");
    setMeta('meta[name="twitter:title"]', { name: "twitter:title" }, pageMeta.title);
    setMeta('meta[name="twitter:description"]', { name: "twitter:description" }, pageMeta.description);
    setMeta('meta[name="twitter:image"]', { name: "twitter:image" }, imageUrl);

    setLink('link[rel="canonical"]', { rel: "canonical" }, canonicalUrl);
    SUPPORTED_LOCALES.forEach((code) => {
      setLink(
        `link[rel="alternate"][hreflang="${code}"]`,
        { rel: "alternate", hreflang: code },
        `${window.location.origin}${buildLocalizedPath(pathWithoutLocale, code)}`
      );
    });
    setLink(
      'link[rel="alternate"][hreflang="x-default"]',
      { rel: "alternate", hreflang: "x-default" },
      `${window.location.origin}${buildLocalizedPath(pathWithoutLocale, "en")}`
    );
  }, [content, locale, pathWithoutLocale]);

  return null;
}
