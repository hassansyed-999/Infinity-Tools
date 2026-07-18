import { ReactNode } from "react";

interface AppShellProps {
  sidebar: ReactNode;
  topbar: ReactNode;
  children: ReactNode;
}

export function AppShell({
  sidebar,
  topbar,
  children,
}: AppShellProps) {
  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Sidebar */}

      <aside className="hidden w-72 shrink-0 border-r border-slate-200 bg-white lg:block">
        {sidebar}
      </aside>

      {/* Main Area */}

      <div className="flex min-w-0 flex-1 flex-col">
        {/* Topbar */}

        <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur">
          {topbar}
        </header>

        {/* Page */}

        <main className="flex-1 overflow-y-auto p-8">
          {children}
        </main>
      </div>
    </div>
  );
}