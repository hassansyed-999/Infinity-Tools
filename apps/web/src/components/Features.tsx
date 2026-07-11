const features = [
  {
    icon: "🤖",
    title: "AI Development",
    description:
      "Generate applications, websites, APIs, and intelligent workflows with advanced AI assistance.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: "🎮",
    title: "Game Studio",
    description:
      "Create Roblox experiences, browser games, and interactive worlds using AI and visual tools.",
    color: "from-violet-500 to-fuchsia-500",
  },
  {
    icon: "⚡",
    title: "Automation",
    description:
      "Build automations that connect your apps, services, and workflows without repetitive tasks.",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: "📊",
    title: "Analytics",
    description:
      "Monitor projects, users, revenue, and performance through a unified dashboard.",
    color: "from-emerald-500 to-green-500",
  },
  {
    icon: "🧩",
    title: "Component Library",
    description:
      "Reuse professionally designed UI components to build products faster and more consistently.",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: "☁️",
    title: "Cloud Deployment",
    description:
      "Deploy your applications with a streamlined workflow and scalable cloud infrastructure.",
    color: "from-sky-500 to-blue-600",
  },
];

export function Features() {
  return (
    <section
      id="features"
      className="bg-white py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
            Platform Features
          </p>

          <h2 className="text-4xl font-black tracking-tight text-gray-900 md:text-5xl">
            Everything You Need to Build Faster
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Infinity Tools combines AI, development, automation, analytics,
            and game creation into one modern platform.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div
                className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${feature.color} text-3xl shadow-lg`}
              >
                {feature.icon}
              </div>

              <h3 className="mb-4 text-2xl font-bold text-gray-900">
                {feature.title}
              </h3>

              <p className="leading-7 text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}