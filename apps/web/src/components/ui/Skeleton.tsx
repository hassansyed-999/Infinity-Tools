interface SkeletonProps {
  className?: string;
  rounded?: "sm" | "md" | "lg" | "xl" | "full";
}

const roundedClasses = {
  sm: "rounded",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  full: "rounded-full",
} as const;

export function Skeleton({
  className = "",
  rounded = "xl",
}: SkeletonProps) {
  return (
    <div
      aria-hidden="true"
      className={`
        animate-pulse
        bg-slate-200
        dark:bg-slate-700
        ${roundedClasses[rounded]}
        ${className}
      `}
    />
  );
}