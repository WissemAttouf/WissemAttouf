'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getDictionary } from '@/lib/i18n';
import { defaultLocale, isLocale } from '@/lib/locale';

export default function NotFound() {
  const segment = (usePathname() ?? '').split('/')[1] ?? '';
  const locale = isLocale(segment) ? segment : defaultLocale;
  const { notFound } = getDictionary(locale);

  return (
    <section className="container-page flex min-h-[70vh] flex-col items-start justify-center py-32">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">404</p>
      <h1 className="mt-3 font-display text-4xl font-bold text-ink">{notFound.title}</h1>
      <p className="mt-4 max-w-md text-muted">{notFound.text}</p>
      <Link
        href={`/${locale}`}
        className="mt-8 inline-flex h-11 items-center rounded-full bg-brand-600 px-5 text-sm font-semibold text-white hover:bg-brand-700"
      >
        {notFound.cta}
      </Link>
    </section>
  );
}
