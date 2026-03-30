interface WordmarkProps {
  className?: string;
  light?: boolean;
}

export function Wordmark({ className = "", light }: WordmarkProps) {
  return (
    <span
      className={`font-accent text-lg font-bold uppercase tracking-wider ${className}`}
    >
      <span className={light ? "text-white" : "text-text-primary"}>Javier</span>{" "}
      <span className="text-gold">Milei</span>
    </span>
  );
}
