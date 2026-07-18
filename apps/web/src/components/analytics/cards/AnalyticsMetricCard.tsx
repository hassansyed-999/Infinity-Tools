import { LucideIcon } from "lucide-react";

interface AnalyticsMetricCardProps {
  title: string;
  value: string;
  description: string;
  change: string;
  changeType: "positive" | "negative" | "neutral";
  icon: LucideIcon;
}

export function AnalyticsMetricCard({
  title,
  value,
  description,
  change,
  changeType,
  icon: Icon,
}: AnalyticsMetricCardProps) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
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

        <div className="rounded-2xl bg-slate-100 p-3">
          <Icon size={24} />
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