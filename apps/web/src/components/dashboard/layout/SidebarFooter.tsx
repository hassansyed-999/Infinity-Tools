import { ReactNode } from "react";

interface SidebarFooterProps {
  children: ReactNode;
}

export function SidebarFooter({
  children,
}: SidebarFooterProps) {
  return (
    <div className="border-t border-slate-200 p-4">
      {children}
    </div>
  );
}