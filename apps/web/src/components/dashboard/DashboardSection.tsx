import { ReactNode } from "react";

interface DashboardSectionProps {
  title: string;
  description?: string;
  children: ReactNode;
}

export function DashboardSection({
  title,
  description,
  children,
}: DashboardSectionProps) {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">
          {title}
        </h2>

        {description && (
          <p className="mt-2 text-slate-600">
            {description}
          </p>
        )}
      </div>

      {children}
    </section>
  );
}