import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2, CircleDashed, Clock, type LucideIcon } from 'lucide-react';
import type { FeatureStatus, LocalizedProject } from '@/data/projects';
import type { Dictionary } from '@/data/i18n/types';
import type { Locale } from '@/lib/locale';
import { cn } from '@/lib/cn';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { GithubIcon } from '@/components/ui/Icons';
import { ProjectVisual } from './ProjectVisual';

interface Neighbour {
  slug: string;
  title: string;
}

interface CaseStudyProps {
  locale: Locale;
  project: LocalizedProject;
  dict: Dictionary;
  previous: Neighbour | null;
  next: Neighbour | null;
}

const statusIcon: Record<FeatureStatus, LucideIcon> = {
  implemented: CheckCircle2,
  inProgress: CircleDashed,
  planned: Clock,
};

const statusStyle: Record<FeatureStatus, string> = {
  implemented: 'border-accent/40 text-accent',
  inProgress: 'border-brand-500/50 text-brand-400',
  planned: 'border-line text-muted',
};

function Block({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section aria-labelledby={id}>
      <h2 id={id} className="font-display text-xl font-bold text-ink sm:text-2xl">
        {title}
      </h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-2 pl-5 text-base leading-relaxed text-slate-300 marker:text-brand-500">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export function CaseStudy({ locale, project, dict, previous, next }: CaseStudyProps) {
  const cs = dict.caseStudy;
  const hasLinks = Boolean(project.demoUrl || project.githubUrl);

  return (
    <article>
      <header className="hero-glow pt-28 sm:pt-32">
        <div className="container-page pb-10">
          <Link
            href={`/${locale}#projects`}
            className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-ink"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            {cs.back}
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-2">
            <span className="chip border-brand-500/40 text-brand-400">{dict.projects.categories[project.category]}</span>
            {project.featured ? <span className="chip border-accent/40 text-accent">{dict.projects.featured}</span> : null}
          </div>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">{project.summary}</p>

          {hasLinks ? (
            <div className="mt-7 flex flex-wrap gap-3">
              {project.demoUrl ? (
                <ButtonLink href={project.demoUrl} external variant="primary">
                  {cs.liveDemo}
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  <span className="sr-only">{dict.common.newTab}</span>
                </ButtonLink>
              ) : null}
              {project.githubUrl ? (
                <ButtonLink href={project.githubUrl} external variant="secondary">
                  <GithubIcon className="h-4 w-4" />
                  {cs.sourceCode}
                  <span className="sr-only">{dict.common.newTab}</span>
                </ButtonLink>
              ) : null}
            </div>
          ) : null}
        </div>
      </header>

      <div className="container-page">
        <ProjectVisual
          title={project.title}
          category={project.category}
          image={project.image}
          priority
          sizes="(min-width: 1152px) 1088px, 100vw"
          className="rounded-3xl border border-line"
        />
      </div>

      <div className="container-page grid gap-12 py-14 lg:grid-cols-[minmax(0,1fr)_20rem]">
        <div className="space-y-12">
          <Block id="cs-overview" title={cs.overview}>
            <div className="space-y-4 text-base leading-relaxed text-slate-300">
              {project.overview.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Block>

          {project.problem ? (
            <Block id="cs-problem" title={cs.problem}>
              <p className="text-base leading-relaxed text-slate-300">{project.problem}</p>
            </Block>
          ) : null}

          <Block id="cs-objectives" title={cs.objectives}>
            <BulletList items={project.objectives} />
          </Block>

          <Block id="cs-features" title={cs.features}>
            <ul className="grid gap-3 sm:grid-cols-2">
              {project.features.map((feature) => {
                const Icon = statusIcon[feature.status];
                return (
                  <li key={feature.label} className="card flex flex-col gap-3 p-4">
                    <span className="text-sm font-semibold text-ink">{feature.label}</span>
                    <span
                      className={cn(
                        'inline-flex w-fit items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium',
                        statusStyle[feature.status],
                      )}
                    >
                      <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                      {cs.status[feature.status]}
                    </span>
                  </li>
                );
              })}
            </ul>
          </Block>

          {project.workflow.length > 0 ? (
            <Block id="cs-workflow" title={cs.workflow}>
              <ol className="space-y-3">
                {project.workflow.map((step, index) => (
                  <li key={step.title} className="card flex gap-4 p-4">
                    <span
                      aria-hidden="true"
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white"
                    >
                      {index + 1}
                    </span>
                    <div>
                      <p className="font-display text-base font-bold text-ink">{step.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-muted">{step.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </Block>
          ) : null}

          {project.roles.length > 0 ? (
            <Block id="cs-roles" title={cs.roles}>
              <ul className="flex flex-wrap gap-2">
                {project.roles.map((role) => (
                  <li key={role} className="chip border-brand-500/40 px-3.5 py-1.5 text-sm text-slate-200">
                    {role}
                  </li>
                ))}
              </ul>
            </Block>
          ) : null}

          {project.architecture.length > 0 ? (
            <Block id="cs-architecture" title={cs.architecture}>
              <BulletList items={project.architecture} />
            </Block>
          ) : null}

          {project.implementation.length > 0 ? (
            <Block id="cs-implementation" title={cs.implementation}>
              <BulletList items={project.implementation} />
            </Block>
          ) : null}

          {project.contributions.length > 0 ? (
            <Block id="cs-contributions" title={cs.contributions}>
              <BulletList items={project.contributions} />
            </Block>
          ) : null}

          {project.challenges.length > 0 ? (
            <Block id="cs-challenges" title={cs.challenges}>
              <ul className="space-y-3">
                {project.challenges.map((challenge) => (
                  <li key={challenge.title} className="card p-4">
                    <p className="font-display text-base font-bold text-ink">{challenge.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{challenge.text}</p>
                  </li>
                ))}
              </ul>
            </Block>
          ) : null}

          {project.lessons.length > 0 ? (
            <Block id="cs-lessons" title={cs.lessons}>
              <BulletList items={project.lessons} />
            </Block>
          ) : null}

          {project.screenshots.length > 0 ? (
            <Block id="cs-screenshots" title={cs.screenshots}>
              <ul className="grid gap-4 sm:grid-cols-2">
                {project.screenshots.map((shot) => (
                  <li key={shot.src} className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-line bg-navy-900">
                    <Image src={shot.src} alt={shot.alt} fill sizes="(min-width: 1024px) 28rem, 50vw" className="object-cover object-top" />
                  </li>
                ))}
              </ul>
            </Block>
          ) : null}
        </div>

        <aside aria-label={cs.stack} className="lg:sticky lg:top-24 lg:self-start">
          <div className="card space-y-6 p-5">
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">{cs.stack}</h2>
              <ul className="mt-3 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <li key={tech} className="chip">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">{cs.category}</h2>
              <p className="mt-2 text-sm font-medium text-ink">{dict.projects.categories[project.category]}</p>
            </div>
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">{cs.links}</h2>
              {hasLinks ? (
                <ul className="mt-3 space-y-2 text-sm">
                  {project.demoUrl ? (
                    <li>
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-semibold text-accent hover:underline">
                        {cs.liveDemo}
                        <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                        <span className="sr-only">{dict.common.newTab}</span>
                      </a>
                    </li>
                  ) : null}
                  {project.githubUrl ? (
                    <li>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-semibold text-accent hover:underline">
                        {cs.sourceCode}
                        <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                        <span className="sr-only">{dict.common.newTab}</span>
                      </a>
                    </li>
                  ) : null}
                </ul>
              ) : (
                <p className="mt-2 text-sm leading-relaxed text-muted">{cs.noLinks}</p>
              )}
            </div>
          </div>
        </aside>
      </div>

      {previous || next ? (
        <nav aria-label={cs.pagination} className="border-t border-line">
          <div className="container-page grid gap-4 py-10 sm:grid-cols-2">
            {previous ? (
              <Link
                href={`/${locale}/projects/${previous.slug}`}
                className="card group flex flex-col gap-1 p-5 transition-colors hover:border-brand-500/60"
              >
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted">
                  <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
                  {cs.previous}
                </span>
                <span className="font-display text-lg font-bold text-ink">{previous.title}</span>
              </Link>
            ) : (
              <span aria-hidden="true" className="hidden sm:block" />
            )}
            {next ? (
              <Link
                href={`/${locale}/projects/${next.slug}`}
                className="card group flex flex-col gap-1 p-5 text-left transition-colors hover:border-brand-500/60 sm:items-end sm:text-right"
              >
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted">
                  {cs.next}
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
                <span className="font-display text-lg font-bold text-ink">{next.title}</span>
              </Link>
            ) : null}
          </div>
        </nav>
      ) : null}
    </article>
  );
}
