interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-12 section-accent">
      <h2 className="text-3xl font-bold text-[var(--fg-primary)]">{title}</h2>
      {subtitle && (
        <p className="mt-2 text-[var(--fg-secondary)]">{subtitle}</p>
      )}
    </div>
  );
}
