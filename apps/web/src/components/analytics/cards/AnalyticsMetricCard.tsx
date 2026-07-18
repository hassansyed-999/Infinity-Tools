import type { LucideIcon } from "lucide-react";

interface AnalyticsMetricCardProps {
  title: string;
  value: string;
  description: string;
  change: string;
  changeType: "positive" | "negative" | "neutral";
  icon: LucideIcon;
}

const iconStyles = {
  "Total Usage": {
    wrapper: "bg-blue-50",
    icon: "text-blue-600",
  },
  "Active Users": {
    wrapper: "bg-violet-50",
    icon: "text-violet-600",
  },
  "Projects Created": {
    wrapper: "bg-emerald-50",
    icon: "text-emerald-600",
  },
  "Credits Used": {
    wrapper: "bg-amber-50",
    icon: "text-amber-600",
  },
} as const;

export function AnalyticsMetricCard({
  title,
  value,
  description,
  change,
  changeType,
  icon: Icon,
}: AnalyticsMetricCardProps) {
  const style = iconStyles[title as keyof typeof iconStyles] ?? {
    wrapper: "bg-slate-100",
    icon: "text-slate-600",
  };

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">
            {title}
          </p>

          <h2 className="mt-3 text-3xl font-black text-slate-900">
            {value}
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            {description}
          </p>
        </div>

        <div className={`rounded-2xl p-3 ${style.wrapper}`}>
          <Icon
            size={24}
            strokeWidth={2}
            className={style.icon}
            aria-hidden="true"
          />
        </div>
      </div>

      <p
        className={`mt-5 text-sm font-semibold ${
          changeType === "positive"
            ? "text-emerald-600"
            : changeType === "negative"
              ? "text-red-600"
              : "text-slate-500"
        }`}
      >
        {change} from last month
      </p>
    </div>
  );
}