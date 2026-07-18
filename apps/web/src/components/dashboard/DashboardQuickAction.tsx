import { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

interface DashboardQuickActionProps {
  title: string;
  description: string;
  icon?: ReactNode;
  onClick?: () => void;
}

export function DashboardQuickAction({
  title,
  description,
  icon,
  onClick,
}: DashboardQuickActionProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
        group
        relative
        w-full
        overflow-hidden
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-6
        text-left
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-blue-200
        hover:shadow-xl
        focus:outline-none
        focus:ring-2
        focus:ring-blue-500
        focus:ring-offset-2
      "
    >
      {/* Hover Background */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-blue-50
          via-transparent
          to-transparent
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100
        "
      />

      <div className="relative z-10 flex items-start justify-between">
        <div className="flex gap-4">
          {icon && (
            <div
              className="
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                bg-blue-50
                text-blue-600
                transition-all
                duration-300
                group-hover:scale-110
                group-hover:bg-blue-100
              "
            >
              {icon}
            </div>
          )}

          <div>
            <h3
              className="
                text-lg
                font-bold
                text-slate-900
              "
            >
              {title}
            </h3>

            <p
              className="
                mt-2
                text-sm
                leading-6
                text-slate-600
              "
            >
              {description}
            </p>

            <span
              className="
                mt-4
                inline-block
                text-sm
                font-semibold
                text-blue-600
              "
            >
              Launch Tool
            </span>
          </div>
        </div>

        <div
          className="
            rounded-xl
            bg-slate-100
            p-2
            transition-all
            duration-300
            group-hover:bg-blue-600
            group-hover:text-white
            group-hover:translate-x-1
          "
        >
          <ArrowRight size={18} />
        </div>
      </div>

      {/* Bottom Accent */}

      <div
        className="
          absolute
          bottom-0
          left-0
          h-1
          w-0
          bg-blue-600
          transition-all
          duration-300
          group-hover:w-full
        "
      />
    </button>
  );
}