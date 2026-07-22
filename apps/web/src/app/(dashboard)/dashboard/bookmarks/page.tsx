import Link from "next/link";
import {
  ArrowRight,
  Bookmark,
  ExternalLink,
} from "lucide-react";

import { requireUser } from "@/lib/auth/require-user";
import { db } from "@/lib/db";

export default async function BookmarksPage() {
  const user = await requireUser();

  const bookmarks = await db.toolBookmark.findMany({
    where: {
      userId: user.id,
    },
    include: {
      tool: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-black text-slate-950">
          My Bookmarks
        </h1>

        <p className="mt-2 text-slate-600">
          Your saved AI tools.
        </p>
      </div>

      {bookmarks.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-12 text-center">
          <Bookmark
            size={56}
            className="mx-auto text-slate-400"
          />

          <h2 className="mt-5 text-2xl font-black text-slate-900">
            No bookmarks yet
          </h2>

          <p className="mt-2 text-slate-600">
            Bookmark AI tools to quickly access them later.
          </p>

          <Link
            href="/dashboard/ai-tools"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-3 font-bold text-white transition hover:bg-violet-700"
          >
            Browse AI Tools

            <ArrowRight size={18} />
          </Link>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {bookmarks.map(({ tool }) => (
            <div
              key={tool.id}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-start justify-between">
                <h2 className="text-xl font-black text-slate-950">
                  {tool.name}
                </h2>

                <Bookmark
                  size={20}
                  className="text-amber-500"
                  fill="currentColor"
                />
              </div>

              <p className="mt-3 line-clamp-3 text-sm text-slate-600">
                {tool.description ??
                  "No description available."}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {tool.category && (
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                    {tool.category}
                  </span>
                )}

                {tool.pricing && (
                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                    {tool.pricing}
                  </span>
                )}
              </div>

              <div className="mt-6 flex items-center gap-3">
                <Link
                  href={`/dashboard/ai-tools/${tool.id}`}
                  className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-4 py-2 font-bold text-white transition hover:bg-violet-700"
                >
                  View Tool

                  <ArrowRight size={16} />
                </Link>

                {tool.website && (
                  <a
                    href={tool.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-4 py-2 font-bold text-slate-900 transition hover:bg-slate-50"
                  >
                    Website

                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}