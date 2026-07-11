const features = [
  {
    icon: "🤖",
    title: "AI App Builder",
    description:
      "Generate production-ready applications using intelligent AI workflows.",
  },
  {
    icon: "🎮",
    title: "Game Studio",
    description:
      "Create Roblox, browser, and multiplayer games with AI assistance.",
  },
  {
    icon: "🌐",
    title: "Website Generator",
    description:
      "Launch responsive websites with modern UI in minutes.",
  },
  {
    icon: "⚡",
    title: "Automation",
    description:
      "Connect APIs, automate repetitive tasks, and build workflows visually.",
  },
  {
    icon: "📊",
    title: "Analytics",
    description:
      "Track users, revenue, and application performance from one dashboard.",
  },
  {
    icon: "🧩",
    title: "Reusable Components",
    description:
      "Build faster with a shared design system and reusable UI library.",
  },
];

export function Features() {
  return (
    <section
      id="features"
      className="bg-gray-50 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-600">
            Platform Features
          </p>

          <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            Everything you need to build with AI
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Infinity Tools combines AI development, game creation,
            automation, analytics, and deployment into one powerful
            platform.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-6 text-5xl">
                {feature.icon}
              </div>

              <h3 className="mb-4 text-2xl font-bold">
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