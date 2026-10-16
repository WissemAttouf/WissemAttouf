import type { L10n } from '@/lib/locale';

export interface EducationItem {
  id: string;
  degree: L10n<string>;
  school: L10n<string>;
  field: L10n<string>;
  period: L10n<string>;
  note?: L10n<string>;
}

export const education: EducationItem[] = [
  {
    id: 'iteam',
    degree: { en: 'National Engineering Degree in Computer Science', fr: `Diplôme National d'Ingénieur en Informatique` },
    school: { en: 'iTeam University', fr: 'iTeam University' },
    field: { en: 'Software Engineering and Information Systems', fr: `Génie Logiciel et Systèmes d'Information` },
    period: { en: 'September 2023 – July 2026', fr: 'Septembre 2023 – juillet 2026' },
  },
  {
    id: 'isi-kef',
    degree: { en: `National Bachelor's Degree in Computer Science`, fr: `Licence Nationale en Sciences Informatiques` },
    school: { en: 'Higher Institute of Computer Science of Kef (ISI Kef)', fr: `Institut Supérieur d'Informatique du Kef (ISI Kef)` },
    field: { en: 'Software Engineering and Information Systems', fr: `Génie Logiciel et Systèmes d'Information` },
    period: { en: 'September 2019 – June 2022', fr: 'Septembre 2019 – juin 2022' },
    note: { en: 'Graduated with honours (Très Bien).', fr: 'Diplômé avec la mention Très Bien.' },
  },
];

export interface CertificationItem {
  id: string;
  title: L10n<string>;
  issuer: string;
  year: string;
}

/** No IDs or verification URLs are shown: add them only if they exist. */
export const certifications: CertificationItem[] = [
  { id: 'latex', title: { en: 'LaTeX', fr: 'LaTeX' }, issuer: 'iTeam University', year: '2026' },
  { id: 'flutter-dart', title: { en: 'Flutter and Dart', fr: 'Flutter et Dart' }, issuer: 'iTeam University', year: '2024' },
  { id: 'laravel', title: { en: 'Laravel', fr: 'Laravel' }, issuer: 'ISI Kef', year: '2021' },
  { id: 'javascript', title: { en: 'JavaScript', fr: 'JavaScript' }, issuer: 'ISI Kef', year: '2021' },
  { id: 'photoshop', title: { en: 'Photoshop', fr: 'Photoshop' }, issuer: 'ISI Kef', year: '2020' },
];
