import {
  Bot,
  Boxes,
  Rocket,
} from "lucide-react";

const features = [
  {
    title: "AI-Powered Development",
    description:
      "Generate code, websites, applications, workflows, and AI solutions with intelligent assistance.",
    icon: Bot,
    iconColor: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-100",
  },
  {
    title: "Reusable Components",
    description:
      "Accelerate development with a unified design system and reusable components across every project.",
    icon: Boxes,
    iconColor: "text-violet-600",
    bgColor: "bg-violet-50",
    borderColor: "border-violet-100",
  },
  {
    title: "Scalable Architecture",
    description:
      "Built on Next.js and Turborepo for exceptional performance, scalability, and long-term maintainability.",
    icon: Rocket,
    iconColor: "text-emerald-600",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-100",
  },
];

export function Features() {
  return (
    <section
      id="features"
      className="bg-slate-50 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
            Why Infinity Tools
          </p>

          <h2 className="mt-4 text-4xl font-black text-slate-900 md:text-5xl">
            Everything You Need to Build Faster
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            From AI-powered builders to scalable infrastructure,
            Infinity Tools gives creators one unified platform for
            websites, games, automation, AI agents, and productivity.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className={`group rounded-3xl border ${feature.borderColor} bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl`}
              >
                <div
                  className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl ${feature.bgColor}`}
                >
                  <Icon
                    size={30}
                    className={feature.iconColor}
                  />
                </div>

                <h3 className="text-2xl font-bold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {feature.description}
                </p>

                <div className="mt-8 h-1 w-12 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 transition-all duration-300 group-hover:w-20" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}