interface SectionHeadingProps {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
}

export function SectionHeading({ id, eyebrow, title, intro }: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">{eyebrow}</p>
      <h2 id={id} className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {intro ? <p className="mt-4 text-base leading-relaxed text-muted">{intro}</p> : null}
    </div>
  );
}
