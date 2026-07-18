"use client";

import { useState } from "react";

import {
  AnalyticsChartGrid,
  AnalyticsHeader,
  AnalyticsMetricGrid,
  AnalyticsPageContainer,
  AnalyticsSection,
  AnalyticsTrendChart,
  useAnalyticsData,
} from "@/components/analytics";

import type { AnalyticsDateRange } from "@/components/analytics/AnalyticsDateFilter";

import {
  AnalyticsTrendChartSkeleton,
  MonthlyProjectsChart,
  UsageOverviewChart,
} from "@/components/analytics/charts";

export default function AnalyticsPage() {
  const [dateRange, setDateRange] =
    useState<AnalyticsDateRange>("30d");

  const [isLoading, setIsLoading] = useState(false);

  const analyticsData = useAnalyticsData(dateRange);

  const handleDateRangeChange = (
    range: AnalyticsDateRange,
  ) => {
    setIsLoading(true);
    setDateRange(range);

    window.setTimeout(() => {
      setIsLoading(false);
    }, 300);
  };

  return (
    <AnalyticsPageContainer>
      <AnalyticsHeader
        dateRange={dateRange}
        onDateRangeChange={handleDateRangeChange}
      />

      <AnalyticsSection
        title="Performance Overview"
        description="Monitor your platform performance and key metrics"
      >
        <AnalyticsMetricGrid
          metrics={analyticsData.metrics}
        />
      </AnalyticsSection>

      <AnalyticsSection
        title="Usage & Projects"
        description="Track usage and project activity across the selected period"
      >
        <AnalyticsChartGrid>
          <UsageOverviewChart
            data={analyticsData.usage}
          />

          <MonthlyProjectsChart
            data={analyticsData.projects}
          />
        </AnalyticsChartGrid>
      </AnalyticsSection>

      <AnalyticsSection
        title="Trends & Activity"
        description="Track usage and project activity over time"
      >
        <AnalyticsChartGrid>
          {isLoading
            ? analyticsData.trends.map((trend) => (
                <AnalyticsTrendChartSkeleton
                  key={trend.id}
                />
              ))
            : analyticsData.trends.map((trend) => (
                <AnalyticsTrendChart
                  key={trend.id}
                  trend={trend}
                />
              ))}
        </AnalyticsChartGrid>
      </AnalyticsSection>
    </AnalyticsPageContainer>
  );
}