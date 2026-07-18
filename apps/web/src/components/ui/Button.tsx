import { ReactNode } from "react";
import { theme } from "../../config/theme";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  type?: "button" | "submit" | "reset";
  href?: string;
  onClick?: () => void;
  loading?: boolean;
  disabled?: boolean;
  external?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  className?: string;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  type = "button",
  href,
  onClick,
  loading = false,
  disabled = false,
  external = false,
  leftIcon,
  rightIcon,
  className = "",
}: ButtonProps) {
  const variants = {
    primary: `bg-gradient-to-r ${theme.gradients.primary} text-white hover:opacity-90`,
    secondary: "bg-slate-100 text-slate-900 hover:bg-slate-200",
    outline:
      "border border-slate-300 bg-white text-slate-900 hover:bg-slate-50",
    ghost: "bg-transparent text-slate-900 hover:bg-slate-100",
    danger: "bg-red-600 text-white hover:bg-red-700",
  };

  const sizes = {
  sm: "min-h-9 px-3 py-2 text-sm rounded-lg",
  md: "min-h-11 px-5 py-3 text-base rounded-xl",
  lg: "min-h-14 px-7 py-4 text-lg rounded-2xl",
};

  const classes = `
    inline-flex
    items-center
    justify-center
    gap-2
    font-semibold
    ${theme.animation.normal}
    focus:outline-none
    focus:ring-2
    focus:ring-blue-500
    focus:ring-offset-2
    disabled:pointer-events-none
    disabled:cursor-not-allowed
    disabled:opacity-50
    disabled:grayscale
    ${variants[variant]}
    ${sizes[size]}
    ${className}
  `;

  const content = loading ? (
  <>
    <svg
      className="h-4 w-4 animate-spin"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
      />
    </svg>

    <span>Loading...</span>
  </>
) : (
    <>
      {leftIcon}
      {children}
      {rightIcon}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {content}
    </button>
  );
}