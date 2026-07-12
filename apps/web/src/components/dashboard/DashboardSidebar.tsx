"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { dashboardNavigation } from "../../config/navigation";
import { Logo } from "../Logo";

export function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-72 border-r border-slate-200 bg-white lg:flex lg:flex-col">
      {/* Logo */}
      <div className="border-b border-slate-200 p-6">
        <Logo />
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto p-4">
        <div className="space-y-8">
          {dashboardNavigation.map((section) => (
            <div key={section.title}>
              <h2 className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
                {section.title}
              </h2>

              <div className="space-y-1">
                {section.items.map((item) => {
                  const Icon = item.icon;
                  const active = pathname === item.href;

                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                        active
                          ? "bg-blue-50 text-blue-700"
                          : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                      }`}
                    >
                      <Icon size={18} />

                      <span>{item.name}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </nav>

      {/* Footer */}
      <div className="border-t border-slate-200 p-4">
        <p className="text-center text-xs text-slate-500">
          Infinity Tools v0.1.0
        </p>
      </div>
    </aside>
  );
}