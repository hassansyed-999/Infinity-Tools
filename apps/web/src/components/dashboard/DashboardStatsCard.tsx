import { ReactNode } from "react";

interface DashboardStatsCardProps {
  title: string;
  value: string;
  description?: string;
  icon?: ReactNode;
  trend?: string;
  trendPositive?: boolean;
}

export function DashboardStatsCard({
  title,
  value,
  description,
  icon,
  trend,
  trendPositive = true,
}: DashboardStatsCardProps) {
  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-6
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-blue-200
        hover:shadow-xl
      "
    >
      {/* Top Row */}

      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-semibold tracking-wide text-slate-500">
            {title}
          </p>

          <h3 className="mt-3 text-4xl font-black tracking-tight text-slate-900">
            {value}
          </h3>

          {description && (
            <p className="mt-2 text-sm text-slate-500">
              {description}
            </p>
          )}
        </div>

        {icon && (
          <div
            className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-2xl
              bg-blue-50
              text-blue-600
              transition-all
              duration-300
              group-hover:scale-110
              group-hover:bg-blue-100
            "
          >
            {icon}
          </div>
        )}
      </div>

      {/* Bottom Row */}

      <div className="mt-6 flex items-center justify-between">
        <span className="text-xs text-slate-400">
          Updated just now
        </span>

        {trend && (
          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold ${
              trendPositive
                ? "bg-emerald-100 text-emerald-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {trendPositive ? "▲" : "▼"} {trend}
          </span>
        )}
      </div>

      {/* Hover Accent */}

      <div
        className="
          absolute
          bottom-0
          left-0
          h-1
          w-0
          bg-blue-600
          transition-all
          duration-300
          group-hover:w-full
        "
      />
    </div>
  );
}