import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { AIToolForm } from "@/components/ai-tools/AIToolForm";
import { requireUser } from "@/lib/auth/require-user";
import { db } from "@/lib/db";

interface EditAIToolPageProps {
  params: Promise<{
    toolId: string;
  }>;
}

export default async function EditAIToolPage({
  params,
}: EditAIToolPageProps) {
  const user = await requireUser();

  const { toolId } = await params;

  const tool = await db.tool.findFirst({
    where: {
      id: toolId,
      ownerId: user.id,
    },
  });

  if (!tool) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-8">
        <h1 className="text-2xl font-black text-slate-950">
          AI Tool Not Found
        </h1>

        <p className="mt-2 text-slate-600">
          The requested AI tool does not exist or you don't have permission to edit it.
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
    <div className="mx-auto max-w-4xl space-y-8">
      <Link
        href={`/dashboard/ai-tools/${tool.id}`}
        className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 transition hover:text-slate-950"
      >
        <ArrowLeft size={18} />
        Back to Tool
      </Link>

      <div>
        <h1 className="text-4xl font-black text-slate-950">
          Edit AI Tool
        </h1>

        <p className="mt-2 text-slate-600">
          Update your AI tool information.
        </p>
      </div>

      <AIToolForm
        mode="edit"
        toolId={tool.id}
        initialValues={{
          name: tool.name,
          description: tool.description ?? "",
          category: tool.category ?? "",
          website: tool.website ?? "",
          pricing: tool.pricing ?? "Free",
          icon: tool.icon ?? "",
        }}
      />
    </div>
  );
}