import type { ReactNode } from "react";

interface SettingsPageContainerProps {
  children: ReactNode;
}

export function SettingsPageContainer({
  children,
}: SettingsPageContainerProps) {
  return (
    <div className="space-y-8">
      {children}
    </div>
  );
}