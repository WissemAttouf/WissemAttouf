import Image from 'next/image';
import { Globe, Server, Smartphone, type LucideIcon } from 'lucide-react';
import type { ProjectCategory } from '@/data/projects';
import { cn } from '@/lib/cn';

interface ProjectVisualProps {
  title: string;
  category: ProjectCategory;
  image: { src: string; alt: string } | null;
  priority?: boolean;
  sizes?: string;
  className?: string;
}

const icons: Record<ProjectCategory, LucideIcon> = { mobile: Smartphone, web: Globe, backend: Server };

/**
 * Shows the real screenshot when one is configured. Otherwise it draws a neutral,
 * clearly decorative frame (never a fake screenshot) so layouts stay stable.
 */
export function ProjectVisual({ title, category, image, priority = false, sizes, className }: ProjectVisualProps) {
  const Icon = icons[category];
  return (
    <div className={cn('relative aspect-[16/10] w-full overflow-hidden bg-navy-950', className)}>
      {image ? (
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority={priority}
          sizes={sizes ?? '(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw'}
          className="object-cover object-top"
        />
      ) : (
        <div aria-hidden="true" className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950">
          <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(#94A3B8_1px,transparent_1px),linear-gradient(90deg,#94A3B8_1px,transparent_1px)] [background-size:28px_28px]" />
          {category === 'mobile' ? (
            <div className="relative flex h-[78%] w-[26%] min-w-[84px] flex-col items-center rounded-[1.4rem] border border-line bg-navy-950/80 p-2 shadow-card">
              <span className="mt-1 h-1 w-8 rounded-full bg-line" />
              <span className="flex flex-1 items-center justify-center">
                <Icon className="h-8 w-8 text-accent/80" />
              </span>
            </div>
          ) : (
            <div className="relative flex h-[72%] w-[62%] flex-col overflow-hidden rounded-xl border border-line bg-navy-950/80 shadow-card">
              <div className="flex items-center gap-1.5 border-b border-line px-3 py-2">
                <span className="h-2 w-2 rounded-full bg-line" />
                <span className="h-2 w-2 rounded-full bg-line" />
                <span className="h-2 w-2 rounded-full bg-line" />
              </div>
              <div className="flex flex-1 items-center justify-center">
                <Icon className="h-9 w-9 text-accent/80" />
              </div>
            </div>
          )}
          <span className="sr-only">{title}</span>
        </div>
      )}
    </div>
  );
}
