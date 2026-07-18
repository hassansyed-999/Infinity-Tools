import type { ReactNode } from "react";

interface BreadcrumbItemProps {
  children: ReactNode;
  href?: string;
  current?: boolean;
}

export function BreadcrumbItem({
  children,
  href,
  current = false,
}: BreadcrumbItemProps) {
  const className = current
    ? "font-semibold text-slate-900"
    : "text-slate-500";

  if (href && !current) {
    return (
      <a
        href={href}
        className={`${className} transition-colors hover:text-slate-900`}
      >
        {children}
      </a>
    );
  }

  return (
    <span
      className={className}
      aria-current={current ? "page" : undefined}
    >
      {children}
    </span>
  );
}