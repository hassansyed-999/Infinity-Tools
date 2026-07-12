import { ActivityFeed } from "../../../components/dashboard/ActivityFeed";
import { AIEngines } from "../../../components/dashboard/AIEngines";
import { OverviewCards } from "../../../components/dashboard/OverviewCards";
import { QuickActions } from "../../../components/dashboard/QuickActions";
import { RecentProjects } from "../../../components/dashboard/RecentProjects";
import { ToolCategories } from "../../../components/dashboard/ToolCategories";

export default function DashboardPage() {
  return (
    <div className="space-y-10">
      <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h1 className="text-4xl font-black text-slate-900">
          Welcome to Infinity Tools
        </h1>

        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
          This is your personal workspace. From here you'll be able to access
          AI tools, create projects, build websites, generate games, manage AI
          agents, automate workflows, and much more.
        </p>

        <OverviewCards />
      </section>

      <QuickActions />

      <AIEngines />

      <RecentProjects />

      <ToolCategories />

      <ActivityFeed />
    </div>
  );
}