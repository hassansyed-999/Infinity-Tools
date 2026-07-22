"use client";

import { useMemo, useState } from "react";

import { AIToolCardProps } from "./AIToolCard";
import { AIToolEmptyState } from "./AIToolEmptyState";
import { AIToolFilters } from "./AIToolFilters";
import { AIToolGrid } from "./AIToolGrid";
import { AIToolSearch } from "./AIToolSearch";

interface AIToolsClientProps {
  tools: AIToolCardProps[];
}

export function AIToolsClient({
  tools,
}: AIToolsClientProps) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [pricing, setPricing] = useState("All");

  const filteredTools = useMemo(() => {
    return tools.filter((tool) => {
      const matchesSearch =
        tool.name
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        (tool.description ?? "")
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesCategory =
        category === "All" ||
        tool.category === category;

      const matchesPricing =
        pricing === "All" ||
        tool.pricing === pricing;

      return (
        matchesSearch &&
        matchesCategory &&
        matchesPricing
      );
    });
  }, [tools, search, category, pricing]);

  return (
    <div className="space-y-6">
      <AIToolSearch
        value={search}
        onChange={setSearch}
      />

      <AIToolFilters
        category={category}
        pricing={pricing}
        onCategoryChange={setCategory}
        onPricingChange={setPricing}
      />

      {filteredTools.length === 0 ? (
        <AIToolEmptyState />
      ) : (
        <AIToolGrid tools={filteredTools} />
      )}
    </div>
  );
}