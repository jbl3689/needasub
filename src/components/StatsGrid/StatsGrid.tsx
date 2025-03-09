"use client";

interface StatItemProps {
  label: string;
  value: string | number | React.ReactNode;
}

export function StatItem({ label, value }: StatItemProps) {
  return (
    <div>
      <p className="text-xs text-zinc-500">{label}</p>
      <p className="text-sm">{value}</p>
    </div>
  );
}

interface StatsGridProps {
  items: StatItemProps[];
  columns?: number;
}

export function StatsGrid({ items, columns = 2 }: StatsGridProps) {
  const gridClass =
    columns === 2
      ? "grid-cols-2"
      : columns === 3
      ? "grid-cols-3"
      : columns === 4
      ? "grid-cols-4"
      : "grid-cols-1";

  return (
    <div className={`grid ${gridClass} gap-5 my-5 px-5`}>
      {items.map((item, index) => (
        <StatItem key={index} label={item.label} value={item.value} />
      ))}
    </div>
  );
}
