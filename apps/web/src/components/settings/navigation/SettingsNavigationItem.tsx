import Link from "next/link";

interface SettingsNavigationItemProps {
  href: string;
  label: string;
  description: string;
  active?: boolean;
}

export function SettingsNavigationItem({
  href,
  label,
  description,
  active = false,
}: SettingsNavigationItemProps) {
  return (
    <Link
      href={href}
      className={[
        "block rounded-xl border p-4 transition-colors",
        active
          ? "border-slate-900 bg-slate-50"
          : "hover:bg-slate-50",
      ].join(" ")}
    >
      <div className="font-medium">
        {label}
      </div>

      <div className="mt-1 text-sm text-muted-foreground">
        {description}
      </div>
    </Link>
  );
}