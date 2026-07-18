import { ReactNode } from "react";

interface CardHeaderProps {
  children: ReactNode;
  className?: string;
  bordered?: boolean;
}

export function CardHeader({
  children,
  className = "",
  bordered = false,
}: CardHeaderProps) {
  return (
    <div
      className={`
        flex items-center justify-between p-6
        ${bordered ? "border-b border-slate-200" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}