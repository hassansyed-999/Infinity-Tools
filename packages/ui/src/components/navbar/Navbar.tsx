import type { HTMLAttributes } from "react";

export interface NavbarProps
  extends HTMLAttributes<HTMLElement> {}

export function Navbar({
  children,
  className = "",
  ...props
}: NavbarProps) {
  return (
    <header
      className={`sticky top-0 z-50 border-b bg-white ${className}`}
      {...props}
    >
      {children}
    </header>
  );
}