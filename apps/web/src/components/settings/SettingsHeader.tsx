interface SettingsHeaderProps {
  title?: string;
  description?: string;
}

export function SettingsHeader({
  title = "Settings",
  description = "Manage your account and application preferences.",
}: SettingsHeaderProps) {
  return (
    <header className="space-y-2">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900">
        {title}
      </h1>

      <p className="text-slate-500">
        {description}
      </p>
    </header>
  );
}