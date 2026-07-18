import type { AnalyticsDataPoint } from "./types";

export function getAnalyticsTotal(
  data: AnalyticsDataPoint[],
): number {
  return data.reduce((sum, point) => sum + point.value, 0);
}

export function getAnalyticsMaxValue(
  data: AnalyticsDataPoint[],
): number {
  return Math.max(...data.map((point) => point.value), 0);
}

export function getAnalyticsPercentage(
  value: number,
  maxValue: number,
): number {
  if (maxValue <= 0) {
    return 0;
  }

  return (value / maxValue) * 100;
}

export function formatAnalyticsValue(
  value: number,
): string {
  return new Intl.NumberFormat("en-US", {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(value);
}