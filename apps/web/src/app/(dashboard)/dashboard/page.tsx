import {
  Bot,
  FolderOpen,
  Sparkles,
  Wand2,
} from "lucide-react";

import {
  DashboardContainer,
} from "../../../components/dashboard/DashboardContainer";
import {
  DashboardQuickAction,
} from "../../../components/dashboard/DashboardQuickAction";
import {
  DashboardRecentActivity,
} from "../../../components/dashboard/DashboardRecentActivity";
import {
  DashboardSection,
} from "../../../components/dashboard/DashboardSection";
import {
  DashboardStatsCard,
} from "../../../components/dashboard/DashboardStatsCard";
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
      <DashboardSection
        title="Welcome to Infinity Tools"
        description="Manage your AI tools, projects, automation, games, websites, documents, and more from one dashboard."
      >
        <Grid cols={4}>
          <DashboardStatsCard
            title="AI Tools"
            value="1500+"
            description="Available tools"
          />

          <DashboardStatsCard
            title="Projects"
            value="0"
            description="Your active projects"
          />

          <DashboardStatsCard
            title="Workflows"
            value="0"
            description="Automation flows"
          />

          <DashboardStatsCard
            title="Credits"
            value="0"
            description="Available credits"
          />
        </Grid>
      </DashboardSection>

      <DashboardSection
        title="Quick Actions"
        description="Start building with Infinity Tools."
      >
        <Grid cols={2}>
          <DashboardQuickAction
            title="Create AI Tool"
            description="Start building a new AI-powered tool."
            icon={<Bot size={24} />}
          />

          <DashboardQuickAction
            title="Create Website"
            description="Generate a modern website."
            icon={<Sparkles size={24} />}
          />

          <DashboardQuickAction
            title="Create Game"
            description="Build your next game project."
            icon={<Wand2 size={24} />}
          />

          <DashboardQuickAction
            title="View Projects"
            description="Manage all of your projects."
            icon={<FolderOpen size={24} />}
          />
        </Grid>
      </DashboardSection>

      <DashboardSection
        title="Recent Activity"
        description="Latest actions in your workspace."
      >
        <DashboardRecentActivity
          activities={activities}
        />
      </DashboardSection>
    </DashboardContainer>
  );
}