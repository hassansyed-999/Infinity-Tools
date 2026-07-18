import {
  Bot,
  FolderOpen,
  Sparkles,
  Wand2,
} from "lucide-react";

import { DashboardSkeleton } from "../../../components/dashboard/DashboardSkeleton";
import { DashboardContainer } from "../../../components/dashboard/DashboardContainer";
import { DashboardQuickAction } from "../../../components/dashboard/DashboardQuickAction";
import { DashboardRecentActivity } from "../../../components/dashboard/DashboardRecentActivity";
import { DashboardSection } from "../../../components/dashboard/DashboardSection";
import { DashboardStatsCard } from "../../../components/dashboard/DashboardStatsCard";
import { DashboardHero } from "../../../components/dashboard/widgets";
import { Grid } from "../../../components/ui";

const activities = [
  {
    id: "1",
    title: "Created your Infinity Tools workspace",
    time: "Just now",
  },
  {
    id: "2",
    title: "Dashboard initialized",
    time: "Today",
  },
];

export default function DashboardPage() {
  return (
    <DashboardContainer>
      <DashboardHero />

      <DashboardSection
        title="Workspace Overview"
        description="Monitor your platform at a glance."
      >
        <Grid cols={4}>
          <DashboardStatsCard
            title="AI Tools"
            value="1,500+"
            description="Available tools"
            icon={<Bot size={28} />}
            trend="+12.4%"
          />

          <DashboardStatsCard
            title="Projects"
            value="24"
            description="Active projects"
            icon={<FolderOpen size={28} />}
            trend="+8.2%"
          />

          <DashboardStatsCard
            title="Workflows"
            value="18"
            description="Automation flows"
            icon={<Sparkles size={28} />}
            trend="+15.6%"
          />

          <DashboardStatsCard
            title="Credits"
            value="12,500"
            description="Remaining credits"
            icon={<Wand2 size={28} />}
            trend="-2.1%"
            trendPositive={false}
          />
        </Grid>
      </DashboardSection>

      <DashboardSection
        title="Quick Actions"
        description="Jump into your most-used tools."
      >
        <Grid cols={2}>
          <DashboardQuickAction
            title="Create AI Tool"
            description="Build a new AI-powered application."
            icon={<Bot size={24} />}
          />

          <DashboardQuickAction
            title="Create Website"
            description="Generate a modern responsive website."
            icon={<Sparkles size={24} />}
          />

          <DashboardQuickAction
            title="Create Game"
            description="Start your next game project."
            icon={<Wand2 size={24} />}
          />

          <DashboardQuickAction
            title="View Projects"
            description="Manage all your projects."
            icon={<FolderOpen size={24} />}
          />
        </Grid>
      </DashboardSection>

      <DashboardSection
        title="Recent Activity"
        description="Latest updates across your workspace."
      >
        <DashboardRecentActivity
          activities={activities}
        />
      </DashboardSection>
    </DashboardContainer>
  );
}