import {
  Activity,
  Bot,
  Brain,
  FolderKanban,
  Gamepad2,
  Globe,
  Image,
  PenSquare,
  Sparkles,
  Video,
  Workflow,
  type LucideIcon,
} from "lucide-react";

/* -------------------------------------------------------------------------- */
/*                                   Types                                    */
/* -------------------------------------------------------------------------- */

export interface OverviewCard {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  bg: string;
  border: string;
}

export interface DashboardStat {
  title: string;
  value: string;
}

export interface QuickAction {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface AIEngine {
  name: string;
  description: string;
  icon: LucideIcon;
}

export interface RecentProject {
  name: string;
  status: string;
}

export interface ToolCategory {
  name: string;
  icon: LucideIcon;
}

/* -------------------------------------------------------------------------- */
/*                              Overview Cards                                */
/* -------------------------------------------------------------------------- */

export const overviewCards: OverviewCard[] = [
  {
    title: "AI Tools",
    description: "Explore hundreds of AI-powered productivity tools.",
    icon: Brain,
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-100",
  },
  {
    title: "Game Builder",
    description: "Create browser games with AI.",
    icon: Gamepad2,
    color: "text-violet-600",
    bg: "bg-violet-50",
    border: "border-violet-100",
  },
  {
    title: "Automation",
    description: "Build intelligent workflows and automate tasks.",
    icon: Workflow,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
  },
];

/* -------------------------------------------------------------------------- */
/*                              Dashboard Stats                               */
/* -------------------------------------------------------------------------- */

export const dashboardStats: DashboardStat[] = [
  {
    title: "AI Tools",
    value: "1,500+",
  },
  {
    title: "Projects",
    value: "24",
  },
  {
    title: "Workflows",
    value: "12",
  },
  {
    title: "Uptime",
    value: "99.9%",
  },
];

/* -------------------------------------------------------------------------- */
/*                               Quick Actions                                */
/* -------------------------------------------------------------------------- */

export const quickActions: QuickAction[] = [
  {
    title: "Create Website",
    description: "Generate websites with AI.",
    icon: Globe,
  },
  {
    title: "Generate Image",
    description: "Create AI images instantly.",
    icon: Image,
  },
  {
    title: "Write Content",
    description: "Generate blogs and articles.",
    icon: PenSquare,
  },
  {
    title: "Build AI Agent",
    description: "Create intelligent AI assistants.",
    icon: Bot,
  },
];

/* -------------------------------------------------------------------------- */
/*                                 AI Engines                                 */
/* -------------------------------------------------------------------------- */

export const aiEngines: AIEngine[] = [
  {
    name: "Writing AI",
    description: "Content, blogs and SEO generation.",
    icon: PenSquare,
  },
  {
    name: "Image AI",
    description: "Image creation and editing.",
    icon: Image,
  },
  {
    name: "Video AI",
    description: "Generate and edit videos.",
    icon: Video,
  },
  {
    name: "Automation",
    description: "Workflow automation engine.",
    icon: Workflow,
  },
];

/* -------------------------------------------------------------------------- */
/*                              Recent Projects                               */
/* -------------------------------------------------------------------------- */

export const recentProjects: RecentProject[] = [
  {
    name: "Infinity Website",
    status: "Active",
  },
  {
    name: "Adventure Game",
    status: "Building",
  },
  {
    name: "Marketing Campaign",
    status: "Draft",
  },
];

/* -------------------------------------------------------------------------- */
/*                              Tool Categories                               */
/* -------------------------------------------------------------------------- */

export const toolCategories: ToolCategory[] = [
  {
    name: "AI Writing",
    icon: PenSquare,
  },
  {
    name: "Image Tools",
    icon: Image,
  },
  {
    name: "Video Tools",
    icon: Video,
  },
  {
    name: "Game Builder",
    icon: Gamepad2,
  },
  {
    name: "Automation",
    icon: Workflow,
  },
];

/* -------------------------------------------------------------------------- */
/*                               Activity Feed                                */
/* -------------------------------------------------------------------------- */

export const activityFeed = [
  {
    title: "Website generated successfully",
    time: "2 minutes ago",
    icon: Sparkles,
  },
  {
    title: "Image generation completed",
    time: "12 minutes ago",
    icon: Image,
  },
  {
    title: "Workflow executed",
    time: "1 hour ago",
    icon: Activity,
  },
  {
    title: "Project updated",
    time: "Today",
    icon: FolderKanban,
  },
];