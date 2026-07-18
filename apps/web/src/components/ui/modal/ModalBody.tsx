import { ReactNode } from "react";

interface ModalBodyProps {
  children: ReactNode;
  className?: string;
}

export function ModalBody({
  children,
  className = "",
}: ModalBodyProps) {
  return (
    <div
      className={`
        px-6
        py-5
        text-slate-700
        ${className}
      `}
    >
      {children}
    </div>
  );
}