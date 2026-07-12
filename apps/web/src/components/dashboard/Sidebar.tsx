import {
  Bot,
  Brain,
  CreditCard,
  FolderKanban,
  Gamepad2,
  Globe,
  LayoutDashboard,
  LineChart,
  Settings,
  ShoppingBag,
  Sparkles,
} from "lucide-react";

const navigation = [
  { name: "Dashboard", icon: LayoutDashboard },
  { name: "AI Tools", icon: Brain },
  { name: "AI Agents", icon: Bot },
  { name: "Website Builder", icon: Globe },
  { name: "Game Studio", icon: Gamepad2 },
  { name: "Automation", icon: Sparkles },
  { name: "Projects", icon: FolderKanban },
  { name: "Marketplace", icon: ShoppingBag },
  { name: "Analytics", icon: LineChart },
  { name: "Billing", icon: CreditCard },
  { name: "Settings", icon: Settings },
];

export function Sidebar() {
  return (
    <aside className="flex h-screen w-72 flex-col border-r border-slate-200 bg-white">
      {/* Logo */}
      <div className="border-b border-slate-200 px-6 py-6">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 text-xl font-black text-white shadow-lg">
            ∞
          </div>

          <div>
            <h1 className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-xl font-black text-transparent">
              Infinity Tools
            </h1>

            <p className="text-sm text-slate-500">
              AI Development Platform
            </p>
          </div>
        </div>
      </div>

      {/* Workspace */}
      <div className="px-4 pt-5">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Workspace
          </p>

          <h3 className="mt-1 font-semibold text-slate-900">
            Personal
          </h3>

          <p className="text-sm text-slate-500">
            Free Plan
          </p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="mt-6 flex-1 space-y-2 px-4">
        {navigation.map((item, index) => {
          const Icon = item.icon;

          return (
            <button
              key={item.name}
              className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left transition-all ${
                index === 0
                  ? "bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-lg"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              <Icon size={20} />

              <span className="font-medium">
                {item.name}
              </span>
            </button>
          );
        })}
      </nav>

      {/* Upgrade Card */}
      <div className="m-4 rounded-3xl bg-gradient-to-br from-blue-600 to-violet-600 p-5 text-white shadow-xl">
        <h3 className="text-lg font-bold">
          Upgrade to Pro
        </h3>

        <p className="mt-2 text-sm text-blue-100">
          Unlock premium AI models, higher limits, and advanced builders.
        </p>

        <button className="mt-5 w-full rounded-xl bg-white py-2.5 font-semibold text-blue-700 transition hover:bg-slate-100">
          Upgrade Now
        </button>
      </div>
    </aside>
  );
}