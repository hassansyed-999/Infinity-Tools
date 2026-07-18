"use client";

import { useMemo } from "react";

import {
  analyticsMetrics,
  analyticsMetrics1y,
  analyticsMetrics30d,
  analyticsMetrics6m,
  analyticsMetrics7d,
  analyticsMetrics90d,
  analyticsTrends1y,
  analyticsTrends30d,
  analyticsTrends6m,
  analyticsTrends7d,
  analyticsTrends90d,
  projectAnalytics,
  projectAnalytics1y,
  projectAnalytics6m,
  projectAnalytics90d,
  usageAnalytics,
  usageAnalytics1y,
  usageAnalytics30d,
  usageAnalytics6m,
  usageAnalytics90d,
} from "../../config/analytics";

import type { AnalyticsMetric } from "../../config/analytics";
import type { AnalyticsDataPoint, AnalyticsTrend } from "./charts";
import type { AnalyticsDateRange } from "./AnalyticsDateFilter";

export interface AnalyticsData {
  metrics: AnalyticsMetric[];
  usage: AnalyticsDataPoint[];
  projects: AnalyticsDataPoint[];
  trends: AnalyticsTrend[];
}

export function useAnalyticsData(
  dateRange: AnalyticsDateRange,
): AnalyticsData {
  return useMemo(() => {
    switch (dateRange) {
      case "7d":
        return {
          metrics: analyticsMetrics7d,
          usage: usageAnalytics,
          projects: projectAnalytics,
          trends: analyticsTrends7d,
        };

      case "30d":
        return {
          metrics: analyticsMetrics30d,
          usage: usageAnalytics30d,
          projects: projectAnalytics,
          trends: analyticsTrends30d,
        };

      case "90d":
        return {
          metrics: analyticsMetrics90d,
          usage: usageAnalytics90d,
          projects: projectAnalytics90d,
          trends: analyticsTrends90d,
        };

      case "6m":
        return {
          metrics: analyticsMetrics6m,
          usage: usageAnalytics6m,
          projects: projectAnalytics6m,
          trends: analyticsTrends6m,
        };

      case "1y":
        return {
          metrics: analyticsMetrics1y,
          usage: usageAnalytics1y,
          projects: projectAnalytics1y,
          trends: analyticsTrends1y,
        };

      default:
        return {
          metrics: analyticsMetrics,
          usage: usageAnalytics30d,
          projects: projectAnalytics,
          trends: analyticsTrends30d,
        };
    }
  }, [dateRange]);
}