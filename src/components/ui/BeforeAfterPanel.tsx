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
  const valueColor = type === "before" ? "text-danger" : "text-success";
  const defaultLabel = type === "before" ? "Antes" : "Ahora";

  return (
    <div className={panelClass}>
      <span
        className={`badge-text mb-1 flex items-center gap-1 ${
          type === "before" ? "!text-danger" : "!text-success"
        }`}
      >
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="currentColor"
          aria-hidden="true"
          className={type === "before" ? "rotate-180" : ""}
        >
          <path d="M5 1l4 8H1z" />
        </svg>
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
