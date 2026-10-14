import { Database, Server, Smartphone } from 'lucide-react';
import type { Dictionary } from '@/data/i18n/types';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';

const icons = [Smartphone, Server, Database] as const;

export function About({ dict }: { dict: Dictionary }) {
  const { about } = dict;
  return (
    <section id="about" aria-labelledby="about-title" className="py-20 sm:py-28">
      <div className="container-page">
        <Reveal>
          <SectionHeading id="about-title" eyebrow={about.eyebrow} title={about.title} />
        </Reveal>

        <div className="mt-10 grid gap-10 lg:grid-cols-12">
          <Reveal className="space-y-5 text-base leading-relaxed text-slate-300 lg:col-span-6">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </Reveal>

          <div className="lg:col-span-6">
            <h3 className="sr-only">{about.focusLabel}</h3>
            <ul className="grid gap-4">
              {about.focus.map((item, index) => {
                const Icon = icons[index] ?? Server;
                return (
                  <li key={item.title}>
                    <Reveal delay={index * 0.08} className="card flex gap-4 p-5">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-line bg-navy-950 text-accent">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <div>
                        <p className="font-display text-base font-bold text-ink">{item.title}</p>
                        <p className="text-sm font-medium text-brand-400">{item.subtitle}</p>
                        <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
                      </div>
                    </Reveal>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
