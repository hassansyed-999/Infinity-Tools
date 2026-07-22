import { AIToolCard, AIToolCardProps } from "./AIToolCard";

interface AIToolGridProps {
  tools: AIToolCardProps[];
}

export function AIToolGrid({
  tools,
}: AIToolGridProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {tools.map((tool) => (
        <AIToolCard
          key={tool.id}
          {...tool}
        />
      ))}
    </div>
  );
}