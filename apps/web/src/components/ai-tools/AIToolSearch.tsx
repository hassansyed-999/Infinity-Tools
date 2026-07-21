"use client";

import { Search } from "lucide-react";

interface AIToolSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export function AIToolSearch({
  value,
  onChange,
}: AIToolSearchProps) {
  return (
    <div className="relative w-full">
      <Search
        size={20}
        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
      />

      <input
        type="text"
        value={value}
        onChange={(event) =>
          onChange(event.target.value)
        }
        placeholder="Search AI tools..."
        className="w-full rounded-2xl border border-slate-300 bg-white py-3 pl-12 pr-4 text-slate-950 placeholder:text-slate-500 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
      />
    </div>
  );
}