import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CaseStudy } from '@/components/projects/CaseStudy';
import { getProject, localizeProject, projects } from '@/data/projects';
import { getDictionary } from '@/lib/i18n';
import { isLocale, locales } from '@/lib/locale';
import { buildMetadata } from '@/lib/metadata';

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((locale) => projects.map((project) => ({ locale, slug: project.slug })));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const project = getProject(slug);
  if (!isLocale(locale) || !project) return {};
  const dict = getDictionary(locale);
  return buildMetadata({
    locale,
    path: `/projects/${slug}`,
    title: `${project.title} — ${dict.meta.caseStudy}`,
    description: project.summary[locale],
    ogAlt: dict.meta.ogAlt,
  });
}

export default async function ProjectPage({ params }: PageProps) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const project = getProject(slug);
  if (!project) notFound();

  const dict = getDictionary(locale);
  const index = projects.findIndex((item) => item.slug === slug);
  const count = projects.length;
  const prevProject = count > 1 ? projects[(index - 1 + count) % count] : undefined;
  const nextProject = count > 1 ? projects[(index + 1) % count] : undefined;
  // With only two projects "previous" and "next" would be the same page: show one.
  const showPrevious = count > 2 && prevProject !== undefined;

  return (
    <CaseStudy
      locale={locale}
      dict={dict}
      project={localizeProject(project, locale)}
      previous={showPrevious && prevProject ? { slug: prevProject.slug, title: prevProject.title } : null}
      next={nextProject ? { slug: nextProject.slug, title: nextProject.title } : null}
    />
  );
}
