interface InsightCalloutProps {
  children: React.ReactNode;
  icon?: string;
}

export function InsightCallout({ children, icon = "💡" }: InsightCalloutProps) {
  return (
    <aside className="my-8 flex gap-4 rounded-xl border border-gold/20 bg-gold/5 p-5">
      <span className="shrink-0 text-xl" aria-hidden="true">{icon}</span>
      <p className="prose-body m-0 text-text-primary">{children}</p>
    </aside>
  );
}
