interface SectionKickerProps {
  children: React.ReactNode;
  color?: "gold" | "celeste";
}

export function SectionKicker({ children, color = "gold" }: SectionKickerProps) {
  return (
    <p
      className={`section-kicker${color === "celeste" ? " !text-celeste" : ""}`}
    >
      {children}
    </p>
  );
}
