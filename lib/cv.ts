import fs from 'node:fs';
import path from 'node:path';
import type { Locale } from './locale';

/**
 * Place the bilingual CV files in /public/cv. PDF versions take precedence over the print-ready HTML versions. The "Download CV" buttons only appear
 * when a file exists, so the site never links to a missing document.
 */
const CV_FILES: Record<Locale, string[]> = {
  en: ['Wissem-Attouf-CV-EN.pdf', 'Wissem-Attouf-CV-EN.html'],
  fr: ['Wissem-Attouf-CV-FR.pdf', 'Wissem-Attouf-CV-FR.html'],
};

export function getCvHref(locale: Locale): string | null {
  const order: Locale[] = locale === 'fr' ? ['fr', 'en'] : ['en', 'fr'];
  for (const candidate of order) {
    for (const file of CV_FILES[candidate]) {
      if (fs.existsSync(path.join(process.cwd(), 'public', 'cv', file))) return `/cv/${file}`;
    }
  }
  return null;
}
