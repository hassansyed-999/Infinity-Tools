import { ReactNode } from "react";

interface BreadcrumbProps {
  children: ReactNode;
}

export function Breadcrumb({
  children,
}: BreadcrumbProps) {
  const items = Array.isArray(children)
    ? children
    : [children];

  return (
    <nav
      aria-label="Breadcrumb"
      className="text-sm"
    >
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => (
          <li
            key={index}
            className="flex items-center gap-2"
          >
            {index > 0 && (
              <span
                aria-hidden="true"
                className="text-slate-400"
              >
                /
              </span>
            )}

            {item}
          </li>
        ))}
      </ol>
    </nav>
  );
}