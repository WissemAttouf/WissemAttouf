import type { L10n } from '@/lib/locale';

export interface ExperienceItem {
  id: string;
  company: string;
  role: L10n<string>;
  type?: L10n<string>;
  /** "YYYY-MM" */
  start: string;
  end: string;
  bullets: L10n<string[]>;
  tech: string[];
}

export const experience: ExperienceItem[] = [
  {
    id: 'hexabyte', company: 'HexaByte',
    role: { en: 'Technical & Sales Manager', fr: 'Responsable technico-commercial' },
    type: { en: 'Internship', fr: 'Stage' }, start: '2026-06', end: '2026-09',
    bullets: {
      en: ['Technical troubleshooting and problem resolution.', 'Customer relationship and commercial follow-up.'],
      fr: ['Diagnostic et résolution de problèmes techniques.', 'Relation client et suivi commercial.'],
    }, tech: [],
  },
  {
    id: 'neivos-groupe', company: 'Neivos Groupe',
    role: { en: 'Full Stack Developer', fr: 'Développeur Full Stack' }, type: { en: 'Permanent contract', fr: 'CDI' }, start: '2025-06', end: '2026-06',
    bullets: {
      en: ['Developed and maintained web and mobile applications.', 'Built mobile features with Flutter/Dart and backend services with Node.js, Express.js and MySQL.', 'Contributed to Neivos Facture, an invoice-digitization workflow using OCR and rule-based field extraction.'],
      fr: ['Développement et évolution d’applications web et mobiles.', 'Développement mobile avec Flutter/Dart et services backend avec Node.js, Express.js et MySQL.', 'Contribution à Neivos Facture, un parcours de numérisation de factures utilisant l’OCR et des règles d’extraction des champs.'],
    }, tech: ['Flutter', 'Dart', 'Node.js', 'Express.js', 'MySQL', 'OCR'],
  },
  {
    id: 'enda-tamweel', company: 'Enda Tamweel',
    role: { en: 'Credit Officer', fr: 'Agent de crédit' }, start: '2023-04', end: '2024-11',
    bullets: {
      en: ['Financial analysis, credit-file preparation and client portfolio follow-up.'],
      fr: ['Analyse financière, préparation des dossiers de crédit et suivi du portefeuille clients.'],
    }, tech: [],
  },
  {
    id: 'sprint-code', company: 'Sprint Code',
    role: { en: 'Web Developer Intern', fr: 'Stagiaire en développement web' },
    type: { en: 'Internship', fr: 'Stage' }, start: '2022-01', end: '2022-06',
    bullets: {
      en: ['Contributed to a web-based camping-management project.'],
      fr: ['Contribution à un projet web de gestion de camping.'],
    }, tech: ['PHP', 'Laravel', 'MySQL', 'JavaScript', 'Bootstrap'],
  },
  {
    id: 'ciok', company: 'Société de Ciment d’Oum El Kélil (C.I.O.K.)',
    role: { en: 'Full Stack Developer Intern', fr: 'Stagiaire développeur Full Stack' },
    type: { en: 'Internship', fr: 'Stage' }, start: '2021-06', end: '2021-08',
    bullets: {
      en: ['Contributed to an employer-declaration application for CNSS/CNRPS data submission.'],
      fr: ['Contribution à une application de déclaration d’employeur pour la transmission de données CNSS/CNRPS.'],
    }, tech: ['Web development'],
  },
];
