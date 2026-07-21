"use client";

import { useMemo, useState } from "react";

import { CreateAIToolForm } from "@/components/ai-tools/CreateAIToolForm";
import { AIToolGrid } from "@/components/ai-tools/AIToolGrid";
import { AIToolSearch } from "@/components/ai-tools/AIToolSearch";

const sampleTools = [
  {
    id: "chatgpt",
    name: "ChatGPT",
    description:
      "Conversational AI assistant for writing, coding, and problem solving.",
    category: "AI Chat",
  },
  {
    id: "midjourney",
    name: "Midjourney",
    description:
      "Generate high-quality AI artwork from text prompts.",
    category: "Image Generation",
  },
  {
    id: "cursor",
    name: "Cursor",
    description:
      "AI-powered coding editor for developers.",
    category: "Developer",
  },
];

export default function AIToolsPage() {
  const [search, setSearch] = useState("");

  const filteredTools = useMemo(() => {
    const query = search.toLowerCase();

    return sampleTools.filter(
      (tool) =>
        tool.name.toLowerCase().includes(query) ||
        tool.description.toLowerCase().includes(query) ||
        tool.category.toLowerCase().includes(query),
    );
  }, [search]);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-black text-slate-950">
          AI Tools
        </h1>

        <p className="mt-2 text-slate-600">
          Browse, search, and create AI tools for your workspace.
        </p>
      </div>

      <AIToolSearch
        value={search}
        onChange={setSearch}
      />

      <AIToolGrid tools={filteredTools} />

      <CreateAIToolForm />
    </div>
  );
}