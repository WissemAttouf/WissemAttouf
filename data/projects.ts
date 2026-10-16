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
    tech: ['Flutter', 'Dart', 'Node.js', 'Express.js', 'MySQL', 'OCR'],
    image: { src: '/images/projects/neivos-facture/home.png', alt: { en: 'Neivos Facture mobile app home screen', fr: "Écran d’accueil de l’application mobile Neivos Facture" } },
    screenshots: [
      { src: '/images/projects/neivos-facture/ocr.png', alt: { en: 'Invoice OCR workflow', fr: "Écran d’extraction OCR d’une facture" } },
      { src: '/images/projects/neivos-facture/extraction.png', alt: { en: 'Extracted invoice data', fr: 'Données extraites de la facture' } },
    ],
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
    image: { src: '/images/projects/camping-management/accueil.png', alt: { en: 'Camping management platform home page', fr: 'Page d’accueil de la plateforme de gestion de camping' } },
    screenshots: [
      { src: '/images/projects/camping-management/details.png', alt: { en: 'Camping details page', fr: 'Page de détails du camping' } },
      { src: '/images/projects/camping-management/reservations.png', alt: { en: 'Camping reservation page', fr: 'Page de réservation du camping' } },
    ],
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
    slug: "wakti", category: "web", featured: true, title: "Wakti", tech: ["Progressive Web App","JavaScript","Responsive UI"],
    summary: { en: "A responsive progressive web app combining Quran reading and recitations, prayer times, and the Hijri calendar.", fr: "Une application web progressive et responsive réunissant la lecture et l’écoute du Coran, les horaires de prière et le calendrier hégirien." },
    image: { src: "/images/projects/wakti/wakti.png", alt: { en: "Wakti application screen", fr: "Écran de l’application Wakti" } },
    screenshots: [{ src: "/images/projects/wakti/wakti-2.png", alt: { en: "Wakti application interface", fr: "Interface de l’application Wakti" } }],
    demoUrl: "https://wakti-ashen.vercel.app/", githubUrl: "https://github.com/WissemAttouf/Wakti",
    overview: { en: ["Wakti brings Quran content, audio recitations, prayer times and the Hijri calendar into a mobile-friendly PWA."], fr: ["Wakti rassemble le contenu du Coran, les récitations audio, les horaires de prière et le calendrier hégirien dans une PWA adaptée aux mobiles."] },
    objectives: { en: ["Provide quick access to Quran reading and listening.","Display prayer times and the Hijri calendar.","Deliver a responsive app experience across devices."], fr: ["Faciliter l’accès à la lecture et à l’écoute du Coran.","Afficher les horaires de prière et le calendrier hégirien.","Proposer une expérience responsive sur différents appareils."] },
    features: [{ status: 'implemented', label: { en: "Quran reading and audio", fr: "Lecture du Coran et audio" } }, { status: 'implemented', label: { en: "Prayer times", fr: "Horaires de prière" } }, { status: 'implemented', label: { en: "Hijri calendar", fr: "Calendrier hégirien" } }, { status: 'implemented', label: { en: "Progressive web app experience", fr: "Expérience d’application web progressive" } }],
  },
  {
    slug: "neivos-groupe", category: "web", featured: true, title: "Neivos Groupe", tech: ["Node.js","Express.js","MySQL","JavaScript"],
    summary: { en: "A web platform combining a public company website, customer journeys and an administration interface backed by a Node.js API and MySQL.", fr: "Une plateforme web réunissant un site vitrine, des parcours clients et une interface d’administration connectée à une API Node.js et à MySQL." },
    image: { src: "/images/projects/neivos-groupe/neivos-groupe.png", alt: { en: "Neivos Groupe website screenshot", fr: "Capture du site web Neivos Groupe" } },
    screenshots: [{ src: "/images/projects/neivos-groupe/neivos-groupe-2.png", alt: { en: "Neivos Groupe platform interface", fr: "Interface de la plateforme Neivos Groupe" } }],
    demoUrl: "https://neivos-groupe.vercel.app/", githubUrl: "https://github.com/WissemAttouf/Neivos-Groupe",
    overview: { en: ["A responsive digital-services platform with a public-facing experience and connected customer and administration workflows."], fr: ["Une plateforme responsive de services numériques avec une vitrine publique et des parcours clients et administratifs connectés."] },
    objectives: { en: ["Present the company and its services.","Centralize customer interactions.","Connect the web interface to an Express API and MySQL data store."], fr: ["Présenter l’entreprise et ses services.","Centraliser les interactions avec les clients.","Connecter l’interface web à une API Express et à une base MySQL."] },
    features: [{ status: 'implemented', label: { en: "Responsive public website", fr: "Site vitrine responsive" } }, { status: 'implemented', label: { en: "Node.js / Express backend", fr: "Backend Node.js / Express" } }, { status: 'implemented', label: { en: "MySQL data persistence", fr: "Persistance des données avec MySQL" } }],
  },
  {
    slug: "sport-club-management", category: "web", featured: true, title: "Sport Club Management", tech: ["Java 17","Spring Boot","Thymeleaf","Spring Data JPA","OpenAPI","Docker"],
    summary: { en: "A Java web application for managing a sports club’s members, with Spring Data JPA persistence and documented REST endpoints.", fr: "Une application web Java pour gérer les membres d’un club sportif, avec persistance Spring Data JPA et endpoints REST documentés." },
    image: { src: "/images/projects/sport-club-management/sport-club.png", alt: { en: "Sport Club Management application dashboard", fr: "Tableau de bord de Sport Club Management" } },
    screenshots: [{ src: "/images/projects/sport-club-management/sport-club-2.png", alt: { en: "Sport club management screen", fr: "Écran de gestion du club sportif" } }, { src: "/images/projects/sport-club-management/sport-club-3.png", alt: { en: "Sport club application screen", fr: "Écran de l’application du club sportif" } }],
     githubUrl: "https://github.com/WissemAttouf/sport-club-management",
    overview: { en: ["A Spring Boot project that centralizes club-member management and provides documented API endpoints."], fr: ["Un projet Spring Boot qui centralise la gestion des membres du club et expose des endpoints API documentés."] },
    objectives: { en: ["Manage sports-club member information.","Structure the backend with Spring Boot and JPA.","Document REST endpoints with OpenAPI / Swagger."], fr: ["Gérer les informations des membres du club sportif.","Structurer le backend avec Spring Boot et JPA.","Documenter les endpoints REST avec OpenAPI / Swagger."] },
    features: [{ status: 'implemented', label: { en: "Member management", fr: "Gestion des membres" } }, { status: 'implemented', label: { en: "Spring Data JPA persistence", fr: "Persistance avec Spring Data JPA" } }, { status: 'implemented', label: { en: "OpenAPI / Swagger documentation", fr: "Documentation OpenAPI / Swagger" } }],
  },
  {
    slug: "gestion-stock", category: "web", featured: true, title: "Gestion de stock", tech: ["C#",".NET 9","ASP.NET Core MVC","Entity Framework Core","SQLite"],
    summary: { en: "An ASP.NET Core MVC inventory application for product CRUD, search and stock overview indicators.", fr: "Une application de gestion de stock ASP.NET Core MVC avec CRUD des produits, recherche et indicateurs récapitulatifs." },
    image: { src: "/images/projects/gestion-stock/dashboard.png", alt: { en: "Inventory dashboard", fr: "Tableau de bord de gestion du stock" } },
    screenshots: [{ src: "/images/projects/gestion-stock/ajouter-produit.png", alt: { en: "Add product form", fr: "Formulaire d’ajout d’un produit" } }],
    demoUrl: "https://gestionstock-p21n.onrender.com/", githubUrl: "https://github.com/WissemAttouf/GestionStock",
    overview: { en: ["A stock-management web application built with ASP.NET Core MVC and Entity Framework Core."], fr: ["Une application web de gestion de stock développée avec ASP.NET Core MVC et Entity Framework Core."] },
    objectives: { en: ["Manage product records.","Search the product catalogue.","Summarize inventory quantities and estimated value."], fr: ["Gérer les fiches produits.","Rechercher dans le catalogue.","Synthétiser les quantités et la valeur estimée du stock."] },
    features: [{ status: 'implemented', label: { en: "Product CRUD", fr: "CRUD des produits" } }, { status: 'implemented', label: { en: "Product search", fr: "Recherche de produits" } }, { status: 'implemented', label: { en: "Inventory overview", fr: "Vue d’ensemble du stock" } }],
  },
  {
    slug: "real-cafe", category: "web", featured: true, title: "Real Café", tech: ["JavaScript","Responsive Web","Supabase","Vercel"],
    summary: { en: "A responsive digital experience for a specialty coffee brand, with editorial pages, menu discovery and customer journeys.", fr: "Une expérience numérique responsive pour une marque de café de spécialité, avec pages éditoriales, carte et parcours clients." },
    image: { src: "/images/projects/real-cafe/comptoir.jpg", alt: { en: "Real Café counter photography", fr: "Photo du comptoir de Real Café" } },
    screenshots: [{ src: "/images/projects/real-cafe/terrasse.jpg", alt: { en: "Real Café terrace photography", fr: "Photo de la terrasse de Real Café" } }],
    demoUrl: "https://grain-et-cendre-dusky.vercel.app/", githubUrl: "https://github.com/WissemAttouf/Real-Cafe",
    overview: { en: ["A visual-first website concept for a specialty coffee business, designed to support discovery and customer interactions."], fr: ["Un concept de site visuel pour un café de spécialité, pensé pour favoriser la découverte et les interactions avec les clients."] },
    objectives: { en: ["Present the coffee brand and its products.","Offer a responsive browsing experience.","Make key customer journeys easy to discover."], fr: ["Présenter la marque de café et ses produits.","Proposer une navigation responsive.","Faciliter l’accès aux principaux parcours clients."] },
    features: [{ status: 'implemented', label: { en: "Responsive presentation pages", fr: "Pages de présentation responsive" } }, { status: 'implemented', label: { en: "Coffee menu and visual gallery", fr: "Carte de café et galerie visuelle" } }, { status: 'implemented', label: { en: "Customer-oriented navigation", fr: "Navigation orientée client" } }],
  },
  {
    slug: "meteo-intelligent", category: "mobile", featured: true, title: "Météo intelligente", tech: ["Flutter","Dart","REST API","OpenWeather","Open-Meteo"],
    summary: { en: "A Flutter weather app with city search, current conditions, five-day forecasts and a responsive day/night visual atmosphere.", fr: "Une application météo Flutter avec recherche de ville, conditions actuelles, prévisions sur cinq jours et ambiance visuelle adaptée au jour et à la nuit." },
    image: { src: "/images/projects/meteo-intelligent/meteo.png", alt: { en: "Intelligent weather app screen", fr: "Écran de l’application Météo intelligente" } },
    screenshots: [{ src: "/images/projects/meteo-intelligent/meteo-2.png", alt: { en: "Weather forecast screen", fr: "Écran des prévisions météo" } }],
     githubUrl: "https://github.com/WissemAttouf/meteo-intelligent-flutter",
    overview: { en: ["A Flutter application that displays weather conditions and multi-day forecasts using weather APIs."], fr: ["Une application Flutter qui affiche les conditions météo et les prévisions sur plusieurs jours à l’aide d’API météo."] },
    objectives: { en: ["Search weather by city.","Display current conditions and detailed metrics.","Present a five-day forecast and favorite cities."], fr: ["Rechercher la météo par ville.","Afficher les conditions actuelles et des indicateurs détaillés.","Présenter des prévisions sur cinq jours et des villes favorites."] },
    features: [{ status: 'implemented', label: { en: "City search", fr: "Recherche de ville" } }, { status: 'implemented', label: { en: "Current conditions and details", fr: "Conditions actuelles et détails météo" } }, { status: 'implemented', label: { en: "Five-day forecast", fr: "Prévisions sur cinq jours" } }],
  }
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
