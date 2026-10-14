export const site = {
  name: 'Wissem Attouf',
  email: 'wattouf35@gmail.com',
  github: 'https://github.com/WissemAttouf',
  linkedin: 'https://www.linkedin.com/in/wissem-attouf-452509226',
  city: 'Tunis',
  countryCode: 'TN',
  portrait: { src: '/images/wissem-attouf.png', width: 1122, height: 1402 },
  ogImage: '/images/og.png',
} as const;

/** Order of the sections in the navigation bar. */
export const navSections = ['home', 'about', 'projects', 'experience', 'skills', 'contact'] as const;
export type NavSection = (typeof navSections)[number];
