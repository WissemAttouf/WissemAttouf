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
      en: 'A mobile invoicing application designed to scan invoices, extract invoice fields using OCR and rule-based parsing, and let users review extracted data interactively. The application also supports PDF and Excel reporting.',
      fr: `Une application mobile de facturation conçue pour scanner des factures, en extraire les informations financières grâce à l'OCR et à des règles d'extraction et permettre à l'utilisateur de vérifier les données extraites de façon interactive. Elle prend également en charge les rapports PDF et Excel.`,
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
      en: 'Financial data on invoices usually has to be typed in by hand. Neivos Facture aims to reduce that effort with OCR-based extraction and rule-based parsing, while keeping the user in control through an interactive review step.',
      fr: `Les données financières des factures doivent généralement être saisies à la main. Neivos Facture vise à réduire cet effort grâce à l'OCR et à des règles d'extraction, tout en laissant l'utilisateur garder la main grâce à une étape de vérification interactive.`,
    },
    objectives: {
      en: [
        'Scan invoices with the mobile device.',
        'Extract key invoice fields using OCR and rule-based parsing.',
        'Let users review and validate the extracted data interactively.',
        'Produce detailed PDF and Excel reports.',
      ],
      fr: [
        `Scanner des factures depuis l'appareil mobile.`,
        `En extraire les champs clés grâce à l'OCR et à des règles d'extraction.`,
        `Permettre à l'utilisateur de vérifier et de valider les données extraites de façon interactive.`,
        `Produire des rapports détaillés aux formats PDF et Excel.`,
      ],
    },
    features: [
      { status: 'implemented', label: { en: 'Invoice scanning', fr: 'Scan de factures' } },
      {
        status: 'implemented',
        label: { en: 'OCR and rule-based financial data extraction', fr: `Extraction des données financières par OCR et règles` },
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
          en: 'OCR and extraction rules identify key invoice fields for user review.',
          fr: `L'OCR et des règles d'extraction identifient les champs clés de la facture pour vérification.`,
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

  {
    slug: 'sport-club-management', category: 'web', featured: true, title: 'Sport Club Management',
    tech: ['Java 17', 'Spring Boot', 'Spring Data JPA', 'Thymeleaf', 'Swagger/OpenAPI', 'Docker'],
    summary: { en: 'A sports-club management web application built with Java and Spring Boot, with web interfaces, persistence, documented APIs and automated tests.', fr: 'Une application web de gestion d’un club sportif développée avec Java et Spring Boot, avec interfaces web, persistance, API documentée et tests automatisés.' },
    demoUrl: 'https://sport-club-management-production-6f45.up.railway.app/', githubUrl: 'https://github.com/WissemAttouf/sport-club-management',
    overview: { en: ['A Java/Spring Boot project structured around management workflows, persistence, API documentation and automated tests.'], fr: ['Un projet Java/Spring Boot structuré autour des parcours de gestion, de la persistance, de la documentation d’API et des tests automatisés.'] },
    objectives: { en: ['Organize club-management workflows.', 'Persist application data.', 'Document API endpoints and test key behaviour.'], fr: ['Organiser les opérations de gestion du club.', 'Persister les données.', 'Documenter les endpoints et tester les comportements essentiels.'] },
    features: [{ status: 'implemented', label: { en: 'Web management workflows', fr: 'Parcours de gestion web' } }, { status: 'implemented', label: { en: 'Spring Data JPA persistence', fr: 'Persistance avec Spring Data JPA' } }, { status: 'implemented', label: { en: 'Swagger/OpenAPI documentation and tests', fr: 'Documentation Swagger/OpenAPI et tests' } }],
  },
  {
    slug: 'gestion-stock', category: 'web', featured: true, title: 'GestionStock',
    tech: ['C#', '.NET 9', 'ASP.NET Core MVC', 'Entity Framework Core', 'SQLite'],
    summary: { en: 'An inventory application for managing product records and stock levels, with CRUD operations, search and stock indicators.', fr: 'Une application d’inventaire pour gérer les produits et les niveaux de stock, avec opérations CRUD, recherche et indicateurs.' },
    demoUrl: 'https://gestionstock-p21n.onrender.com/', githubUrl: 'https://github.com/WissemAttouf/GestionStock',
    overview: { en: ['A .NET web application focused on product records and practical inventory workflows.'], fr: ['Une application web .NET axée sur les fiches produits et les opérations courantes de gestion de stock.'] },
    objectives: { en: ['Manage product records.', 'Track stock levels and find products quickly.'], fr: ['Gérer les fiches produits.', 'Suivre les stocks et retrouver rapidement les produits.'] },
    features: [{ status: 'implemented', label: { en: 'Product CRUD', fr: 'CRUD des produits' } }, { status: 'implemented', label: { en: 'Product search', fr: 'Recherche de produits' } }, { status: 'implemented', label: { en: 'Stock indicators', fr: 'Indicateurs de stock' } }],
  },
  {
    slug: 'wakti', category: 'web', featured: true, title: 'Wakti',
    tech: ['HTML', 'CSS', 'JavaScript', 'PWA', 'Service Worker'],
    summary: { en: 'A progressive web app for Quran reading and listening, prayer times and the Hijri calendar.', fr: 'Une application web progressive dédiée à la lecture et à l’écoute du Coran, aux horaires de prière et au calendrier hégirien.' },
    demoUrl: 'https://wakti-ashen.vercel.app/', githubUrl: 'https://github.com/WissemAttouf/Wakti',
    overview: { en: ['A responsive web experience bringing Quran content and daily-practice utilities together.'], fr: ['Une expérience web adaptative qui réunit le contenu du Coran et des outils du quotidien.'] },
    objectives: { en: ['Provide Quran reading and audio.', 'Present prayer-time and Hijri-calendar information.'], fr: ['Proposer la lecture et l’audio du Coran.', 'Présenter les horaires de prière et le calendrier hégirien.'] },
    features: [{ status: 'implemented', label: { en: 'Quran reading and audio', fr: 'Lecture et audio du Coran' } }, { status: 'implemented', label: { en: 'Prayer-time information', fr: 'Horaires de prière' } }, { status: 'implemented', label: { en: 'Hijri calendar', fr: 'Calendrier hégirien' } }],
  },
  {
    slug: 'real-cafe', category: 'web', featured: true, title: 'Real Café',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Supabase', 'Vercel Functions', 'Playwright'],
    summary: { en: 'A specialty-coffee website with an interactive menu, reservation journey, online shop and administration features.', fr: 'Un site de café de spécialité avec menu interactif, parcours de réservation, boutique en ligne et fonctionnalités d’administration.' },
    demoUrl: 'https://grain-et-cendre-dusky.vercel.app/', githubUrl: 'https://github.com/WissemAttouf/Real-Cafe',
    overview: { en: ['A customer-facing café experience combining menu discovery and service information.'], fr: ['Une expérience destinée aux clients qui réunit la découverte du menu et les informations de service.'] },
    objectives: { en: ['Present the café and its menu.', 'Offer online reservation and shop journeys.'], fr: ['Présenter le café et son menu.', 'Proposer des parcours en ligne pour les réservations et la boutique.'] },
    features: [{ status: 'implemented', label: { en: 'Interactive menu', fr: 'Menu interactif' } }, { status: 'implemented', label: { en: 'Reservation journey', fr: 'Parcours de réservation' } }, { status: 'implemented', label: { en: 'Shop and administration features', fr: 'Boutique et administration' } }],
  },
  {
    slug: 'neivos-groupe', category: 'web', featured: true, title: 'Neivos Groupe',
    tech: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'Node.js', 'Express.js', 'MySQL'],
    summary: { en: 'A company web platform combining a public-facing presentation with customer journeys and backend-connected administration.', fr: 'Une plateforme web d’entreprise combinant une vitrine publique, des parcours clients et une administration connectée au backend.' },
    demoUrl: 'https://neivos-groupe.vercel.app/', githubUrl: 'https://github.com/WissemAttouf/Neivos-Groupe',
    overview: { en: ['A web platform developed in the Neivos Groupe context, combining front-end pages with backend services.'], fr: ['Une plateforme web développée dans le contexte de Neivos Groupe, combinant des pages front-end et des services backend.'] },
    objectives: { en: ['Present the company online.', 'Connect user-facing workflows to backend services.'], fr: ['Présenter l’entreprise en ligne.', 'Relier les parcours utilisateurs aux services backend.'] },
    features: [{ status: 'implemented', label: { en: 'Public company pages', fr: 'Pages publiques de l’entreprise' } }, { status: 'implemented', label: { en: 'Backend-connected workflows', fr: 'Parcours connectés au backend' } }],
  },
  {
    slug: 'meteo-intelligent-flutter', category: 'mobile', featured: false, title: 'Météo intelligente',
    tech: ['Flutter', 'Dart', 'REST API', 'OpenWeather', 'Open-Meteo'],
    summary: { en: 'A Flutter weather application for current conditions and forecasts, with city search and saved locations.', fr: 'Une application météo Flutter pour consulter les conditions actuelles et les prévisions, avec recherche de villes et lieux favoris.' },
    githubUrl: 'https://github.com/WissemAttouf/meteo-intelligent-flutter',
    overview: { en: ['A cross-platform weather app that consumes weather APIs and presents forecast information in a mobile-friendly interface.'], fr: ['Une application météo multiplateforme qui consomme des API météo et présente les prévisions dans une interface adaptée au mobile.'] },
    objectives: { en: ['Search weather by city.', 'Display current conditions and forecasts.', 'Keep favourite locations.'], fr: ['Rechercher la météo par ville.', 'Afficher les conditions actuelles et les prévisions.', 'Conserver des lieux favoris.'] },
    features: [{ status: 'implemented', label: { en: 'City search', fr: 'Recherche de villes' } }, { status: 'implemented', label: { en: 'Current weather and forecast', fr: 'Météo actuelle et prévisions' } }, { status: 'implemented', label: { en: 'Favourite locations', fr: 'Lieux favoris' } }],
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
