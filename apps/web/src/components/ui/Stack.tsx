import { ReactNode } from "react";

interface StackProps {
  children: ReactNode;
  className?: string;
  gap?: "sm" | "md" | "lg";
}

export function Stack({
  children,
  className = "",
  gap = "md",
}: StackProps) {
  const gaps = {
    sm: "space-y-2",
    md: "space-y-4",
    lg: "space-y-8",
  };

  return (
    <div className={`${gaps[gap]} ${className}`}>
      {children}
    </div>
  );
}