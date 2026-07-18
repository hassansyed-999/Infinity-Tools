"use client";

export type AnalyticsDateRange =
  | "7d"
  | "30d"
  | "90d"
  | "6m"
  | "1y";

interface AnalyticsDateFilterProps {
  value: AnalyticsDateRange;
  onChange: (value: AnalyticsDateRange) => void;
}

const dateRanges: {
  label: string;
  value: AnalyticsDateRange;
}[] = [
  {
    label: "Last 7 days",
    value: "7d",
  },
  {
    label: "Last 30 days",
    value: "30d",
  },
  {
    label: "Last 90 days",
    value: "90d",
  },
  {
    label: "Last 6 months",
    value: "6m",
  },
  {
    label: "Last year",
    value: "1y",
  },
];

export function AnalyticsDateFilter({
  value,
  onChange,
}: AnalyticsDateFilterProps) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor="analytics-date-range"
        className="text-sm font-semibold text-slate-700"
      >
        Date range
      </label>

      <select
        id="analytics-date-range"
        name="analytics-date-range"
        value={value}
        onChange={(event) =>
          onChange(event.target.value as AnalyticsDateRange)
        }
        aria-label="Select analytics date range"
        className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-medium text-slate-900 outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-200"
      >
        {dateRanges.map((range) => (
          <option
            key={range.value}
            value={range.value}
          >
            {range.label}
          </option>
        ))}
      </select>
    </div>
  );
}