import Link from 'next/link';
import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

type Variant = 'primary' | 'secondary' | 'ghost';

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  /** Opens in a new tab with safe rel attributes. */
  external?: boolean;
  /** Renders a plain download link (used for the CV PDF). */
  download?: boolean;
  size?: 'md' | 'sm';
  className?: string;
  ariaLabel?: string;
}

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors duration-200';

const sizes = { md: 'h-11 px-5 text-sm', sm: 'h-9 px-4 text-[13px]' } as const;

const variants: Record<Variant, string> = {
  primary: 'bg-brand-600 text-white hover:bg-brand-700',
  secondary: 'border border-line bg-navy-900/60 text-ink hover:border-brand-500/70 hover:bg-navy-800',
  ghost: 'text-muted hover:text-ink',
};

export function ButtonLink({
  href,
  children,
  variant = 'primary',
  external = false,
  download = false,
  size = 'md',
  className,
  ariaLabel,
}: ButtonLinkProps) {
  const classes = cn(base, sizes[size], variants[variant], className);

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes} aria-label={ariaLabel}>
        {children}
      </a>
    );
  }
  if (download) {
    return (
      <a href={href} download className={classes} aria-label={ariaLabel}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}
