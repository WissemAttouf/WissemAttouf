import type { L10n } from '@/lib/locale';

export type SkillIcon = 'mobile' | 'backend' | 'database' | 'quality' | 'web';

export interface SkillGroup {
  id: string;
  icon: SkillIcon;
  title: L10n<string>;
  items: L10n<string>[];
}

const same = (label: string): L10n<string> => ({ en: label, fr: label });

export const skillGroups: SkillGroup[] = [
  {
    id: 'mobile',
    icon: 'mobile',
    title: { en: 'Mobile', fr: 'Mobile' },
    items: [same('Flutter'), same('Dart')],
  },
  {
    id: 'backend',
    icon: 'backend',
    title: { en: 'Backend', fr: 'Backend' },
    items: [same('Node.js'), same('Express.js'), { en: 'REST APIs', fr: 'API REST' }, same('Java'), same('Spring Boot'), same('Spring Data JPA')],
  },
  {
    id: 'database',
    icon: 'database',
    title: { en: 'Database', fr: 'Base de données' },
    items: [same('MySQL')],
  },
  {
    id: 'quality',
    icon: 'quality',
    title: { en: 'Quality & development tools', fr: 'Qualité et outils de développement' },
    items: [same('Swagger / OpenAPI'), same('Docker'), same('CI/CD'), { en: 'Unit testing', fr: 'Tests unitaires' }, same('OCR'), { en: 'Regular expressions', fr: 'Expressions régulières' }],
  },
  {
    id: 'web',
    icon: 'web',
    title: { en: 'Web', fr: 'Web' },
    // Taken from the Camping Management Platform stack.
    items: [same('PHP'), same('Laravel'), same('HTML5'), same('CSS3'), same('JavaScript'), same('Bootstrap'), same('.NET')],
  },
];
