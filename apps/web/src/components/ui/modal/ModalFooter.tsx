import { ReactNode } from "react";

interface ModalFooterProps {
  children: ReactNode;
  className?: string;
}

export function ModalFooter({
  children,
  className = "",
}: ModalFooterProps) {
  return (
    <div
      className={`
        flex
        items-center
        justify-end
        gap-3
        border-t
        border-slate-200
        px-6
        py-4
        ${className}
      `}
    >
      {children}
    </div>
  );
}