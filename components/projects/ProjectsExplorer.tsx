'use client';

import { useMemo, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import type { ProjectCardModel, ProjectCategory } from '@/data/projects';
import type { Dictionary } from '@/data/i18n/types';
import type { Locale } from '@/lib/locale';
import { template } from '@/lib/format';
import { cn } from '@/lib/cn';
import { GithubIcon } from '@/components/ui/Icons';
import { ProjectCard } from './ProjectCard';

interface ProjectsExplorerProps {
  locale: Locale;
  projects: ProjectCardModel[];
  labels: Dictionary['projects'];
  newTabLabel: string;
  githubUrl: string;
}

type Filter = 'all' | ProjectCategory;

export function ProjectsExplorer({ locale, projects, labels, newTabLabel, githubUrl }: ProjectsExplorerProps) {
  const [filter, setFilter] = useState<Filter>('all');

  // Only categories that actually contain a project are offered as filters.
  const categories = useMemo(() => Array.from(new Set(projects.map((project) => project.category))), [projects]);
  const visible = filter === 'all' ? projects : projects.filter((project) => project.category === filter);
  const filters: Filter[] = ['all', ...categories];

  return (
    <div>
      {categories.length > 1 ? (
        <div role="group" aria-label={labels.filterLabel} className="flex flex-wrap gap-2">
          {filters.map((value) => (
            <button
              key={value}
              type="button"
              aria-pressed={filter === value}
              onClick={() => setFilter(value)}
              className={cn(
                'h-9 rounded-full border px-4 text-sm font-medium transition-colors',
                filter === value
                  ? 'border-brand-500 bg-brand-600 text-white'
                  : 'border-line text-muted hover:border-brand-500/60 hover:text-ink',
              )}
            >
              {value === 'all' ? labels.all : labels.categories[value]}
            </button>
          ))}
        </div>
      ) : null}

      <p className="sr-only" role="status" aria-live="polite">
        {template(labels.resultsAnnouncement, { count: visible.length, total: projects.length })}
      </p>

      <ul className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((project) => (
          <li key={project.slug}>
            <ProjectCard locale={locale} project={project} labels={labels} newTabLabel={newTabLabel} />
          </li>
        ))}
        {filter === 'all' ? (
          <li>
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="card flex h-full min-h-[16rem] flex-col items-center justify-center gap-3 border-dashed p-6 text-center transition-colors hover:border-brand-500/60"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-line bg-navy-950 text-ink">
                <GithubIcon className="h-6 w-6" />
              </span>
              <span className="font-display text-base font-bold text-ink">{labels.moreTitle}</span>
              <span className="text-sm text-muted">{labels.moreText}</span>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                {labels.moreCta}
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </span>
              <span className="sr-only">{newTabLabel}</span>
            </a>
          </li>
        ) : null}
      </ul>
    </div>
  );
}
