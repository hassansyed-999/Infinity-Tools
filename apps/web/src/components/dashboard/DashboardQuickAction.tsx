import { ReactNode } from "react";

interface DashboardQuickActionProps {
  title: string;
  description: string;
  icon?: ReactNode;
  onClick?: () => void;
}

export function DashboardQuickAction({
  title,
  description,
  icon,
  onClick,
}: DashboardQuickActionProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full rounded-3xl border border-slate-200 bg-white p-6 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
    >
      <div className="flex items-start gap-4">
        {icon && (
          <div className="rounded-2xl bg-slate-100 p-3">
            {icon}
          </div>
        )}

        <div>
          <h3 className="text-lg font-bold text-slate-900">
            {title}
          </h3>

          <p className="mt-2 text-sm text-slate-600">
            {description}
          </p>
        </div>
      </div>
    </button>
  );
}