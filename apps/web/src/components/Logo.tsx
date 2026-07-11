interface LogoProps {
  size?: "sm" | "md" | "lg";
}

export function Logo({ size = "md" }: LogoProps) {
  const sizes = {
    sm: "h-8 w-8 text-lg",
    md: "h-10 w-10 text-xl",
    lg: "h-14 w-14 text-3xl",
  };

  return (
    <div className="flex items-center gap-3">
      <div
        className={`flex ${sizes[size]} items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600 font-black text-white shadow-lg`}
      >
        ∞
      </div>

      <div className="leading-tight">
        <p className="text-lg font-extrabold tracking-tight">
          Infinity Tools
        </p>

        <p className="text-xs text-gray-500">
          AI Development Platform
        </p>
      </div>
    </div>
  );
}