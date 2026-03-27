interface WordmarkProps {
  className?: string;
}

export function Wordmark({ className = "" }: WordmarkProps) {
  return (
    <span
      className={`font-accent text-lg font-bold uppercase tracking-wider ${className}`}
    >
      <span className="text-text-primary">Javier</span>{" "}
      <span className="text-gold">Milei</span>
    </span>
  );
}
