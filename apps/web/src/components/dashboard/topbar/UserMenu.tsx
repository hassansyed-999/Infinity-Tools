import { User, Icon } from "../../icons";

export function UserMenu() {
  return (
    <button
      type="button"
      className="
        flex
        items-center
        gap-3
        rounded-xl
        border
        border-slate-200
        bg-white
        px-3
        py-2
        transition-all
        duration-200
        hover:bg-slate-100
      "
    >
      <div
        className="
          flex
          h-9
          w-9
          items-center
          justify-center
          rounded-full
          bg-gradient-to-r
          from-blue-600
          to-violet-600
        "
      >
        <Icon
          icon={User}
          size={18}
          className="text-white"
        />
      </div>

      <div className="hidden text-left md:block">
        <p className="text-sm font-semibold text-slate-900">
          Hassan
        </p>

        <p className="text-xs text-slate-500">
          Administrator
        </p>
      </div>
    </button>
  );
}