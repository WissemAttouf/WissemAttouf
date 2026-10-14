import { site } from '@/data/site';
import { projects, toCardModel } from '@/data/projects';
import type { Dictionary } from '@/data/i18n/types';
import type { Locale } from '@/lib/locale';
import { ProjectsExplorer } from '@/components/projects/ProjectsExplorer';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function Projects({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const cards = projects.map((project) => toCardModel(project, locale));
  return (
    <section id="projects" aria-labelledby="projects-title" className="py-20 sm:py-28">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            id="projects-title"
            eyebrow={dict.projects.eyebrow}
            title={dict.projects.title}
            intro={dict.projects.intro}
          />
        </Reveal>
        <div className="mt-10">
          <ProjectsExplorer locale={locale} projects={cards} labels={dict.projects} newTabLabel={dict.common.newTab} githubUrl={site.github} />
        </div>
      </div>
    </section>
  );
}
