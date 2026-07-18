interface AnalyticsChartSummaryProps {
  label: string;
  value: string;
}

export function AnalyticsChartSummary({
  label,
  value,
}: AnalyticsChartSummaryProps) {
  return (
    <div
      className="mb-6 rounded-xl bg-slate-50 p-4"
      aria-label={`${label}: ${value}`}
    >
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
        {label}
      </p>

      <p className="mt-1 text-2xl font-bold text-slate-900">
        {value}
      </p>
    </div>
  );
}