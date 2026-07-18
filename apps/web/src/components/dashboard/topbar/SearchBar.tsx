import { Search, Icon } from "../../icons";

export function SearchBar() {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center">
        <Icon
          icon={Search}
          size={18}
          className="text-slate-400"
        />
      </div>

      <input
        type="search"
        placeholder="Search tools..."
        className="
          w-72
          rounded-xl
          border
          border-slate-300
          bg-white
          py-2
          pl-10
          pr-4
          text-sm
          text-slate-900
          placeholder:text-slate-400
          outline-none
          transition-all
          duration-200
          focus:border-blue-500
          focus:ring-2
          focus:ring-blue-200
        "
      />
    </div>
  );
}