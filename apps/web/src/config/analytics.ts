import type {
  AnalyticsDataPoint,
  AnalyticsTrend,
  AnalyticsTrendPoint,
} from "../components/analytics/charts";

export interface AnalyticsMetric {
  id: string;
  title: string;
  value: string;
  description: string;
  change: string;
  changeType: "positive" | "negative" | "neutral";
}

export const analyticsMetrics: AnalyticsMetric[] = [
  {
    id: "total-usage",
    title: "Total Usage",
    value: "12,480",
    description: "Tool executions this month",
    change: "+12.4%",
    changeType: "positive",
  },
  {
    id: "active-users",
    title: "Active Users",
    value: "2,840",
    description: "Users active this month",
    change: "+8.2%",
    changeType: "positive",
  },
  {
    id: "projects-created",
    title: "Projects Created",
    value: "486",
    description: "New projects this month",
    change: "+15.6%",
    changeType: "positive",
  },
  {
    id: "credits-used",
    title: "Credits Used",
    value: "68.4K",
    description: "Credits consumed this month",
    change: "-2.1%",
    changeType: "negative",
  },
];

export const analyticsMetrics7d: AnalyticsMetric[] = [
  {
    id: "total-usage",
    title: "Total Usage",
    value: "3,420",
    description: "Tool executions this week",
    change: "+6.8%",
    changeType: "positive",
  },
  {
    id: "active-users",
    title: "Active Users",
    value: "842",
    description: "Users active this week",
    change: "+4.5%",
    changeType: "positive",
  },
  {
    id: "projects-created",
    title: "Projects Created",
    value: "96",
    description: "New projects this week",
    change: "+9.2%",
    changeType: "positive",
  },
  {
    id: "credits-used",
    title: "Credits Used",
    value: "18.2K",
    description: "Credits consumed this week",
    change: "-1.4%",
    changeType: "negative",
  },
];

export const analyticsMetrics30d: AnalyticsMetric[] = [
  ...analyticsMetrics,
];

export const analyticsMetrics90d: AnalyticsMetric[] = [
  {
    id: "total-usage",
    title: "Total Usage",
    value: "34,860",
    description: "Tool executions in 90 days",
    change: "+18.6%",
    changeType: "positive",
  },
  {
    id: "active-users",
    title: "Active Users",
    value: "6,420",
    description: "Users active in 90 days",
    change: "+14.2%",
    changeType: "positive",
  },
  {
    id: "projects-created",
    title: "Projects Created",
    value: "1,284",
    description: "New projects in 90 days",
    change: "+21.8%",
    changeType: "positive",
  },
  {
    id: "credits-used",
    title: "Credits Used",
    value: "184.6K",
    description: "Credits consumed in 90 days",
    change: "-4.8%",
    changeType: "negative",
  },
];

export const analyticsMetrics6m: AnalyticsMetric[] = [
  {
    id: "total-usage",
    title: "Total Usage",
    value: "68,420",
    description: "Tool executions in 6 months",
    change: "+32.4%",
    changeType: "positive",
  },
  {
    id: "active-users",
    title: "Active Users",
    value: "12,840",
    description: "Users active in 6 months",
    change: "+28.2%",
    changeType: "positive",
  },
  {
    id: "projects-created",
    title: "Projects Created",
    value: "2,486",
    description: "New projects in 6 months",
    change: "+35.6%",
    changeType: "positive",
  },
  {
    id: "credits-used",
    title: "Credits Used",
    value: "368.4K",
    description: "Credits consumed in 6 months",
    change: "-8.1%",
    changeType: "negative",
  },
];

export const analyticsMetrics1y: AnalyticsMetric[] = [
  {
    id: "total-usage",
    title: "Total Usage",
    value: "148,420",
    description: "Tool executions this year",
    change: "+48.4%",
    changeType: "positive",
  },
  {
    id: "active-users",
    title: "Active Users",
    value: "28,840",
    description: "Users active this year",
    change: "+42.2%",
    changeType: "positive",
  },
  {
    id: "projects-created",
    title: "Projects Created",
    value: "6,486",
    description: "New projects this year",
    change: "+55.6%",
    changeType: "positive",
  },
  {
    id: "credits-used",
    title: "Credits Used",
    value: "868.4K",
    description: "Credits consumed this year",
    change: "-12.1%",
    changeType: "negative",
  },
];

export const usageAnalytics: AnalyticsDataPoint[] = [
  { label: "Mon", value: 420 },
  { label: "Tue", value: 680 },
  { label: "Wed", value: 540 },
  { label: "Thu", value: 820 },
  { label: "Fri", value: 760 },
  { label: "Sat", value: 940 },
  { label: "Sun", value: 880 },
];

export const usageAnalytics30d: AnalyticsDataPoint[] = [
  { label: "Week 1", value: 2840 },
  { label: "Week 2", value: 3460 },
  { label: "Week 3", value: 2980 },
  { label: "Week 4", value: 3200 },
];

export const usageAnalytics90d: AnalyticsDataPoint[] = [
  { label: "Month 1", value: 8200 },
  { label: "Month 2", value: 9400 },
  { label: "Month 3", value: 10800 },
];

export const usageAnalytics6m: AnalyticsDataPoint[] = [
  { label: "Jan", value: 8200 },
  { label: "Feb", value: 9400 },
  { label: "Mar", value: 10800 },
  { label: "Apr", value: 12400 },
  { label: "May", value: 14200 },
  { label: "Jun", value: 16800 },
];

export const usageAnalytics1y: AnalyticsDataPoint[] = [
  { label: "Jan", value: 8200 },
  { label: "Feb", value: 9400 },
  { label: "Mar", value: 10800 },
  { label: "Apr", value: 12400 },
  { label: "May", value: 14200 },
  { label: "Jun", value: 16800 },
  { label: "Jul", value: 18200 },
  { label: "Aug", value: 19600 },
  { label: "Sep", value: 21400 },
  { label: "Oct", value: 23800 },
  { label: "Nov", value: 26400 },
  { label: "Dec", value: 29800 },
];

export const projectAnalytics: AnalyticsDataPoint[] = [
  { label: "Jan", value: 120 },
  { label: "Feb", value: 180 },
  { label: "Mar", value: 240 },
  { label: "Apr", value: 310 },
  { label: "May", value: 390 },
  { label: "Jun", value: 486 },
];

export const projectAnalytics90d: AnalyticsDataPoint[] = [
  { label: "Jan", value: 120 },
  { label: "Feb", value: 180 },
  { label: "Mar", value: 240 },
];

export const projectAnalytics6m: AnalyticsDataPoint[] = [
  { label: "Jan", value: 120 },
  { label: "Feb", value: 180 },
  { label: "Mar", value: 240 },
  { label: "Apr", value: 310 },
  { label: "May", value: 390 },
  { label: "Jun", value: 486 },
];

export const projectAnalytics1y: AnalyticsDataPoint[] = [
  { label: "Jan", value: 120 },
  { label: "Feb", value: 180 },
  { label: "Mar", value: 240 },
  { label: "Apr", value: 310 },
  { label: "May", value: 390 },
  { label: "Jun", value: 486 },
  { label: "Jul", value: 520 },
  { label: "Aug", value: 580 },
  { label: "Sep", value: 640 },
  { label: "Oct", value: 710 },
  { label: "Nov", value: 780 },
  { label: "Dec", value: 860 },
];

export const usageTrendData: AnalyticsTrendPoint[] = [
  { label: "Mon", value: 420, change: 4.2 },
  { label: "Tue", value: 680, change: 6.8 },
  { label: "Wed", value: 540, change: -2.4 },
  { label: "Thu", value: 820, change: 8.1 },
  { label: "Fri", value: 760, change: 5.6 },
  { label: "Sat", value: 940, change: 12.4 },
  { label: "Sun", value: 880, change: -1.8 },
];

export const projectsTrendData: AnalyticsTrendPoint[] = [
  { label: "Jan", value: 120, change: 3.4 },
  { label: "Feb", value: 180, change: 5.2 },
  { label: "Mar", value: 240, change: 8.6 },
  { label: "Apr", value: 310, change: 10.2 },
  { label: "May", value: 390, change: 12.8 },
  { label: "Jun", value: 486, change: 15.6 },
];

export const analyticsTrends: AnalyticsTrend[] = [
  {
    id: "usage-trend",
    label: "Usage Trend",
    value: "12,480",
    change: "+12.4%",
    changeType: "positive",
    data: usageTrendData,
  },
  {
    id: "projects-trend",
    label: "Projects Trend",
    value: "486",
    change: "+15.6%",
    changeType: "positive",
    data: projectsTrendData,
  },
];
export const analyticsTrends7d: AnalyticsTrend[] = [
  {
    id: "usage-trend",
    label: "Usage Trend",
    value: "3,420",
    change: "+6.8%",
    changeType: "positive",
    data: usageAnalytics,
  },
  {
    id: "projects-trend",
    label: "Projects Trend",
    value: "96",
    change: "+9.2%",
    changeType: "positive",
    data: projectAnalytics,
  },
];

export const analyticsTrends30d: AnalyticsTrend[] = [
  {
    id: "usage-trend",
    label: "Usage Trend",
    value: "12,480",
    change: "+12.4%",
    changeType: "positive",
    data: usageAnalytics30d,
  },
  {
    id: "projects-trend",
    label: "Projects Trend",
    value: "486",
    change: "+15.6%",
    changeType: "positive",
    data: projectAnalytics,
  },
];

export const analyticsTrends90d: AnalyticsTrend[] = [
  {
    id: "usage-trend",
    label: "Usage Trend",
    value: "34,860",
    change: "+18.6%",
    changeType: "positive",
    data: usageAnalytics90d,
  },
  {
    id: "projects-trend",
    label: "Projects Trend",
    value: "1,284",
    change: "+21.8%",
    changeType: "positive",
    data: projectAnalytics90d,
  },
];

export const analyticsTrends6m: AnalyticsTrend[] = [
  {
    id: "usage-trend",
    label: "Usage Trend",
    value: "68,420",
    change: "+32.4%",
    changeType: "positive",
    data: usageAnalytics6m,
  },
  {
    id: "projects-trend",
    label: "Projects Trend",
    value: "2,486",
    change: "+35.6%",
    changeType: "positive",
    data: projectAnalytics6m,
  },
];

export const analyticsTrends1y: AnalyticsTrend[] = [
  {
    id: "usage-trend",
    label: "Usage Trend",
    value: "148,420",
    change: "+48.4%",
    changeType: "positive",
    data: usageAnalytics1y,
  },
  {
    id: "projects-trend",
    label: "Projects Trend",
    value: "6,486",
    change: "+55.6%",
    changeType: "positive",
    data: projectAnalytics1y,
  },
];