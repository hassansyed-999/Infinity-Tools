import { ReactNode } from "react";

interface DashboardContainerProps {
  children: ReactNode;
}

export function DashboardContainer({
  children,
}: DashboardContainerProps) {
  return (
    <div className="mx-auto w-full max-w-7xl space-y-8">
      {children}
    </div>
  );
}