import type { HTMLAttributes } from "react";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {}

export function Card({
  children,
  className = "",
  ...props
}: CardProps) {
  return (
    <div
      className={`rounded-lg border bg-white p-6 shadow-sm ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}