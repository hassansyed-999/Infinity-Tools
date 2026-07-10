const features = [
  {
    title: "AI-Powered Development",
    description:
      "Generate code, UI, and workflows with intelligent AI assistance.",
  },
  {
    title: "Reusable Components",
    description:
      "Build faster using a shared design system across all applications.",
  },
  {
    title: "Scalable Architecture",
    description:
      "Powered by a modern Turborepo and Next.js monorepo structure.",
  },
];

export function Features() {
  return (
    <section id="features" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-12 text-center text-4xl font-bold">
          Why Infinity Tools?
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-xl border bg-white p-6 shadow-sm"
            >
              <h3 className="mb-3 text-xl font-semibold">
                {feature.title}
              </h3>

              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}