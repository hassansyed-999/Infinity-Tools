import Link from "next/link";
import {
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

interface AIToolCardProps {
  id: string;
  name: string;
  description: string;
  category: string;
}

export function AIToolCard({
  id,
  name,
  description,
  category,
}: AIToolCardProps) {
  return (
    <Link
      href={`/dashboard/ai-tools/${id}`}
      className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-500 hover:shadow-lg"
    >
      <div className="flex items-center justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100">
          <Sparkles
            size={24}
            className="text-blue-600"
          />
        </div>

        <ArrowUpRight
          size={20}
          className="text-slate-400 transition group-hover:text-blue-600"
        />
      </div>

      <h3 className="mt-5 text-xl font-black text-slate-950">
        {name}
      </h3>

      <p className="mt-3 line-clamp-3 text-sm text-slate-600">
        {description}
      </p>

      <span className="mt-6 inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700">
        {category}
      </span>
    </Link>
  );
}