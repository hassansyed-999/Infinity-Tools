import {
  Atom,
  Boxes,
  Code2,
  Cpu,
  Palette,
  Wind,
} from "lucide-react";

const technologies = [
  {
    name: "Next.js",
    description: "React Framework",
    icon: Atom,
    color: "text-slate-800",
    bg: "bg-slate-100",
  },
  {
    name: "TypeScript",
    description: "Type Safe Development",
    icon: Code2,
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    name: "Tailwind CSS",
    description: "Modern Styling",
    icon: Wind,
    color: "text-cyan-600",
    bg: "bg-cyan-50",
  },
  {
    name: "Turborepo",
    description: "Monorepo Architecture",
    icon: Boxes,
    color: "text-violet-600",
    bg: "bg-violet-50",
  },
  {
    name: "AI Powered",
    description: "Intelligent Builders",
    icon: Cpu,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    name: "Modern UI",
    description: "Premium Experience",
    icon: Palette,
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
];

export function BuiltWith() {
  return (
    <section className="border-y border-slate-200 bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
            Built With
          </p>

          <h2 className="mt-4 text-4xl font-black text-slate-900 md:text-5xl">
            Powered by Modern Technology
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Infinity Tools is built on a modern technology stack designed
            for speed, scalability, and long-term growth.
          </p>
        </div>

        {/* Technology Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {technologies.map((tech) => {
            const Icon = tech.icon;

            return (
              <div
                key={tech.name}
                className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
              >
                <div
                  className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl ${tech.bg}`}
                >
                  <Icon
                    size={28}
                    className={tech.color}
                  />
                </div>

                <h3 className="text-xl font-bold text-slate-900">
                  {tech.name}
                </h3>

                <p className="mt-2 text-slate-600">
                  {tech.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}