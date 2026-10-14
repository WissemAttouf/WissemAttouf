import type { Metadata } from 'next';
import { site } from '@/data/site';
import type { Locale } from './locale';

export function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, '');
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercel) return `https://${vercel}`;
  return 'http://localhost:3000';
}

export const openGraphLocale: Record<Locale, string> = { en: 'en_US', fr: 'fr_FR' };

/** hreflang alternates for a path that exists in every language ("" = home). */
export function languageAlternates(path: string) {
  return {
    en: `/en${path}`,
    fr: `/fr${path}`,
    'x-default': `/en${path}`,
  };
}

interface BuildMetadataInput {
  locale: Locale;
  /** Path inside the language segment: "" for home, "/projects/slug" otherwise. */
  path: string;
  title: string;
  description: string;
  ogAlt: string;
  /** Skips the "| Wissem Attouf" title template (used on the home page). */
  absoluteTitle?: boolean;
}

export function buildMetadata({
  locale,
  path,
  title,
  description,
  ogAlt,
  absoluteTitle = false,
}: BuildMetadataInput): Metadata {
  const other: Locale = locale === 'en' ? 'fr' : 'en';
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: `/${locale}${path}`, languages: languageAlternates(path) },
    openGraph: {
      type: 'website',
      siteName: site.name,
      title,
      description,
      url: `/${locale}${path}`,
      locale: openGraphLocale[locale],
      alternateLocale: [openGraphLocale[other]],
      images: [{ url: site.ogImage, width: 1200, height: 630, alt: ogAlt }],
    },
    twitter: { card: 'summary_large_image', title, description, images: [site.ogImage] },
  };
}
