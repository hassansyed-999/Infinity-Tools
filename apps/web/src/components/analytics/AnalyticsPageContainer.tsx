import type { ReactNode } from "react";

interface AnalyticsPageContainerProps {
  children: ReactNode;
}

export function AnalyticsPageContainer({
  children,
}: AnalyticsPageContainerProps) {
  return (
    <div className="space-y-8">
      {children}
    </div>
  );
}