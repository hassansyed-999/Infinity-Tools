import { ReactNode } from "react";

interface ModalHeaderProps {
  children: ReactNode;
  className?: string;
}

export function ModalHeader({
  children,
  className = "",
}: ModalHeaderProps) {
  return (
    <div
      className={`
        flex
        items-center
        justify-between
        border-b
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