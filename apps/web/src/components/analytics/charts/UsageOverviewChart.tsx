import { AnalyticsEmptyState } from "../AnalyticsEmptyState";

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

import type { AnalyticsDataPoint } from "./types";

interface UsageOverviewChartProps {
  data: AnalyticsDataPoint[];
}

export function UsageOverviewChart({
  data,
}: UsageOverviewChartProps) {
  if (data.length === 0) {
    return (
      <AnalyticsEmptyState
        title="No usage data available"
        description="Usage activity will appear here once your tools receive activity."
      />
    );
  }

  const total = getAnalyticsTotal(data);
  const maxValue = getAnalyticsMaxValue(data);

  return (
    <AnalyticsChartCard title="Usage Overview">
      <AnalyticsChartHeader
        title="Usage Overview"
        description="Tool activity across the selected period"
      />

      <AnalyticsChartSummary
        label="Total Usage"
        value={formatAnalyticsValue(total)}
      />

      <AnalyticsChartLegend
        label="Usage"
        description="Tool activity"
      />

      <div
        className="space-y-4"
        role="list"
        aria-label="Usage activity by period"
      >
        {data.map((point) => (
          <AnalyticsChartRow
            key={point.label}
            label={point.label}
            value={point.value}
            maxValue={maxValue}
            ariaLabel={`${point.label} usage`}
          />
        ))}
      </div>
    </AnalyticsChartCard>
  );
}