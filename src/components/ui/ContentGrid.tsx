interface ContentGridProps {
  cols?: 2 | 3 | 4;
  children: React.ReactNode;
  className?: string;
}

const colClasses: Record<number, string> = {
  2: "grid grid-cols-1 sm:grid-cols-2 gap-5",
  3: "grid grid-cols-2 md:grid-cols-3 gap-5",
  4: "grid grid-cols-2 md:grid-cols-4 gap-4",
};

export function ContentGrid({ cols = 2, children, className }: ContentGridProps) {
  return (
    <div className={`${colClasses[cols]}${className ? ` ${className}` : ""}`}>
      {children}
    </div>
  );
}
