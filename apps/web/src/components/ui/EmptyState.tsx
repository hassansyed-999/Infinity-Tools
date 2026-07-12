import { ReactNode } from "react";

interface EmptyStateProps {
  title: string;
  description: string;
  icon?: ReactNode;
  action?: ReactNode;
}

export function EmptyState({
  title,
  description,
  icon,
  action,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-slate-300 bg-slate-50 px-8 py-16 text-center">
      {icon && (
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm">
          {icon}
        </div>
      )}

      <h3 className="text-xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-3 max-w-md text-slate-600">
        {description}
      </p>

      {action && (
        <div className="mt-8">
          {action}
        </div>
      )}
    </div>
  );
}