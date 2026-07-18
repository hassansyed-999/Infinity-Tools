"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Bell,
  Settings,
  UserRound,
} from "lucide-react";

const settingsNavigationItems = [
  {
    href: "/settings",
    label: "General",
    description: "Manage general application preferences.",
    icon: Settings,
    iconClassName: "text-blue-600",
    iconBackground: "bg-blue-50",
  },
  {
    href: "/settings/account",
    label: "Account",
    description: "Manage your account information.",
    icon: UserRound,
    iconClassName: "text-violet-600",
    iconBackground: "bg-violet-50",
  },
  {
    href: "/settings/notifications",
    label: "Notifications",
    description: "Control your notification preferences.",
    icon: Bell,
    iconClassName: "text-amber-600",
    iconBackground: "bg-amber-50",
  },
];

export function SettingsNavigation() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Settings navigation"
      className="grid gap-3 md:grid-cols-3"
    >
      {settingsNavigationItems.map((item) => {
        const Icon = item.icon;

        const isActive =
          item.href === "/settings"
            ? pathname === "/settings"
            : pathname.startsWith(item.href);

        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={isActive ? "page" : undefined}
            className={[
              "group rounded-2xl border p-4 transition-all",
              isActive
                ? "border-slate-300 bg-slate-50 shadow-sm"
                : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50",
            ].join(" ")}
          >
            <div className="flex items-start gap-3">
              <div
                className={`rounded-xl p-2.5 ${item.iconBackground}`}
              >
                <Icon
                  className={`h-5 w-5 ${item.iconClassName}`}
                  aria-hidden="true"
                />
              </div>

              <div className="min-w-0">
                <p className="font-semibold text-slate-900">
                  {item.label}
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  {item.description}
                </p>
              </div>
            </div>
          </Link>
        );
      })}
    </nav>
  );
}