import type { ReactNode } from "react";

interface AnalyticsChartGridProps {
  children: ReactNode;
}

export function AnalyticsChartGrid({
  children,
}: AnalyticsChartGridProps) {
  return (
    <div className="grid gap-6 xl:grid-cols-2">
      {children}
    </div>
  );
}