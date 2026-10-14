import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { About } from '@/components/sections/About';
import { Contact } from '@/components/sections/Contact';
import { Education } from '@/components/sections/Education';
import { Experience } from '@/components/sections/Experience';
import { Hero } from '@/components/sections/Hero';
import { Projects } from '@/components/sections/Projects';
import { Skills } from '@/components/sections/Skills';
import { site } from '@/data/site';
import { getCvHref } from '@/lib/cv';
import { getDictionary } from '@/lib/i18n';
import { isLocale } from '@/lib/locale';
import { buildMetadata, getSiteUrl } from '@/lib/metadata';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);
  return buildMetadata({
    locale,
    path: '',
    title: dict.meta.title,
    description: dict.meta.description,
    ogAlt: dict.meta.ogAlt,
    absoluteTitle: true,
  });
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);
  const cvHref = getCvHref(locale);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: site.name,
    jobTitle: dict.hero.role,
    url: `${getSiteUrl()}/${locale}`,
    image: `${getSiteUrl()}${site.portrait.src}`,
    email: `mailto:${site.email}`,
    address: { '@type': 'PostalAddress', addressLocality: site.city, addressCountry: site.countryCode },
    sameAs: [site.github, site.linkedin],
  };

  return (
    <>
      <script
        type="application/ld+json"
        // "<" is escaped so the JSON can never close the script tag.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />
      <Hero dict={dict} cvHref={cvHref} />
      <About dict={dict} />
      <Projects locale={locale} dict={dict} />
      <Experience locale={locale} dict={dict} />
      <Education locale={locale} dict={dict} />
      <Skills locale={locale} dict={dict} />
      <Contact dict={dict} />
    </>
  );
}
