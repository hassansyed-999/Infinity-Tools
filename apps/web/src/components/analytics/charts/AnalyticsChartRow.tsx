import { formatAnalyticsValue } from "./chartUtils";

interface AnalyticsChartRowProps {
  label: string;
  value: number;
  maxValue: number;
  ariaLabel: string;
}

export function AnalyticsChartRow({
  label,
  value,
  maxValue,
  ariaLabel,
}: AnalyticsChartRowProps) {
  const percentage =
    maxValue > 0 ? (value / maxValue) * 100 : 0;

  return (
    <div
      className="flex items-center justify-between gap-4"
      role="listitem"
    >
      <span className="w-16 text-sm font-medium text-slate-600">
        {label}
      </span>

      <div className="flex flex-1 items-center gap-3">
        <div
          className="h-3 flex-1 overflow-hidden rounded-full bg-slate-100"
          role="progressbar"
          aria-label={ariaLabel}
          aria-valuemin={0}
          aria-valuemax={maxValue}
          aria-valuenow={value}
        >
          <div
            className="h-full rounded-full bg-slate-900 transition-all duration-500"
            style={{
              width: `${percentage}%`,
            }}
          />
        </div>

        <span className="w-20 text-right text-sm font-semibold text-slate-900">
          {formatAnalyticsValue(value)}
        </span>
      </div>
    </div>
  );
}