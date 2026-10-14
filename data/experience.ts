import type { L10n } from '@/lib/locale';

export interface ExperienceItem {
  id: string;
  company: string;
  role: L10n<string>;
  /** Optional contract type, e.g. Internship. */
  type?: L10n<string>;
  /** "YYYY-MM" */
  start: string;
  end: string;
  /** Add verified mission details here whenever you have them. */
  bullets: L10n<string[]>;
  tech: string[];
}

/** Reverse chronological order. */
export const experience: ExperienceItem[] = [
  {
    id: 'neivos-groupe',
    company: 'Neivos Groupe',
    role: { en: 'Full Stack Developer', fr: 'Développeur Full Stack' },
    start: '2025-09',
    end: '2026-06',
    bullets: {
      en: ['Developed mobile applications with Flutter and Dart.', 'Integrated AI models and APIs into applications.'],
      fr: [`Développement d'applications mobiles avec Flutter et Dart.`, `Intégration de modèles et d'API d'intelligence artificielle dans les applications.`],
    },
    tech: ['Flutter', 'Dart', 'Node.js', 'Express.js', 'REST APIs', 'MySQL'],
  },
  {
    id: 'hexabyte',
    company: 'HexaByte',
    role: { en: 'Technical & Commercial Manager', fr: 'Responsable technico-commercial' },
    type: { en: 'Internship', fr: 'Stage' },
    start: '2025-06',
    end: '2025-08',
    bullets: {
      en: ['Technical troubleshooting and problem resolution.', 'Renewal and negotiation of commercial agreements.'],
      fr: ['Diagnostic et traitement des problèmes techniques.', 'Renouvellement et négociation des accords commerciaux.'],
    },
    tech: [],
  },
  {
    id: 'enda-tamweel',
    company: 'Enda Tamweel',
    role: { en: 'Credit Agent', fr: 'Agent de crédit' },
    start: '2023-04',
    end: '2024-11',
    bullets: {
      en: ['Client relationship management and financial analysis.'],
      fr: ['Relation client et analyse financière.'],
    },
    tech: [],
  },
];
