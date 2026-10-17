import Link from 'next/link';
import { ArrowUp } from 'lucide-react';
import { navSections, site } from '@/data/site';
import type { Dictionary } from '@/data/i18n/types';
import type { Locale } from '@/lib/locale';
import { GithubIcon, LinkedinIcon } from '@/components/ui/Icons';

interface FooterProps { locale: Locale; dict: Dictionary; }
const socialLink = 'inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-brand-500/70 hover:text-ink';

export function Footer({ locale, dict }: FooterProps) {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line bg-navy-950">
      <div className="container-page flex flex-col gap-8 py-10 md:flex-row md:items-start md:justify-between">
        <div className="max-w-xs"><p className="font-display text-base font-bold text-ink">{site.name}</p><p className="mt-2 text-sm text-muted">{dict.hero.role}</p><p className="mt-1 text-sm text-muted">{dict.hero.location}</p></div>
        <nav aria-label={dict.nav.primaryLabel}><ul className="grid grid-cols-2 gap-x-10 gap-y-2 text-sm">
          {navSections.map((id) => <li key={id}><Link href={`/${locale}#${id}`} className="text-muted transition-colors hover:text-ink">{dict.nav[id]}</Link></li>)}
        </ul></nav>
        <div className="flex items-center gap-3">
          <a href={site.github} target="_blank" rel="noopener noreferrer" aria-label={dict.hero.github} className={socialLink}><GithubIcon className="h-[18px] w-[18px]" /></a>
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer" aria-label={dict.hero.linkedin} className={socialLink}><LinkedinIcon className="h-[18px] w-[18px]" /></a>
        </div>
      </div>
      <div className="border-t border-line"><div className="container-page flex flex-col items-start justify-between gap-3 py-5 text-xs text-muted sm:flex-row sm:items-center">
        <p>© {year} {site.name}. {dict.footer.rights}</p><p>{dict.footer.builtWith}</p>
        <a href="#main" className="group inline-flex min-h-10 items-center gap-2 rounded-full border border-line bg-white px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand-500 hover:bg-brand-50 hover:text-brand-700 focus-visible:outline-offset-4">
          <ArrowUp className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" aria-hidden="true" />{dict.footer.backToTop}
        </a>
      </div></div>
    </footer>
  );
}
