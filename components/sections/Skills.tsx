import { Database, Globe, Server, ShieldCheck, Smartphone, type LucideIcon } from 'lucide-react';
import { skillGroups, type SkillIcon } from '@/data/skills';
import type { Dictionary } from '@/data/i18n/types';
import type { Locale } from '@/lib/locale';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';

const icons: Record<SkillIcon, LucideIcon> = {
  mobile: Smartphone,
  backend: Server,
  database: Database,
  quality: ShieldCheck,
  web: Globe,
};

export function Skills({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section id="skills" aria-labelledby="skills-title" className="py-20 sm:py-28">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            id="skills-title"
            eyebrow={dict.skills.eyebrow}
            title={dict.skills.title}
            intro={dict.skills.intro}
          />
        </Reveal>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = icons[group.icon];
            return (
              <li key={group.id}>
                <Reveal delay={index * 0.05} className="card h-full p-5">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-navy-950 text-accent">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="font-display text-base font-bold text-ink">{group.title[locale]}</h3>
                  </div>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li key={item.en} className="chip">
                        {item[locale]}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
