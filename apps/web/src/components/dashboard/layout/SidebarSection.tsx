import { ReactNode } from "react";

interface SidebarSectionProps {
  title: string;
  children: ReactNode;
}

export function SidebarSection({
  title,
  children,
}: SidebarSectionProps) {
  return (
    <section className="mb-8">
      <h2 className="mb-3 px-3 text-xs font-bold uppercase tracking-wider text-slate-500">
        {title}
      </h2>

      <div className="space-y-1">
        {children}
      </div>
    </section>
  );
}