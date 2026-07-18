export interface AnalyticsDataPoint {
  label: string;
  value: number;
}

export interface AnalyticsTrendPoint {
  label: string;
  value: number;
  change?: number;
}

export interface AnalyticsTrend {
  id: string;
  label: string;
  value: string;
  change: string;
  changeType: "positive" | "negative" | "neutral";
  data: AnalyticsTrendPoint[];
}