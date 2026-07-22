import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { AIToolForm } from "@/components/ai-tools/AIToolForm";
import { requireUser } from "@/lib/auth/require-user";

export default async function NewAIToolPage() {
  await requireUser();

  return (
    <div className="mx-auto max-w-4xl space-y-8">
      <Link
        href="/dashboard/ai-tools"
        className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 transition hover:text-slate-950"
      >
        <ArrowLeft size={18} />
        Back to AI Tools
      </Link>

      <div>
        <h1 className="text-4xl font-black text-slate-950">
          Create AI Tool
        </h1>

        <p className="mt-2 text-slate-600">
          Add a new AI tool to your personal collection or publish it to the
          Infinity Tools directory.
        </p>
      </div>

      <AIToolForm mode="create" />
    </div>
  );
}