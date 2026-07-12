import { Bell, Search, Settings } from "lucide-react";

export function DashboardTopbar() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-6">
      {/* Left */}
      <div>
        <h1 className="text-xl font-bold text-slate-900">
          Dashboard
        </h1>

        <p className="text-sm text-slate-500">
          Welcome to Infinity Tools
        </p>
      </div>

      {/* Right */}
      <div className="flex items-center gap-3">
        <button
          className="rounded-xl border border-slate-200 p-2 text-slate-600 transition-colors hover:bg-slate-100"
          aria-label="Search"
        >
          <Search size={18} />
        </button>

        <button
          className="rounded-xl border border-slate-200 p-2 text-slate-600 transition-colors hover:bg-slate-100"
          aria-label="Notifications"
        >
          <Bell size={18} />
        </button>

        <button
          className="rounded-xl border border-slate-200 p-2 text-slate-600 transition-colors hover:bg-slate-100"
          aria-label="Settings"
        >
          <Settings size={18} />
        </button>

        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
          IT
        </div>
      </div>
    </header>
  );
}