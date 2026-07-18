import {
  type LucideIcon,
} from "lucide-react";

interface IconProps {
  icon: LucideIcon;
  size?: number;
  className?: string;
  strokeWidth?: number;
}

export function Icon({
  icon: IconComponent,
  size = 20,
  className = "",
  strokeWidth = 2,
}: IconProps) {
  return (
    <IconComponent
      size={size}
      strokeWidth={strokeWidth}
      className={className}
      aria-hidden="true"
    />
  );
}