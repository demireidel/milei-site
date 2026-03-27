interface StatCardProps {
  value: string;
  label: string;
  className?: string;
}

export function StatCard({ value, label, className = "" }: StatCardProps) {
  return (
    <div className={`text-center ${className}`}>
      <span className="stat-number">{value}</span>
      <span className="stat-label mt-1 block">{label}</span>
    </div>
  );
}
