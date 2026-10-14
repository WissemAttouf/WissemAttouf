'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { Download, Menu, X } from 'lucide-react';
import { navSections } from '@/data/site';
import type { Dictionary } from '@/data/i18n/types';
import type { Locale } from '@/lib/locale';
import { cn } from '@/lib/cn';
import { LanguageSwitcher } from './LanguageSwitcher';

interface NavbarProps {
  locale: Locale;
  labels: Dictionary['nav'];
  cvHref: string | null;
}

type NavId = (typeof navSections)[number];

/** Sections that exist on the home page, mapped to the nav item they highlight. */
const OBSERVED: Record<string, string> = {
  home: 'home',
  about: 'about',
  projects: 'projects',
  experience: 'experience',
  education: 'experience',
  skills: 'skills',
  contact: 'contact',
};

export function Navbar({ locale, labels, cvHref }: NavbarProps) {
  const pathname = usePathname() ?? '';
  const isHome = pathname === `/${locale}` || pathname === `/${locale}/`;
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const hrefFor = (id: string) => (isHome ? `#${id}` : `/${locale}#${id}`);

  // Header background once the page is scrolled.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Active-section highlighting (home page only).
  useEffect(() => {
    if (!isHome) {
      setActive(null);
      return;
    }
    const targets = Array.from(document.querySelectorAll<HTMLElement>('section[id]')).filter((el) => el.id in OBSERVED);
    if (targets.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(OBSERVED[entry.target.id] ?? null);
        }
      },
      { rootMargin: '-35% 0px -60% 0px' },
    );
    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [isHome]);

  // Close the mobile menu after navigating.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Mobile menu: Escape to close, focus trap, no background scroll.
  useEffect(() => {
    if (!open) return;
    const panel = panelRef.current;
    const getFocusable = (): HTMLElement[] => [
      ...(toggleRef.current ? [toggleRef.current] : []),
      ...Array.from(panel?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])') ?? []),
    ];
    Array.from(panel?.querySelectorAll<HTMLElement>('a[href]') ?? [])[0]?.focus();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
        return;
      }
      if (event.key !== 'Tab') return;
      const items = getFocusable();
      const first = items[0];
      const last = items[items.length - 1];
      if (!first || !last) return;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  const linkClass = (id: string) =>
    cn(
      'rounded-full px-3 py-2 text-sm font-medium transition-colors',
      active === id ? 'text-ink' : 'text-muted hover:text-ink',
    );

  const renderLink = (id: NavId, className: string, onClick?: () => void) => {
    const href = hrefFor(id);
    if (isHome) {
      return (
        <a
          key={id}
          href={href}
          className={className}
          aria-current={active === id ? 'location' : undefined}
          onClick={onClick}
        >
          {labels[id]}
        </a>
      );
    }
    return (
      <Link key={id} href={href} className={className} onClick={onClick}>
        {labels[id]}
      </Link>
    );
  };

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 border-b transition-colors duration-200',
        scrolled || open ? 'border-line bg-navy-950/90 backdrop-blur-md' : 'border-transparent bg-transparent',
      )}
    >
      <nav aria-label={labels.primaryLabel} className="container-page flex h-16 items-center justify-between gap-4">
        <Link
          href={`/${locale}`}
          className="flex items-center gap-2.5 font-display text-[15px] font-bold tracking-tight text-ink"
        >
          <span
            aria-hidden="true"
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand-500 to-accent text-[13px] font-extrabold text-navy-950"
          >
            WA
          </span>
          Wissem Attouf
        </Link>

        <div className="hidden items-center gap-1 lg:flex">{navSections.map((id) => renderLink(id, linkClass(id)))}</div>

        <div className="flex items-center gap-2.5">
          <LanguageSwitcher locale={locale} label={labels.languageLabel} switchTo={labels.switchTo} />
          {cvHref ? (
            <a
              href={cvHref}
              download
              className="hidden h-9 items-center gap-2 rounded-full bg-brand-600 px-4 text-[13px] font-semibold text-white transition-colors hover:bg-brand-700 lg:inline-flex"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              {labels.downloadCv}
            </a>
          ) : null}
          <button
            ref={toggleRef}
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? labels.closeMenu : labels.openMenu}
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-brand-500/70 lg:hidden"
          >
            {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {open ? (
        <div id="mobile-menu" ref={panelRef} className="border-t border-line bg-navy-950 lg:hidden">
          <div className="container-page flex flex-col gap-1 py-4">
            {navSections.map((id) =>
              renderLink(id, 'rounded-xl px-3 py-3 text-base font-medium text-ink hover:bg-navy-900', () =>
                setOpen(false),
              ),
            )}
            {cvHref ? (
              <a
                href={cvHref}
                download
                className="mt-2 inline-flex h-11 items-center justify-center gap-2 rounded-full bg-brand-600 px-5 text-sm font-semibold text-white hover:bg-brand-700"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                {labels.downloadCv}
              </a>
            ) : null}
          </div>
        </div>
      ) : null}
    </header>
  );
}
