import Image from 'next/image';
import { ArrowRight, Download, MapPin } from 'lucide-react';
import { site } from '@/data/site';
import type { Dictionary } from '@/data/i18n/types';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { GithubIcon, LinkedinIcon } from '@/components/ui/Icons';

interface HeroProps {
  dict: Dictionary;
  cvHref: string | null;
}

const socialLink =
  'inline-flex h-11 w-11 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-brand-500/70 hover:text-ink';

export function Hero({ dict, cvHref }: HeroProps) {
  const { hero } = dict;
  return (
    <section id="home" aria-labelledby="hero-title" className="hero-glow relative overflow-hidden pt-28 sm:pt-32 lg:pt-36">
      <div className="container-page grid items-center gap-12 pb-20 lg:grid-cols-12 lg:gap-8 lg:pb-28">
        <div className="lg:col-span-7">
          <p className="inline-flex items-center rounded-full border border-line bg-navy-900/60 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-slate-200">
            {hero.role}
          </p>
          <h1
            id="hero-title"
            className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]"
          >
            {hero.headingLead} <span className="text-gradient">{hero.headingAccent}</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">{hero.text}</p>

          <p className="mt-6 flex items-center gap-2 text-sm text-slate-300">
            <MapPin className="h-4 w-4 text-accent" aria-hidden="true" />
            {hero.location}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <ButtonLink href="#projects" variant="primary">
              {hero.ctaProjects}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
            {cvHref ? (
              <ButtonLink href={cvHref} variant="secondary" download>
                <Download className="h-4 w-4" aria-hidden="true" />
                {hero.ctaCv}
              </ButtonLink>
            ) : null}
            <ul aria-label={hero.socialLabel} className="ml-1 flex items-center gap-2.5">
              <li>
                <a href={site.github} target="_blank" rel="noopener noreferrer" aria-label={hero.github} className={socialLink}>
                  <GithubIcon className="h-[18px] w-[18px]" />
                </a>
              </li>
              <li>
                <a href={site.linkedin} target="_blank" rel="noopener noreferrer" aria-label={hero.linkedin} className={socialLink}>
                  <LinkedinIcon className="h-[18px] w-[18px]" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mx-auto w-full max-w-sm lg:col-span-5 lg:max-w-md lg:justify-self-end">
          <div className="relative">
            <div aria-hidden="true" className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-brand-500/25 via-transparent to-accent/20 blur-2xl" />
            <figure className="relative overflow-hidden rounded-[1.75rem] border border-line bg-navy-900 shadow-card">
              <div className="relative aspect-[4/5]">
                <Image
                  src={site.portrait.src}
                  alt={hero.portraitAlt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 28rem, (min-width: 640px) 24rem, 90vw"
                  className="object-cover object-top"
                />
              </div>
              <figcaption className="absolute inset-x-3 bottom-3 rounded-2xl border border-white/10 bg-navy-950/80 px-4 py-3 backdrop-blur-md">
                <p className="font-display text-base font-bold text-ink">{site.name}</p>
                <p className="text-xs text-slate-300">{hero.role}</p>
                <p className="mt-1 flex items-center gap-1.5 text-xs text-muted">
                  <MapPin className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
                  {hero.location}
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
