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
          <a
            href="https://wa.me/21624956675"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contacter Wissem Attouf sur WhatsApp au +216 24 956 675"
            title="WhatsApp : +216 24 956 675"
            className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-200 hover:scale-105 hover:bg-[#1ebe5d] hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#25D366]"
          >
            <svg className="h-8 w-8" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true" focusable="false">
              <path d="M16.02 3.2A12.66 12.66 0 0 0 5.1 22.25L3.4 28.5l6.4-1.68A12.65 12.65 0 1 0 16.02 3.2Zm0 22.98a10.3 10.3 0 0 1-5.25-1.43l-.38-.23-3.8 1 .99-3.7-.25-.4a10.32 10.32 0 1 1 8.69 4.76Zm5.66-7.73c-.31-.16-1.84-.91-2.12-1.01-.28-.1-.49-.16-.7.16-.2.31-.8 1.01-.98 1.22-.18.2-.36.23-.67.08-.31-.16-1.31-.49-2.49-1.54-.92-.82-1.54-1.83-1.72-2.14-.18-.31-.02-.48.14-.63.14-.14.31-.36.46-.54.15-.18.2-.31.31-.52.1-.2.05-.39-.03-.54-.08-.15-.7-1.69-.96-2.31-.25-.6-.51-.52-.7-.53l-.6-.01c-.2 0-.54.08-.82.39-.28.31-1.08 1.06-1.08 2.59s1.11 3 1.26 3.2c.15.2 2.18 3.33 5.28 4.67.74.32 1.31.51 1.76.65.74.24 1.42.2 1.95.12.59-.09 1.84-.75 2.1-1.48.26-.73.26-1.35.18-1.48-.08-.13-.28-.2-.59-.36Z" />
            </svg>
          </a>
        </MotionProvider>
      </body>
    </html>
  );
}
