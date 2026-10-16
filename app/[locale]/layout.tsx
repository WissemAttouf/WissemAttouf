import type { Metadata, Viewport } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import { notFound } from 'next/navigation';
import { MessageCircle } from 'lucide-react';
import type { ReactNode } from 'react';
import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';
import { SkipLink } from '@/components/layout/SkipLink';
import { MotionProvider } from '@/components/ui/MotionProvider';
import { site } from '@/data/site';
import { getCvHref } from '@/lib/cv';
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
  const cvHref = getCvHref(locale);

  return (
    <html lang={locale} className={`${inter.variable} ${display.variable}`}>
      <body className="min-h-screen">
        <MotionProvider>
          <SkipLink label={dict.nav.skipToContent} />
          <Navbar locale={locale} labels={dict.nav} cvHref={cvHref} />
          <main id="main">{children}</main>
          <Footer locale={locale} dict={dict} />
          <a
            href="https://wa.me/21624956675"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contacter Wissem Attouf sur WhatsApp au +216 24 956 675"
            title="WhatsApp : +216 24 956 675"
            className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg transition-transform hover:scale-105 hover:bg-emerald-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-500"
          >
            <MessageCircle className="h-7 w-7" aria-hidden="true" />
          </a>
        </MotionProvider>
      </body>
    </html>
  );
}
