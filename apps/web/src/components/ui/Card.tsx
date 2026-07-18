import { ReactNode } from "react";

type CardVariant =
  | "default"
  | "outlined"
  | "elevated"
  | "glass";

interface CardProps {
  children: ReactNode;
  variant?: CardVariant;
  hover?: boolean;
  className?: string;
}

const variants = {
  default:
    "border border-slate-200 bg-white shadow-sm",

  outlined:
    "border-2 border-slate-300 bg-white",

  elevated:
    "border border-slate-200 bg-white shadow-lg",

  glass:
    "border border-white/30 bg-white/70 backdrop-blur-md shadow-lg",
} as const;

export function Card({
  children,
  variant = "default",
  hover = false,
  className = "",
}: CardProps) {
  return (
    <div
      className={`
        rounded-2xl
        overflow-hidden
        transition-all
        duration-300
        will-change-transform
        ${variants[variant]}
        ${hover ? "hover:-translate-y-1 hover:shadow-xl" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}