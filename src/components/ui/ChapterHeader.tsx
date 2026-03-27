interface ChapterHeaderProps {
  numeral: string;
  title: string;
  subtitle?: string;
}

export function ChapterHeader({
  numeral,
  title,
  subtitle,
}: ChapterHeaderProps) {
  return (
    <div className="mb-6">
      <div className="mb-3 flex items-baseline gap-4">
        <span className="chapter-numeral">{numeral}</span>
        <h3 className="chapter-title">{title}</h3>
      </div>
      {subtitle && <p className="prose-body mb-10">{subtitle}</p>}
    </div>
  );
}
