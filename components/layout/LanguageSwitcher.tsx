'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import type { MouseEvent } from 'react';
import { locales, type Locale } from '@/lib/locale';

interface LanguageSwitcherProps {
  locale: Locale;
  label: string;
  switchTo: Record<Locale, string>;
}

/** Swaps the language prefix of the current URL and keeps the page and #section. */
export function LanguageSwitcher({ locale, label, switchTo }: LanguageSwitcherProps) {
  const pathname = usePathname() ?? `/${locale}`;
  const router = useRouter();

  function hrefFor(target: Locale): string {
    const rest = pathname.replace(/^\/(en|fr)(?=\/|$)/, '');
    return `/${target}${rest}`;
  }

  function onClick(event: MouseEvent<HTMLAnchorElement>, target: Locale) {
    event.preventDefault();
    router.push(`${hrefFor(target)}${window.location.hash}`);
  }

  return (
    <div
      role="group"
      aria-label={label}
      className="flex items-center rounded-full border border-line bg-navy-900/60 p-0.5 text-xs font-semibold"
    >
      {locales.map((target) =>
        target === locale ? (
          <span
            key={target}
            aria-current="true"
            lang={target}
            className="rounded-full bg-brand-600 px-3 py-1.5 uppercase text-white"
          >
            {target}
          </span>
        ) : (
          <Link
            key={target}
            href={hrefFor(target)}
            hrefLang={target}
            lang={target}
            aria-label={switchTo[target]}
            onClick={(event) => onClick(event, target)}
            className="rounded-full px-3 py-1.5 uppercase text-muted transition-colors hover:text-ink"
          >
            {target}
          </Link>
        ),
      )}
    </div>
  );
}
