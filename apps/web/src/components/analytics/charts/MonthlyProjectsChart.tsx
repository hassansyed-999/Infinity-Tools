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

interface MonthlyProjectsChartProps {
  data: AnalyticsDataPoint[];
}

export function MonthlyProjectsChart({
  data,
}: MonthlyProjectsChartProps) {
  if (data.length === 0) {
    return (
      <AnalyticsEmptyState
        title="No project data available"
        description="Project activity will appear here once projects are created."
      />
    );
  }

  const total = getAnalyticsTotal(data);
  const maxValue = getAnalyticsMaxValue(data);

  return (
    <AnalyticsChartCard title="Monthly Projects">
      <AnalyticsChartHeader
        title="Monthly Projects"
        description="Projects created across the selected period"
      />

      <AnalyticsChartSummary
        label="Total Projects"
        value={formatAnalyticsValue(total)}
      />

      <AnalyticsChartLegend
        label="Projects"
        description="Projects created"
      />

      <div
        className="space-y-4"
        role="list"
        aria-label="Projects created by period"
      >
        {data.map((point) => (
          <AnalyticsChartRow
            key={point.label}
            label={point.label}
            value={point.value}
            maxValue={maxValue}
            ariaLabel={`${point.label} projects`}
          />
        ))}
      </div>
    </AnalyticsChartCard>
  );
}