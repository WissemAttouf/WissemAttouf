import type { Locale } from './locale';

/** Formats a "YYYY-MM" string, e.g. "2025-09" -> "Sep 2025" / "sept. 2025". */
export function formatMonth(value: string, locale: Locale): string {
  const [year, month] = value.split('-').map(Number);
  const date = new Date(Date.UTC(year ?? 1970, (month ?? 1) - 1, 1));
  return new Intl.DateTimeFormat(locale === 'fr' ? 'fr-FR' : 'en-US', {
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(date);
}

/** Replaces {placeholders} in a dictionary template. */
export function template(text: string, values: Record<string, string | number>): string {
  return text.replace(/\{(\w+)\}/g, (_, key: string) => String(values[key] ?? ''));
}
