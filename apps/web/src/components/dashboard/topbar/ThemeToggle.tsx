import { Moon, Icon } from "../../icons";

export function ThemeToggle() {
  return (
    <button
      type="button"
      aria-label="Toggle theme"
      className="
        flex
        h-10
        w-10
        items-center
        justify-center
        rounded-xl
        border
        border-slate-200
        bg-white
        text-slate-700
        transition-all
        duration-200
        hover:bg-slate-100
        hover:text-slate-900
        focus:outline-none
        focus:ring-2
        focus:ring-blue-500
        focus:ring-offset-2
      "
    >
      <Icon
        icon={Moon}
        size={20}
      />
    </button>
  );
}