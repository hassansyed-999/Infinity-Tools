import { branding } from "../lib/branding";

export function Hero() {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-24">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center">
        {/* Left */}
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-blue-600">
            {branding.tagline}
          </p>

          <h1 className="text-5xl font-extrabold tracking-tight md:text-6xl">
            {branding.name}
          </h1>

          <p className="mt-6 max-w-xl text-lg text-gray-600">
            {branding.description}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button className="rounded-lg bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700">
              Get Started
            </button>

            <a
              href={branding.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border px-6 py-3 transition hover:bg-gray-100"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Right */}
        <div className="rounded-2xl border bg-white p-8 shadow-xl">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-lg font-semibold">Infinity Dashboard</h3>
            <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-700">
              Online
            </span>
          </div>

          <div className="space-y-4">
            <div className="rounded-lg bg-blue-100 p-4">
              🤖 AI Workspace
            </div>

            <div className="rounded-lg bg-purple-100 p-4">
              🎮 Game Builder
            </div>

            <div className="rounded-lg bg-amber-100 p-4">
              📊 Analytics
            </div>

            <div className="rounded-lg bg-emerald-100 p-4">
              ⚡ Automation
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}