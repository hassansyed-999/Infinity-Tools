import { AnalyticsChartCard } from "./AnalyticsChartCard";
import { AnalyticsChartHeader } from "./AnalyticsChartHeader";
import { AnalyticsChartLegend } from "./AnalyticsChartLegend";
import { AnalyticsChartRow } from "./AnalyticsChartRow";
import { AnalyticsChartSummary } from "./AnalyticsChartSummary";
import {
  formatAnalyticsValue,
  getAnalyticsMaxValue,
  getAnalyticsTotal,
} from "./chartUtils";

import type { AnalyticsTrend } from "./types";

interface AnalyticsTrendChartProps {
  trend: AnalyticsTrend;
}

export function AnalyticsTrendChart({
  trend,
}: AnalyticsTrendChartProps) {
  const hasData = trend.data.length > 0;
  const total = getAnalyticsTotal(trend.data);
  const maxValue = getAnalyticsMaxValue(trend.data);

  return (
    <AnalyticsChartCard title={trend.label}>
      <AnalyticsChartHeader
        title={trend.label}
        description="Activity trend across the selected period"
      />

      <AnalyticsChartSummary
        label="Total"
        value={trend.value || formatAnalyticsValue(total)}
      />

      <AnalyticsChartLegend
        label="Trend"
        description={`${trend.change} compared with the previous period`}
      />

      {hasData ? (
        <div
          className="space-y-4"
          role="list"
          aria-label={`${trend.label} data`}
        >
          {trend.data.map((point) => (
            <AnalyticsChartRow
              key={point.label}
              label={point.label}
              value={point.value}
              maxValue={maxValue}
              ariaLabel={`${point.label} ${point.value}`}
            />
          ))}
        </div>
      ) : (
        <div
          className="flex min-h-32 items-center justify-center rounded-lg border border-dashed p-6 text-sm text-muted-foreground"
          role="status"
        >
          No trend data available for this period.
        </div>
      )}
    </AnalyticsChartCard>
  );
}