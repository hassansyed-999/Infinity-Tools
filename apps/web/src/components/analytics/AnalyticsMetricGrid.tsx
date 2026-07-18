import {
  Activity,
  FolderKanban,
  Users,
  Zap,
} from "lucide-react";

import type { AnalyticsMetric } from "../../config/analytics";

import { AnalyticsMetricCard } from "./cards";

interface AnalyticsMetricGridProps {
  metrics: AnalyticsMetric[];
}

const metricIcons = {
  "total-usage": Activity,
  "active-users": Users,
  "projects-created": FolderKanban,
  "credits-used": Zap,
};

export function AnalyticsMetricGrid({
  metrics,
}: AnalyticsMetricGridProps) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
      {metrics.map((metric) => {
        const Icon =
          metricIcons[metric.id as keyof typeof metricIcons];

        return (
          <AnalyticsMetricCard
            key={metric.id}
            title={metric.title}
            value={metric.value}
            description={metric.description}
            change={metric.change}
            changeType={metric.changeType}
            icon={Icon}
          />
        );
      })}
    </div>
  );
}