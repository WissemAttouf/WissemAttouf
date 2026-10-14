import type { Dictionary } from '@/data/i18n/types';
import { en } from '@/data/i18n/en';
import { fr } from '@/data/i18n/fr';
import type { Locale } from './locale';

const dictionaries: Record<Locale, Dictionary> = { en, fr };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
