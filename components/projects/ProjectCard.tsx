import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import type { ProjectCardModel } from '@/data/projects';
import type { Dictionary } from '@/data/i18n/types';
import type { Locale } from '@/lib/locale';
import { GithubIcon } from '@/components/ui/Icons';
import { ProjectVisual } from './ProjectVisual';

interface ProjectCardProps {
  locale: Locale;
  project: ProjectCardModel;
  labels: Dictionary['projects'];
  newTabLabel: string;
}

const actionClass =
  'relative z-10 inline-flex h-9 items-center justify-center gap-1.5 rounded-full px-4 text-[13px] font-semibold transition-colors';

export function ProjectCard({ locale, project, labels, newTabLabel }: ProjectCardProps) {
  const href = `/${locale}/projects/${project.slug}`;
  return (
    <article className="group card relative flex h-full flex-col overflow-hidden transition-colors duration-200 hover:border-brand-500/60">
      <ProjectVisual title={project.title} category={project.category} image={project.image} />

      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap items-center gap-2">
          <span className="chip border-brand-500/40 text-brand-400">{labels.categories[project.category]}</span>
          {project.featured ? <span className="chip border-accent/40 text-accent">{labels.featured}</span> : null}
        </div>

        <h3 className="mt-3 font-display text-lg font-bold text-ink">
          <Link href={href} className="after:absolute after:inset-0 after:content-[''] focus-visible:after:outline focus-visible:after:outline-2 focus-visible:after:outline-accent">
            {project.title}
          </Link>
        </h3>
        <p className="mt-2 line-clamp-4 text-sm leading-relaxed text-muted">{project.summary}</p>

        <ul className="mt-4 flex flex-wrap gap-2" aria-label={labels.technologies}>
          {project.tech.map((tech) => (
            <li key={tech} className="chip">
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap items-center gap-2 pt-5">
          <Link href={href} className={`${actionClass} bg-brand-600 text-white hover:bg-brand-700`}>
            {labels.caseStudy}
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
          {project.demoUrl ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${actionClass} border border-line text-ink hover:border-brand-500/70`}
            >
              {labels.liveDemo}
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              <span className="sr-only">{newTabLabel}</span>
            </a>
          ) : null}
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${actionClass} border border-line text-ink hover:border-brand-500/70`}
            >
              <GithubIcon className="h-3.5 w-3.5" />
              {labels.github}
              <span className="sr-only">{newTabLabel}</span>
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
