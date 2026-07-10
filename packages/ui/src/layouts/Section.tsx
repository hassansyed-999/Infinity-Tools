import type { HTMLAttributes } from "react";

export interface SectionProps
  extends HTMLAttributes<HTMLElement> {}

export function Section({
  children,
  className = "",
  ...props
}: SectionProps) {
  return (
    <section
      className={`py-16 md:py-24 ${className}`}
      {...props}
    >
      {children}
    </section>
  );
}