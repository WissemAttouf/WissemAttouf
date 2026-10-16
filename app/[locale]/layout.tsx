import type { Metadata, Viewport } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import { notFound } from 'next/navigation';
import type { ReactNode } from 'react';
import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';
import { SkipLink } from '@/components/layout/SkipLink';
import { MotionProvider } from '@/components/ui/MotionProvider';
import { site } from '@/data/site';
import { getDictionary } from '@/lib/i18n';
import { isLocale, locales } from '@/lib/locale';
import { getSiteUrl } from '@/lib/metadata';
import '../globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const display = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-display', display: 'swap' });

interface LayoutProps {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}

// Only /en and /fr exist; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const viewport: Viewport = {
  themeColor: '#0B1120',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
};

export async function generateMetadata({ params }: Pick<LayoutProps, 'params'>): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);
  return {
    metadataBase: new URL(getSiteUrl()),
    title: { default: dict.meta.title, template: `%s | ${site.name}` },
    description: dict.meta.description,
    applicationName: site.name,
    authors: [{ name: site.name, url: site.linkedin }],
    creator: site.name,
    robots: { index: true, follow: true },
    formatDetection: { telephone: false, email: false, address: false },
  };
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return (
    <html lang={locale} className={`${inter.variable} ${display.variable}`}>
      <body className="min-h-screen">
        <MotionProvider>
          <SkipLink label={dict.nav.skipToContent} />
          <Navbar locale={locale} labels={dict.nav} />
          <main id="main">{children}</main>
          <Footer locale={locale} dict={dict} />
        </MotionProvider>
      </body>
    </html>
  );
}
