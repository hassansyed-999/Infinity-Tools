interface AnalyticsChartLegendProps {
  label: string;
  description: string;
}

export function AnalyticsChartLegend({
  label,
  description,
}: AnalyticsChartLegendProps) {
  return (
    <div className="mb-4 flex items-center gap-2 text-xs text-slate-500">
      <span
        className="h-2.5 w-2.5 rounded-full bg-slate-900"
        aria-hidden="true"
      />

      <span className="font-medium text-slate-700">
        {label}
      </span>

      <span aria-hidden="true">·</span>

      <span>{description}</span>
    </div>
  );
}