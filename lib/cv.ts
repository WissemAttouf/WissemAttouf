import fs from 'node:fs';
import path from 'node:path';
import type { Locale } from './locale';

/**
 * Drop the PDFs below into /public/cv. The "Download CV" buttons only appear
 * when a file exists, so the site never links to a missing document.
 */
const CV_FILES: Record<Locale, string> = {
  en: 'Wissem-Attouf-CV-EN.pdf',
  fr: 'Wissem-Attouf-CV-FR.pdf',
};

export function getCvHref(locale: Locale): string | null {
  const order: Locale[] = locale === 'fr' ? ['fr', 'en'] : ['en', 'fr'];
  for (const candidate of order) {
    const file = CV_FILES[candidate];
    if (fs.existsSync(path.join(process.cwd(), 'public', 'cv', file))) return `/cv/${file}`;
  }
  return null;
}
