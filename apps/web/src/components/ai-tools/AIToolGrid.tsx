import { AIToolCard } from "./AIToolCard";

interface AITool {
  id: string;
  name: string;
  description: string;
  category: string;
}

interface AIToolGridProps {
  tools: AITool[];
}

export function AIToolGrid({
  tools,
}: AIToolGridProps) {
  if (tools.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 py-16 text-center">
        <h2 className="text-2xl font-black text-slate-950">
          No AI Tools Found
        </h2>

        <p className="mt-3 text-slate-600">
          Create your first AI tool to get started.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {tools.map((tool) => (
        <AIToolCard
          key={tool.id}
          id={tool.id}
          name={tool.name}
          description={tool.description}
          category={tool.category}
        />
      ))}
    </div>
  );
}