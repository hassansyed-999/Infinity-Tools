interface AnalyticsChartHeaderProps {
  title: string;
  description: string;
}

export function AnalyticsChartHeader({
  title,
  description,
}: AnalyticsChartHeaderProps) {
  return (
    <div className="mb-6">
      <h3 className="text-base font-semibold text-slate-900">
        {title}
      </h3>

      <p className="mt-1 text-sm text-slate-500">
        {description}
      </p>
    </div>
  );
}