interface ContainerProps {
  children: React.ReactNode;
  wide?: boolean;
  className?: string;
}

export function Container({
  children,
  wide = false,
  className = "",
}: ContainerProps) {
  // Avoid !important — use conditional class for max-width
  const maxW = wide
    ? "max-w-[96rem]"
    : "max-w-[var(--width-content)]";

  return (
    <div className={`mx-auto ${maxW} px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}
