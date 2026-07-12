import Link from "next/link";

interface LogoProps {
  href?: string;
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

export function Logo({
  href = "/",
  size = "md",
  showText = true,
}: LogoProps) {
  const iconSizes = {
    sm: "h-10 w-10 text-lg",
    md: "h-12 w-12 text-xl",
    lg: "h-14 w-14 text-2xl",
  };

  const titleSizes = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
  };

  const subtitleSizes = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-sm",
  };

  return (
    <Link
      href={href}
      className="flex items-center gap-3 transition-opacity hover:opacity-90"
    >
      <div
        className={`flex ${iconSizes[size]} items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600 font-black text-white shadow-lg shadow-blue-500/20`}
      >
        ∞
      </div>

      {showText && (
        <div>
          <h1
            className={`bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text font-black text-transparent ${titleSizes[size]}`}
          >
            Infinity Tools
          </h1>

          <p
            className={`${subtitleSizes[size]} font-medium tracking-wide text-slate-600`}
          >
            AI Development Platform
          </p>
        </div>
      )}
    </Link>
  );
}