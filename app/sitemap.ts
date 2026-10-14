import type { MetadataRoute } from 'next';
import { projects } from '@/data/projects';
import { locales } from '@/lib/locale';
import { getSiteUrl } from '@/lib/metadata';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const lastModified = new Date();
  const paths = ['', ...projects.map((project) => `/projects/${project.slug}`)];

  return paths.flatMap((path) =>
    locales.map((locale) => ({
      url: `${base}/${locale}${path}`,
      lastModified,
      changeFrequency: path === '' ? ('monthly' as const) : ('yearly' as const),
      priority: path === '' ? 1 : 0.7,
      alternates: {
        languages: Object.fromEntries(locales.map((l) => [l, `${base}/${l}${path}`])),
      },
    })),
  );
}
