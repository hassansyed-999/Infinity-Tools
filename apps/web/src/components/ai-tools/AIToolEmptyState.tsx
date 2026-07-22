import { Plus, Sparkles } from "lucide-react";
import Link from "next/link";

export function AIToolEmptyState() {
  return (
    <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-slate-300 bg-slate-50 px-8 py-20 text-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-violet-100">
        <Sparkles
          size={38}
          className="text-violet-600"
        />
      </div>

      <h2 className="mt-8 text-3xl font-black text-slate-950">
        No AI Tools Found
      </h2>

      <p className="mt-4 max-w-xl text-slate-600">
        Your AI tools directory is currently empty. Create your first AI tool
        and start building your personal collection or publish it to the
        Infinity Tools community.
      </p>

      <Link
        href="/dashboard/ai-tools/new"
        className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-violet-600 px-6 py-3 font-bold text-white transition hover:bg-violet-700"
      >
        <Plus size={20} />
        Create AI Tool
      </Link>
    </div>
  );
}