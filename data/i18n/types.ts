import type { Locale } from '@/lib/locale';

export interface Dictionary {
  common: {
    newTab: string;
  };
  meta: {
    siteName: string;
    title: string;
    description: string;
    caseStudy: string;
    ogAlt: string;
  };
  nav: {
    home: string;
    about: string;
    projects: string;
    experience: string;
    skills: string;
    contact: string;
    primaryLabel: string;
    openMenu: string;
    closeMenu: string;
    downloadCv: string;
    cvFr: string;
    cvEn: string;
    skipToContent: string;
    languageLabel: string;
    themeLabel: string;
    switchToLight: string;
    switchToDark: string;
    switchTo: Record<Locale, string>;
  };
  hero: {
    role: string;
    headingLead: string;
    headingAccent: string;
    text: string;
    location: string;
    ctaProjects: string;
    ctaCv: string;
    cvFr: string;
    cvEn: string;
    github: string;
    linkedin: string;
    socialLabel: string;
    portraitAlt: string;
  };
  about: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    focusLabel: string;
    focus: { title: string; subtitle: string; text: string }[];
  };
  projects: {
    eyebrow: string;
    title: string;
    intro: string;
    filterLabel: string;
    all: string;
    categories: { mobile: string; web: string; backend: string };
    featured: string;
    technologies: string;
    caseStudy: string;
    liveDemo: string;
    github: string;
    resultsAnnouncement: string;
    moreTitle: string;
    moreText: string;
    moreCta: string;
  };
  caseStudy: {
    back: string;
    overview: string;
    problem: string;
    objectives: string;
    features: string;
    workflow: string;
    roles: string;
    architecture: string;
    implementation: string;
    challenges: string;
    lessons: string;
    contributions: string;
    screenshots: string;
    stack: string;
    links: string;
    category: string;
    previous: string;
    pagination: string;
    next: string;
    sourceCode: string;
    liveDemo: string;
    noLinks: string;
    status: { implemented: string; inProgress: string; planned: string };
  };
  experience: {
    eyebrow: string;
    title: string;
    intro: string;
    technologies: string;
  };
  education: {
    eyebrow: string;
    title: string;
    educationTitle: string;
    certificationsTitle: string;
  };
  skills: {
    eyebrow: string;
    title: string;
    intro: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    text: string;
    email: string;
    linkedin: string;
    github: string;
    location: string;
    locationValue: string;
    writeMe: string;
    copyEmail: string;
    copied: string;
    copyFailed: string;
  };
  footer: {
    rights: string;
    builtWith: string;
    backToTop: string;
  };
  notFound: {
    title: string;
    text: string;
    cta: string;
  };
}
