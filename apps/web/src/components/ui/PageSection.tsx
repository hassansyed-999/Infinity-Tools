import { ReactNode } from "react";

interface PageSectionProps {
  children: ReactNode;
  className?: string;
}

export function PageSection({
  children,
  className = "",
}: PageSectionProps) {
  return (
    <section className={`space-y-6 ${className}`}>
      {children}
    </section>
  );
}