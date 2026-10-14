import { Briefcase } from 'lucide-react';
import { experience } from '@/data/experience';
import type { Dictionary } from '@/data/i18n/types';
import type { Locale } from '@/lib/locale';
import { formatMonth } from '@/lib/format';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function Experience({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section id="experience" aria-labelledby="experience-title" className="py-20 sm:py-28">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            id="experience-title"
            eyebrow={dict.experience.eyebrow}
            title={dict.experience.title}
            intro={dict.experience.intro}
          />
        </Reveal>

        <ol className="relative mt-12 space-y-6 border-l border-line pl-6 sm:pl-8">
          {experience.map((item, index) => (
            <li key={item.id} className="relative">
              <span
                aria-hidden="true"
                className="absolute -left-[2.15rem] top-6 flex h-5 w-5 items-center justify-center rounded-full border border-line bg-navy-950 sm:-left-[2.65rem]"
              >
                <span className="h-2 w-2 rounded-full bg-accent" />
              </span>
              <Reveal delay={index * 0.06} className="card p-5 sm:p-6">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="font-display text-lg font-bold text-ink">{item.role[locale]}</h3>
                    <p className="mt-0.5 flex items-center gap-2 text-sm font-semibold text-brand-400">
                      <Briefcase className="h-4 w-4" aria-hidden="true" />
                      {item.company}
                      {item.type ? <span className="chip font-normal">{item.type[locale]}</span> : null}
                    </p>
                  </div>
                  <p className="text-sm text-muted sm:pt-1">
                    <time dateTime={item.start}>{formatMonth(item.start, locale)}</time>
                    {' — '}
                    <time dateTime={item.end}>{formatMonth(item.end, locale)}</time>
                  </p>
                </div>

                <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-slate-300 marker:text-brand-500">
                  {item.bullets[locale].map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>

                {item.tech.length > 0 ? (
                  <div className="mt-5">
                    <p className="sr-only">{dict.experience.technologies}</p>
                    <ul className="flex flex-wrap gap-2">
                      {item.tech.map((tech) => (
                        <li key={tech} className="chip">
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
