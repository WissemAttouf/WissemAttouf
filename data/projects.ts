import type { L10n, Locale } from '@/lib/locale';

export type ProjectCategory = 'mobile' | 'web' | 'backend';
export type FeatureStatus = 'implemented' | 'inProgress' | 'planned';

export interface ProjectImage {
  /** Path under /public, e.g. /images/projects/neivos-facture/scan.png */
  src: string;
  alt: L10n<string>;
}

/**
 * Add a project here and it appears on the home page, in the sitemap and gets
 * its own case-study page. Every optional field is simply hidden when absent,
 * so nothing is ever invented: only fill in what is verified.
 */
export interface Project {
  slug: string;
  category: ProjectCategory;
  featured: boolean;
  title: string;
  tech: string[];
  summary: L10n<string>;
  /** Real screenshot used on the card and as the case-study cover. */
  image?: ProjectImage;
  /** Extra real screenshots for the case-study gallery. */
  screenshots?: ProjectImage[];
  /** Only set when a real public demo exists. */
  demoUrl?: string;
  /** Only set when a real public repository exists. */
  githubUrl?: string;
  overview: L10n<string[]>;
  problem?: L10n<string>;
  objectives: L10n<string[]>;
  features: { status: FeatureStatus; label: L10n<string> }[];
  workflow?: { title: L10n<string>; text: L10n<string> }[];
  roles?: L10n<string[]>;
  architecture?: L10n<string[]>;
  implementation?: L10n<string[]>;
  challenges?: L10n<{ title: string; text: string }[]>;
  lessons?: L10n<string[]>;
  contributions?: L10n<string[]>;
}

export const projects: Project[] = [
  {
    slug: 'neivos-facture',
    category: 'mobile',
    featured: true,
    title: 'Neivos Facture',
    tech: ['Flutter', 'Dart'],
    summary: {
      en: 'A mobile invoicing application designed to scan invoices, extract financial information using AI, and let users review extracted data interactively. The application also supports PDF and Excel reporting.',
      fr: `Une application mobile de facturation conçue pour scanner des factures, en extraire les informations financières grâce à l'IA et permettre à l'utilisateur de vérifier les données extraites de façon interactive. Elle prend également en charge les rapports PDF et Excel.`,
    },
    overview: {
      en: [
        'Neivos Facture is a mobile application built with Flutter and Dart. It takes an invoice from a photo to structured financial data and, from there, to PDF and Excel reports.',
      ],
      fr: [
        `Neivos Facture est une application mobile développée avec Flutter et Dart. Elle transforme une facture photographiée en données financières structurées, puis en rapports PDF et Excel.`,
      ],
    },
    problem: {
      en: 'Financial data on invoices usually has to be typed in by hand. Neivos Facture aims to reduce that effort with AI-assisted extraction, while keeping the user in control through an interactive review step.',
      fr: `Les données financières des factures doivent généralement être saisies à la main. Neivos Facture vise à réduire cet effort grâce à une extraction assistée par l'IA, tout en laissant l'utilisateur garder la main grâce à une étape de vérification interactive.`,
    },
    objectives: {
      en: [
        'Scan invoices with the mobile device.',
        'Extract the financial information they contain using AI.',
        'Let users review and validate the extracted data interactively.',
        'Produce detailed PDF and Excel reports.',
      ],
      fr: [
        `Scanner des factures depuis l'appareil mobile.`,
        `En extraire les informations financières grâce à l'IA.`,
        `Permettre à l'utilisateur de vérifier et de valider les données extraites de façon interactive.`,
        `Produire des rapports détaillés aux formats PDF et Excel.`,
      ],
    },
    features: [
      { status: 'implemented', label: { en: 'Invoice scanning', fr: 'Scan de factures' } },
      {
        status: 'implemented',
        label: { en: 'AI-based extraction of financial data', fr: `Extraction des données financières par l'IA` },
      },
      {
        status: 'implemented',
        label: {
          en: 'Interactive review and validation of extracted data',
          fr: 'Vérification et validation interactives des données extraites',
        },
      },
      { status: 'implemented', label: { en: 'PDF report generation', fr: 'Génération de rapports PDF' } },
      { status: 'implemented', label: { en: 'Excel report generation', fr: 'Génération de rapports Excel' } },
    ],
    workflow: [
      {
        title: { en: 'Scan', fr: 'Scanner' },
        text: {
          en: 'The user captures an invoice with the mobile application.',
          fr: `L'utilisateur capture une facture avec l'application mobile.`,
        },
      },
      {
        title: { en: 'Extract', fr: 'Extraire' },
        text: {
          en: 'AI extracts the financial information from the scanned invoice.',
          fr: `L'IA extrait les informations financières de la facture scannée.`,
        },
      },
      {
        title: { en: 'Review', fr: 'Vérifier' },
        text: {
          en: 'The user checks the extracted data interactively and validates it.',
          fr: `L'utilisateur contrôle les données extraites de façon interactive et les valide.`,
        },
      },
      {
        title: { en: 'Report', fr: 'Exporter' },
        text: {
          en: 'The data is turned into detailed PDF and Excel reports.',
          fr: 'Les données sont transformées en rapports détaillés PDF et Excel.',
        },
      },
    ],
  },
  {
    slug: 'camping-management-platform',
    category: 'web',
    featured: true,
    title: 'Camping Management Platform',
    tech: ['PHP', 'Laravel', 'MySQL', 'JavaScript', 'Bootstrap'],
    summary: {
      en: 'A camping management platform designed to organize reservations, manage user roles, and provide administrative visibility into camping operations.',
      fr: `Une plateforme de gestion de camping conçue pour organiser les réservations, gérer les rôles des utilisateurs et offrir une visibilité administrative sur l'activité du camping.`,
    },
    overview: {
      en: [
        'A web platform for running a campsite: it brings reservations, user roles and an administrative dashboard together in one application.',
      ],
      fr: [
        `Une plateforme web pour gérer un camping : elle réunit réservations, rôles des utilisateurs et tableau de bord administratif dans une même application.`,
      ],
    },
    objectives: {
      en: [
        'Organize camping reservations.',
        'Manage access according to user roles.',
        'Give administrators visibility into camping operations.',
      ],
      fr: [
        'Organiser les réservations du camping.',
        `Gérer les accès selon le rôle de chaque utilisateur.`,
        `Offrir aux administrateurs une visibilité sur l'activité du camping.`,
      ],
    },
    features: [
      { status: 'implemented', label: { en: 'Reservation management', fr: 'Gestion des réservations' } },
      {
        status: 'implemented',
        label: { en: 'Role-based access for several user types', fr: `Accès par rôle pour plusieurs types d'utilisateurs` },
      },
      {
        status: 'implemented',
        label: { en: 'Analytics dashboard for administrators', fr: 'Tableau de bord analytique pour les administrateurs' },
      },
    ],
    roles: {
      en: ['Administrator', 'Guide', 'Camper'],
      fr: ['Administrateur', 'Guide', 'Campeur'],
    },
    architecture: {
      en: [
        'Server-side application written in PHP with the Laravel framework.',
        'Relational data stored in a MySQL database.',
        'User interface built with Bootstrap and JavaScript.',
      ],
      fr: [
        `Application côté serveur écrite en PHP avec le framework Laravel.`,
        'Données relationnelles stockées dans une base MySQL.',
        `Interface utilisateur réalisée avec Bootstrap et JavaScript.`,
      ],
    },
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

/* ------------------------------------------------------------------ */
/* Localized views (plain objects, safe to pass to client components)  */
/* ------------------------------------------------------------------ */

export interface ProjectCardModel {
  slug: string;
  title: string;
  summary: string;
  category: ProjectCategory;
  featured: boolean;
  tech: string[];
  image: { src: string; alt: string } | null;
  demoUrl: string | null;
  githubUrl: string | null;
}

export function toCardModel(project: Project, locale: Locale): ProjectCardModel {
  return {
    slug: project.slug,
    title: project.title,
    summary: project.summary[locale],
    category: project.category,
    featured: project.featured,
    tech: project.tech,
    image: project.image ? { src: project.image.src, alt: project.image.alt[locale] } : null,
    demoUrl: project.demoUrl ?? null,
    githubUrl: project.githubUrl ?? null,
  };
}

export interface LocalizedProject extends ProjectCardModel {
  overview: string[];
  problem: string | null;
  objectives: string[];
  features: { status: FeatureStatus; label: string }[];
  workflow: { title: string; text: string }[];
  roles: string[];
  architecture: string[];
  implementation: string[];
  challenges: { title: string; text: string }[];
  lessons: string[];
  contributions: string[];
  screenshots: { src: string; alt: string }[];
}

export function localizeProject(project: Project, locale: Locale): LocalizedProject {
  return {
    ...toCardModel(project, locale),
    overview: project.overview[locale],
    problem: project.problem ? project.problem[locale] : null,
    objectives: project.objectives[locale],
    features: project.features.map((feature) => ({ status: feature.status, label: feature.label[locale] })),
    workflow: (project.workflow ?? []).map((step) => ({ title: step.title[locale], text: step.text[locale] })),
    roles: project.roles ? project.roles[locale] : [],
    architecture: project.architecture ? project.architecture[locale] : [],
    implementation: project.implementation ? project.implementation[locale] : [],
    challenges: project.challenges ? project.challenges[locale] : [],
    lessons: project.lessons ? project.lessons[locale] : [],
    contributions: project.contributions ? project.contributions[locale] : [],
    screenshots: (project.screenshots ?? []).map((shot) => ({ src: shot.src, alt: shot.alt[locale] })),
  };
}
