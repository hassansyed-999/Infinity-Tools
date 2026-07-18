import { ReactNode } from "react";

interface GridProps {
  children: ReactNode;
  cols?: 1 | 2 | 3 | 4;
  gap?: "sm" | "md" | "lg";
  className?: string;
}

const columnClasses = {
  1: "grid-cols-1",
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-2 xl:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4",
} as const;

const gapClasses = {
  sm: "gap-4",
  md: "gap-6",
  lg: "gap-8",
} as const;

export function Grid({
  children,
  cols = 3,
  gap = "md",
  className = "",
}: GridProps) {
  return (
    <div
      className={`
        grid
        ${columnClasses[cols]}
        ${gapClasses[gap]}
        ${className}
      `}
    >
      {children}
    </div>
  );
}