import { ArrowUpRight, Mail, MapPin, MessageCircle } from 'lucide-react';
import { site } from '@/data/site';
import type { Dictionary } from '@/data/i18n/types';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { CopyEmailButton } from '@/components/ui/CopyEmailButton';
import { GithubIcon, LinkedinIcon } from '@/components/ui/Icons';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';

const rowClass =
  'card flex items-center gap-4 p-4 transition-colors hover:border-brand-500/60';

export function Contact({ dict }: { dict: Dictionary }) {
  const { contact } = dict;
  return (
    <section id="contact" aria-labelledby="contact-title" className="py-20 sm:py-28">
      <div className="container-page">
        <div className="grid items-start gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <SectionHeading id="contact-title" eyebrow={contact.eyebrow} title={contact.title} intro={contact.text} />
            <div className="mt-8">
              <ButtonLink href={`mailto:${site.email}`} variant="primary">
                <Mail className="h-4 w-4" aria-hidden="true" />
                {contact.writeMe}
              </ButtonLink>
            </div>
          </Reveal>

          <ul className="space-y-3 lg:col-span-7">
            <li>
              <Reveal className="card flex items-center gap-4 p-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-line bg-navy-950 text-accent">
                  <Mail className="h-5 w-5" aria-hidden="true" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted">{contact.email}</p>
                  <a href={`mailto:${site.email}`} className="block truncate text-sm font-semibold text-ink hover:text-accent sm:text-base">
                    {site.email}
                  </a>
                </div>
                <CopyEmailButton
                  email={site.email}
                  label={contact.copyEmail}
                  copiedLabel={contact.copied}
                  failedLabel={contact.copyFailed}
                />
              </Reveal>
            </li>
            <li>
              <Reveal>
                <a
                  href="https://wa.me/21624956675"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={rowClass}
                  aria-label="Contacter Wissem Attouf sur WhatsApp au +216 24 956 675"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-600">
                    <MessageCircle className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-xs font-semibold uppercase tracking-wider text-muted">WhatsApp</span>
                    <span className="block truncate text-sm font-semibold text-ink sm:text-base">+216 24 956 675</span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-muted" aria-hidden="true" />
                </a>
              </Reveal>
            </li>
            <li>
              <Reveal>
                <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className={rowClass}>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-line bg-navy-950 text-accent">
                    <LinkedinIcon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-xs font-semibold uppercase tracking-wider text-muted">{contact.linkedin}</span>
                    <span className="block truncate text-sm font-semibold text-ink sm:text-base">linkedin.com/in/wissem-attouf-452509226</span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-muted" aria-hidden="true" />
                  <span className="sr-only">{dict.common.newTab}</span>
                </a>
              </Reveal>
            </li>
            <li>
              <Reveal>
                <a href={site.github} target="_blank" rel="noopener noreferrer" className={rowClass}>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-line bg-navy-950 text-accent">
                    <GithubIcon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-xs font-semibold uppercase tracking-wider text-muted">{contact.github}</span>
                    <span className="block truncate text-sm font-semibold text-ink sm:text-base">github.com/WissemAttouf</span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-muted" aria-hidden="true" />
                  <span className="sr-only">{dict.common.newTab}</span>
                </a>
              </Reveal>
            </li>
            <li>
              <Reveal className="card flex items-center gap-4 p-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-line bg-navy-950 text-accent">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted">{contact.location}</p>
                  <p className="text-sm font-semibold text-ink sm:text-base">{contact.locationValue}</p>
                </div>
              </Reveal>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
