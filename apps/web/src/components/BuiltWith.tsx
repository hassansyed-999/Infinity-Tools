const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Turborepo",
  "OpenAI",
  "Stripe",
  "Supabase",
];

export function BuiltWith() {
  return (
    <section className="border-y border-gray-200 bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-8 text-center text-sm font-semibold uppercase tracking-[0.3em] text-gray-500">
          Built With Modern Technologies
        </p>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-8">
          {technologies.map((tech) => (
            <div
              key={tech}
              className="rounded-xl border border-gray-200 bg-white px-4 py-5 text-center text-sm font-semibold text-gray-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}