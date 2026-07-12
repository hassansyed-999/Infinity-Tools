import {
  Bot,
  FileText,
  FolderKanban,
  Gamepad2,
  Home,
  Image,
  LayoutDashboard,
  Settings,
  Video,
  Wrench,
} from "lucide-react";

/* ----------------------------------------
 * Marketing Navigation
 * --------------------------------------*/

export const marketingNavigation = [
  {
    name: "Features",
    href: "#features",
  },
  {
    name: "Pricing",
    href: "#pricing",
  },
  {
    name: "Docs",
    href: "#docs",
  },
  {
    name: "Contact",
    href: "#contact",
  },
] as const;

/* ----------------------------------------
 * Dashboard Sidebar
 * --------------------------------------*/

export const dashboardNavigation = [
  {
    title: "Dashboard",
    items: [
      {
        name: "Home",
        href: "/dashboard",
        icon: Home,
      },
      {
        name: "Workspace",
        href: "/dashboard/workspace",
        icon: LayoutDashboard,
      },
    ],
  },

  {
    title: "AI Engines",
    items: [
      {
        name: "Writing",
        href: "/dashboard/writing",
        icon: FileText,
      },
      {
        name: "Image",
        href: "/dashboard/image",
        icon: Image,
      },
      {
        name: "Video",
        href: "/dashboard/video",
        icon: Video,
      },
      {
        name: "Game Builder",
        href: "/dashboard/game-builder",
        icon: Gamepad2,
      },
      {
        name: "AI Agents",
        href: "/dashboard/agents",
        icon: Bot,
      },
    ],
  },

  {
    title: "Projects",
    items: [
      {
        name: "Projects",
        href: "/dashboard/projects",
        icon: FolderKanban,
      },
      {
        name: "Tools",
        href: "/dashboard/tools",
        icon: Wrench,
      },
    ],
  },

  {
    title: "Settings",
    items: [
      {
        name: "Settings",
        href: "/dashboard/settings",
        icon: Settings,
      },
    ],
  },
] as const;