import { ReactNode } from "react";
import { brand } from "../lib/brand";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
  type?: "button" | "submit" | "reset";
  href?: string;
  onClick?: () => void;
}

export function Button({
  children,
  variant = "primary",
  type = "button",
  href,
  onClick,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold transition-all duration-300";

  const primary = `bg-gradient-to-r ${brand.gradient} text-white hover:scale-105 ${brand.glow}`;

  const secondary =
    "border border-gray-300 bg-white text-gray-700 hover:bg-gray-100";

  const classes = `${base} ${
    variant === "primary" ? primary : secondary
  }`;

  if (href) {
    return (
      <a
        href={href}
        className={classes}
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