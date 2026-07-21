import Link from "next/link";
import {
  ArrowLeft,
  BadgeCheck,
  ExternalLink,
  Globe,
  Pencil,
  Sparkles,
} from "lucide-react";

import { requireUser } from "@/lib/auth/require-user";
import { db } from "@/lib/db";

interface ToolPageProps {
  params: Promise<{
    toolId: string;
  }>;
}

export default async function ToolPage({
  params,
}: ToolPageProps) {
  await requireUser();

  const { toolId } = await params;

  const tool = await db.tool.findUnique({
    where: {
      id: toolId,
    },
  });

  if (!tool) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-8">
        <h1 className="text-2xl font-black text-slate-950">
          AI Tool Not Found
        </h1>

        <p className="mt-2 text-slate-600">
          The requested AI tool could not be found.
        </p>

        <Link
          href="/dashboard/ai-tools"
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-3 font-bold text-white transition hover:bg-slate-800"
        >
          <ArrowLeft size={18} />
          Back to AI Tools
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <Link
        href="/dashboard/ai-tools"
        className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 transition hover:text-slate-950"
      >
        <ArrowLeft size={18} />
        Back to AI Tools
      </Link>

      <div className="flex flex-col gap-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm lg:flex-row lg:items-start lg:justify-between">
        <div className="flex gap-5">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100">
            <Sparkles
              size={30}
              className="text-violet-600"
            />
          </div>

          <div>
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-3xl font-black text-slate-950">
                {tool.name}
              </h1>

              {tool.verified && (
                <span className="inline-flex items-center gap-1 rounded-full bg-blue-100 px-3 py-1 text-sm font-bold text-blue-700">
                  <BadgeCheck size={16} />
                  Verified
                </span>
              )}

              {tool.featured && (
                <span className="rounded-full bg-amber-100 px-3 py-1 text-sm font-bold text-amber-700">
                  Featured
                </span>
              )}
            </div>

            <p className="mt-4 max-w-3xl text-slate-600">
              {tool.description ||
                "No description available for this AI tool."}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {tool.category && (
                <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
                  {tool.category}
                </span>
              )}

              {tool.pricing && (
                <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
                  {tool.pricing}
                </span>
              )}
            </div>
          </div>
        </div>

        <Link
          href={`/dashboard/ai-tools/${tool.id}/edit`}
          className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 font-bold text-slate-900 transition hover:bg-slate-50"
        >
          <Pencil size={18} />
          Edit Tool
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-lg font-black text-slate-950">
            Website
          </h2>

          {tool.website ? (
            <a
              href={tool.website}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 font-semibold text-blue-600 hover:underline"
            >
              <Globe size={18} />
              Visit Website
              <ExternalLink size={16} />
            </a>
          ) : (
            <p className="mt-4 text-slate-500">
              No website available.
            </p>
          )}
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <h2 className="text-lg font-black text-slate-950">
            Information
          </h2>

          <div className="mt-4 space-y-3">
            <p>
              <span className="font-bold text-slate-900">
                Created:
              </span>{" "}
              {tool.createdAt.toLocaleDateString()}
            </p>

            <p>
              <span className="font-bold text-slate-900">
                Status:
              </span>{" "}
              {tool.isActive ? "Active" : "Inactive"}
            </p>

            <p>
              <span className="font-bold text-slate-900">
                Slug:
              </span>{" "}
              {tool.slug}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}