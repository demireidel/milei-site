interface BeforeAfterPanelProps {
  type: "before" | "after";
  label?: string;
  value?: string;
  children?: React.ReactNode;
}

export function BeforeAfterPanel({
  type,
  label,
  value,
  children,
}: BeforeAfterPanelProps) {
  const panelClass = type === "before" ? "panel-before" : "panel-after";
  const valueColor = type === "before" ? "text-before" : "text-after";
  const defaultLabel = type === "before" ? "Antes" : "Ahora";

  return (
    <div className={panelClass}>
      <span
        className={`badge-text mb-1 ${
          type === "before" ? "!text-before" : "!text-after"
        }`}
      >
        {label ?? defaultLabel}
      </span>
      {value && (
        <span className={`stat-number ${valueColor}`}>{value}</span>
      )}
      {children && (
        <div className="prose-body mt-1">{children}</div>
      )}
    </div>
  );
}
