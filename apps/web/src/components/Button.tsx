import { ReactNode } from "react";
import { theme } from "../config/theme";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
  type?: "button" | "submit" | "reset";
  href?: string;
  onClick?: () => void;
  external?: boolean;
}

export function Button({
  children,
  variant = "primary",
  type = "button",
  href,
  onClick,
  external = false,
}: ButtonProps) {
  const base = `inline-flex items-center justify-center px-6 py-3 font-semibold ${theme.radius.button} ${theme.animation.button}`;

  const primary = `bg-gradient-to-r ${theme.gradients.primary} text-white ${theme.shadows.lg}`;

  const secondary =
    "border border-slate-300 bg-white text-slate-700 hover:bg-slate-100";

  const classes = `${base} ${
    variant === "primary" ? primary : secondary
  }`;

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
    >
      {children}
    </button>
  );
}