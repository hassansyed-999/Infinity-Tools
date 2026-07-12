interface SectionHeaderProps {
  title: string;
  description?: string;
  action?: React.ReactNode;
}

export function SectionHeader({
  title,
  description,
  action,
}: SectionHeaderProps) {
  return (
    <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">
          {title}
        </h2>

        {description && (
          <p className="mt-1 text-slate-600">
            {description}
          </p>
        )}
      </div>

      {action && <div>{action}</div>}
    </div>
  );
}