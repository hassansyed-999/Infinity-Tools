import { ReactNode } from "react";

interface DashboardStatsCardProps {
  title: string;
  value: string;
  description?: string;
  icon?: ReactNode;
}

export function DashboardStatsCard({
  title,
  value,
  description,
  icon,
}: DashboardStatsCardProps) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">
            {title}
          </p>

          <h3 className="mt-2 text-3xl font-black text-slate-900">
            {value}
          </h3>

          {description && (
            <p className="mt-2 text-sm text-slate-600">
              {description}
            </p>
          )}
        </div>

        {icon && (
          <div className="rounded-2xl bg-slate-100 p-3">
            {icon}
          </div>
        )}
      </div>
    </div>
  );
}