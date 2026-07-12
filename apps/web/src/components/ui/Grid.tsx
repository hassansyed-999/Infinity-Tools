import { ReactNode } from "react";

interface GridProps {
  children: ReactNode;
  cols?: 1 | 2 | 3 | 4;
  className?: string;
}

const columnClasses = {
  1: "grid-cols-1",
  2: "grid-cols-1 md:grid-cols-2",
  3: "grid-cols-1 md:grid-cols-2 xl:grid-cols-3",
  4: "grid-cols-1 md:grid-cols-2 xl:grid-cols-4",
} as const;

export function Grid({
  children,
  cols = 3,
  className = "",
}: GridProps) {
  return (
    <div
      className={`grid gap-6 ${columnClasses[cols]} ${className}`}
    >
      {children}
    </div>
  );
}