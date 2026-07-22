import Link from "next/link";
import {
  BadgeCheck,
  ExternalLink,
  Globe,
  Sparkles,
} from "lucide-react";

export interface AIToolCardProps {
  id: string;
  name: string;
  description: string | null;
  category: string | null;
  pricing: string | null;
  website: string | null;
  verified: boolean;
  featured: boolean;
}

export function AIToolCard({
  id,
  name,
  description,
  category,
  pricing,
  website,
  verified,
  featured,
}: AIToolCardProps) {
  return (
    <div className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100">
          <Sparkles
            size={28}
            className="text-violet-600"
          />
        </div>

        <div className="flex flex-wrap justify-end gap-2">
          {verified && (
            <span className="inline-flex items-center gap-1 rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-700">
              <BadgeCheck size={14} />
              Verified
            </span>
          )}

          {featured && (
            <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-700">
              Featured
            </span>
          )}
        </div>
      </div>

      <div className="mt-5 flex-1">
        <h2 className="text-xl font-black text-slate-950">
          {name}
        </h2>

        <p className="mt-3 line-clamp-3 text-sm text-slate-600">
          {description || "No description available."}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {category && (
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
              {category}
            </span>
          )}

          {pricing && (
            <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
              {pricing}
            </span>
          )}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <Link
          href={`/dashboard/ai-tools/${id}`}
          className="rounded-xl bg-slate-900 px-4 py-2 text-sm font-bold text-white transition hover:bg-slate-800"
        >
          View Details
        </Link>

        {website && (
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-blue-700"
          >
            <Globe size={16} />
            Website
            <ExternalLink size={14} />
          </a>
        )}
      </div>
    </div>
  );
}