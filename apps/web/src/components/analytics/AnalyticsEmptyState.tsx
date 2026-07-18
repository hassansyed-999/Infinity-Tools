interface AnalyticsEmptyStateProps {
  title?: string;
  description?: string;
}

export function AnalyticsEmptyState({
  title = "No analytics data yet",
  description = "Analytics data will appear here once your platform starts receiving activity.",
}: AnalyticsEmptyStateProps) {
  return (
    <div className="flex min-h-64 items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-6 py-12 text-center">
      <div className="max-w-md">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-slate-200">
          <span
            aria-hidden="true"
            className="text-2xl font-bold text-slate-600"
          >
            —
          </span>
        </div>

        <h3 className="mt-5 text-lg font-bold text-slate-900">
          {title}
        </h3>

        <p className="mt-2 text-sm leading-6 text-slate-600">
          {description}
        </p>
      </div>
    </div>
  );
}