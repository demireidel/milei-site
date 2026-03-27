interface SectionKickerProps {
  children: React.ReactNode;
  color?: "gold" | "celeste";
}

export function SectionKicker({ children, color = "gold" }: SectionKickerProps) {
  return (
    <p
      className="section-kicker"
      style={color === "celeste" ? { color: "var(--color-celeste)" } : undefined}
    >
      {children}
    </p>
  );
}
