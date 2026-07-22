import Link from "next/link";
import { Plus } from "lucide-react";

import { AIToolsClient } from "@/components/ai-tools";
import { requireUser } from "@/lib/auth/require-user";
import { db } from "@/lib/db";

export default async function AIToolsPage() {
  const user = await requireUser();

  const tools = await db.tool.findMany({
    where: {
      OR: [
        {
          ownerId: user.id,
        },
        {
          ownerId: null,
        },
      ],
    },
    orderBy: [
      {
        featured: "desc",
      },
      {
        verified: "desc",
      },
      {
        createdAt: "desc",
      },
    ],
  });

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-4xl font-black text-slate-950">
            AI Tools
          </h1>

          <p className="mt-2 text-slate-600">
            Discover, manage, and publish AI tools in your Infinity Tools workspace.
          </p>
        </div>

        <Link
          href="/dashboard/ai-tools/new"
          className="inline-flex items-center gap-2 rounded-2xl bg-violet-600 px-5 py-3 font-bold text-white transition hover:bg-violet-700"
        >
          <Plus size={20} />
          Create AI Tool
        </Link>
      </div>

      <AIToolsClient
        tools={tools.map((tool) => ({
          id: tool.id,
          name: tool.name,
          description: tool.description,
          category: tool.category,
          pricing: tool.pricing,
          website: tool.website,
          verified: tool.verified,
          featured: tool.featured,
        }))}
      />
    </div>
  );
}