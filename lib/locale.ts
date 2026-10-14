export const locales = ['en', 'fr'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

/** A value that exists in every supported language. */
export type L10n<T> = Record<Locale, T>;

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** Builds an internal URL that always carries the language prefix. */
export function localePath(locale: Locale, path = ''): string {
  if (path === '' || path === '/') return `/${locale}`;
  return `/${locale}${path.startsWith('/') || path.startsWith('#') ? '' : '/'}${path}`;
}
