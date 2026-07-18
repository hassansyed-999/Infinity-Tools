"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";

interface SidebarItemProps {
  href: string;
  icon?: ReactNode;
  children: ReactNode;
}

export function SidebarItem({
  href,
  icon,
  children,
}: SidebarItemProps) {
  const pathname = usePathname();

  const active =
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      className={`
        group
        relative
        flex
        items-center
        gap-3
        rounded-xl
        px-3
        py-2.5
        text-sm
        font-medium
        transition-all
        duration-200
        ${
          active
            ? "bg-blue-600 text-white shadow-md"
            : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
        }
      `}
    >
      {/* Active Indicator */}
      {active && (
        <span
          className="
            absolute
            left-0
            top-2
            h-8
            w-1
            rounded-r-full
            bg-white
          "
        />
      )}

      {icon && (
        <span
          className={`
            flex
            items-center
            justify-center
            ${
              active
                ? "text-white"
                : "text-slate-500 group-hover:text-slate-900"
            }
          `}
        >
          {icon}
        </span>
      )}

      <span>{children}</span>
    </Link>
  );
}