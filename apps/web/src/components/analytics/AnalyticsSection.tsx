import type { ReactNode } from "react";

interface AnalyticsSectionProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

export function AnalyticsSection({
  children,
  title,
  description,
}: AnalyticsSectionProps) {
  return (
    <section className="space-y-4">
      {(title || description) && (
        <div>
          {title && (
            <h2 className="text-xl font-bold text-slate-900">
              {title}
            </h2>
          )}

          {description && (
            <p className="mt-1 text-sm text-slate-600">
              {description}
            </p>
          )}
        </div>
      )}

      {children}
    </section>
  );
}