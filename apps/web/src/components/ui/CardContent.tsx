import { ReactNode } from "react";

interface CardContentProps {
  children: ReactNode;
  className?: string;
}

export function CardContent({
  children,
  className = "",
}: CardContentProps) {
  return (
    <div className={`px-6 pb-6 ${className}`}>
      {children}
    </div>
  );
}