import Link from "next/link";

import {
  Breadcrumb,
  BreadcrumbItem,
} from "../dashboard/breadcrumb";

import type { AnalyticsDateRange } from "./AnalyticsDateFilter";

import { AnalyticsDateFilter } from "./AnalyticsDateFilter";

interface AnalyticsHeaderProps {
  dateRange: AnalyticsDateRange;
  onDateRangeChange: (value: AnalyticsDateRange) => void;
}

export function AnalyticsHeader({
  dateRange,
  onDateRangeChange,
}: AnalyticsHeaderProps) {
  return (
    <div className="space-y-6">
      <Breadcrumb>
        <BreadcrumbItem>
          <Link
            href="/dashboard"
            className="transition hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
          >
            Dashboard
          </Link>
        </BreadcrumbItem>

        <BreadcrumbItem current>
          Analytics
        </BreadcrumbItem>
      </Breadcrumb>

      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">
            Insights & Performance
          </p>

          <h1 className="mt-2 text-3xl font-black text-slate-900">
            Analytics
          </h1>

          <p className="mt-2 text-slate-600">
            Track your Infinity Tools activity and performance.
          </p>
        </div>

        <AnalyticsDateFilter
          value={dateRange}
          onChange={onDateRangeChange}
        />
      </div>
    </div>
  );
}