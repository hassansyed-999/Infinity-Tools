import type { HTMLAttributes } from "react";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {}

export function Card({
  children,
  ...props
}: CardProps) {
  return <div {...props}>{children}</div>;
}