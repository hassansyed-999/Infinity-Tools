import { ReactNode } from "react";

interface SidebarProps {
  children: ReactNode;
}

export function Sidebar({
  children,
}: SidebarProps) {
  return (
    <aside
      className="
        flex
        h-full
        w-72
        flex-col
        border-r
        border-slate-200
        bg-white
      "
    >
      {/* Logo */}

      <div className="flex h-20 items-center border-b border-slate-200 px-6">
        <div>
          <h1 className="text-xl font-black tracking-tight text-slate-900">
            Infinity Tools
          </h1>

          <p className="mt-1 text-xs text-slate-500">
            AI Workspace
          </p>
        </div>
      </div>

      {/* Navigation */}

      <nav className="flex-1 overflow-y-auto px-4 py-6">
        <div className="space-y-2">
          {children}
        </div>
      </nav>
    </aside>
  );
}