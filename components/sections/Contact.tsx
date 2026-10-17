import { ArrowUpRight, Mail, MapPin } from 'lucide-react';
import { site } from '@/data/site';
import type { Dictionary } from '@/data/i18n/types';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { CopyEmailButton } from '@/components/ui/CopyEmailButton';
import { GithubIcon, LinkedinIcon } from '@/components/ui/Icons';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeading } from '@/components/ui/SectionHeading';

const rowClass = 'card flex items-center gap-4 p-4 transition-colors hover:border-brand-500/60';

function WhatsAppIcon({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
      <path d="M16.02 3.2A12.66 12.66 0 0 0 5.1 22.25L3.4 28.5l6.4-1.68A12.65 12.65 0 1 0 16.02 3.2Zm0 22.98a10.3 10.3 0 0 1-5.25-1.43l-.38-.23-3.8 1 .99-3.7-.25-.4a10.32 10.32 0 1 1 8.69 4.76Zm5.66-7.73c-.31-.16-1.84-.91-2.12-1.01-.28-.1-.49-.16-.7.16-.2.31-.8 1.01-.98 1.22-.18.2-.36.23-.67.08-.31-.16-1.31-.49-2.49-1.54-.92-.82-1.54-1.83-1.72-2.14-.18-.31-.02-.48.14-.63.14-.14.31-.36.46-.54.15-.18.2-.31.31-.52.1-.2.05-.39-.03-.54-.08-.15-.7-1.69-.96-2.31-.25-.6-.51-.52-.7-.53l-.6-.01c-.2 0-.54.08-.82.39-.28.31-1.08 1.06-1.08 2.59s1.11 3 1.26 3.2c.15.2 2.18 3.33 5.28 4.67.74.32 1.31.51 1.76.65.74.24 1.42.2 1.95.12.59-.09 1.84-.75 2.1-1.48.26-.73.26-1.35.18-1.48-.08-.13-.28-.2-.59-.36Z" />
    </svg>
  );
}

export function Contact({ dict }: { dict: Dictionary }) {
  const { contact } = dict;
  return (
    <section id="contact" aria-labelledby="contact-title" className="py-20 sm:py-28">
      <div className="container-page">
        <div className="grid items-start gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <SectionHeading id="contact-title" eyebrow={contact.eyebrow} title={contact.title} intro={contact.text} />
            <div className="mt-8">
              <ButtonLink href={`mailto:${site.email}`} variant="primary"><Mail className="h-4 w-4" aria-hidden="true" />{contact.writeMe}</ButtonLink>
            </div>
          </Reveal>
          <ul className="space-y-3 lg:col-span-7">
            <li><Reveal className="card flex items-center gap-4 p-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-line bg-navy-950 text-accent"><Mail className="h-5 w-5" aria-hidden="true" /></span>
              <div className="min-w-0 flex-1"><p className="text-xs font-semibold uppercase tracking-wider text-muted">{contact.email}</p><a href={`mailto:${site.email}`} className="block truncate text-sm font-semibold text-ink hover:text-accent sm:text-base">{site.email}</a></div>
              <CopyEmailButton email={site.email} label={contact.copyEmail} copiedLabel={contact.copied} failedLabel={contact.copyFailed} />
            </Reveal></li>
            <li><Reveal><a href="https://wa.me/21624956675" target="_blank" rel="noopener noreferrer" className={rowClass} aria-label="Contacter Wissem Attouf sur WhatsApp au +216 24 956 675">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-[#25D366]"><WhatsAppIcon /></span>
              <span className="min-w-0 flex-1"><span className="block text-xs font-semibold uppercase tracking-wider text-muted">WhatsApp</span><span className="block truncate text-sm font-semibold text-ink sm:text-base">+216 24 956 675</span></span>
              <ArrowUpRight className="h-4 w-4 text-muted" aria-hidden="true" />
            </a></Reveal></li>
            <li><Reveal><a href={site.linkedin} target="_blank" rel="noopener noreferrer" className={rowClass}>
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-line bg-navy-950 text-accent"><LinkedinIcon className="h-5 w-5" /></span>
              <span className="min-w-0 flex-1"><span className="block text-xs font-semibold uppercase tracking-wider text-muted">{contact.linkedin}</span><span className="block truncate text-sm font-semibold text-ink sm:text-base">linkedin.com/in/wissem-attouf-452509226</span></span>
              <ArrowUpRight className="h-4 w-4 text-muted" aria-hidden="true" /><span className="sr-only">{dict.common.newTab}</span>
            </a></Reveal></li>
            <li><Reveal><a href={site.github} target="_blank" rel="noopener noreferrer" className={rowClass}>
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-line bg-navy-950 text-accent"><GithubIcon className="h-5 w-5" /></span>
              <span className="min-w-0 flex-1"><span className="block text-xs font-semibold uppercase tracking-wider text-muted">{contact.github}</span><span className="block truncate text-sm font-semibold text-ink sm:text-base">github.com/WissemAttouf</span></span>
              <ArrowUpRight className="h-4 w-4 text-muted" aria-hidden="true" /><span className="sr-only">{dict.common.newTab}</span>
            </a></Reveal></li>
            <li><Reveal className="card flex items-center gap-4 p-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-line bg-navy-950 text-accent"><MapPin className="h-5 w-5" aria-hidden="true" /></span>
              <div><p className="text-xs font-semibold uppercase tracking-wider text-muted">{contact.location}</p><p className="text-sm font-semibold text-ink sm:text-base">{contact.locationValue}</p></div>
            </Reveal></li>
          </ul>
        </div>
      </div>
    </section>
  );
}
