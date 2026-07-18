import type { ReactNode } from "react";

interface AnalyticsChartCardProps {
  title: string;
  children: ReactNode;
}

export function AnalyticsChartCard({
  title,
  children,
}: AnalyticsChartCardProps) {
  return (
    <section
      className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
      aria-labelledby={`analytics-chart-${title
        .toLowerCase()
        .replace(/\s+/g, "-")}`}
    >
      <h2
        id={`analytics-chart-${title
          .toLowerCase()
          .replace(/\s+/g, "-")}`}
        className="sr-only"
      >
        {title}
      </h2>

      {children}
    </section>
  );
}