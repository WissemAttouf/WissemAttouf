import { Award, GraduationCap } from 'lucide-react';
import { certifications, education } from '@/data/education';
import type { Dictionary } from '@/data/i18n/types';
import type { Locale } from '@/lib/locale';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function Education({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section id="education" aria-labelledby="education-title" className="py-20 sm:py-24">
      <div className="container-page">
        <Reveal>
          <SectionHeading id="education-title" eyebrow={dict.education.eyebrow} title={dict.education.title} />
        </Reveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div>
            <h3 className="flex items-center gap-2 font-display text-base font-bold text-ink">
              <GraduationCap className="h-5 w-5 text-accent" aria-hidden="true" />
              {dict.education.educationTitle}
            </h3>
            <ul className="mt-4 space-y-4">
              {education.map((item, index) => (
                <li key={item.id}>
                  <Reveal delay={index * 0.06} className="card p-5">
                    <p className="font-display text-base font-bold text-ink">{item.degree[locale]}</p>
                    <p className="mt-1 text-sm font-semibold text-brand-400">{item.school[locale]}</p>
                    <p className="mt-1 text-sm text-slate-300">{item.field[locale]}</p>
                    <p className="mt-2 text-sm text-muted">{item.period[locale]}</p>
                    {item.note ? <p className="mt-1 text-sm text-muted">{item.note[locale]}</p> : null}
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="flex items-center gap-2 font-display text-base font-bold text-ink">
              <Award className="h-5 w-5 text-accent" aria-hidden="true" />
              {dict.education.certificationsTitle}
            </h3>
            <ul className="mt-4 space-y-4">
              {certifications.map((item, index) => (
                <li key={item.id}>
                  <Reveal delay={index * 0.06} className="card flex items-center justify-between gap-4 p-5">
                    <div>
                      <p className="font-display text-base font-bold text-ink">{item.title[locale]}</p>
                      <p className="mt-1 text-sm text-muted">{item.issuer}</p>
                    </div>
                    <span className="chip shrink-0">{item.year}</span>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
