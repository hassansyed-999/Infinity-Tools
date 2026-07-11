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
        <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-2xl">
          <div className="mb-8 flex items-center justify-between">
            <h3 className="text-xl font-bold">Infinity Workspace</h3>

            <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
              Live
            </span>
          </div>

          <div className="grid gap-4">
            <div className="rounded-xl bg-blue-50 p-5">
              <h4 className="font-semibold">🤖 AI Agents</h4>
              <p className="mt-2 text-sm text-gray-600">
                Create intelligent assistants in minutes.
              </p>
            </div>

            <div className="rounded-xl bg-violet-50 p-5">
              <h4 className="font-semibold">🎮 Game Studio</h4>
              <p className="mt-2 text-sm text-gray-600">
                Build Roblox and browser games with AI.
              </p>
            </div>

            <div className="rounded-xl bg-amber-50 p-5">
              <h4 className="font-semibold">📊 Analytics</h4>
              <p className="mt-2 text-sm text-gray-600">
                Monitor users, revenue, and performance.
              </p>
            </div>

            <div className="rounded-xl bg-emerald-50 p-5">
              <h4 className="font-semibold">⚡ Automation</h4>
              <p className="mt-2 text-sm text-gray-600">
                Connect apps and automate workflows.
              </p>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4 border-t pt-6 text-center">
            <div>
              <p className="text-2xl font-bold">{branding.stats.tools}</p>
              <p className="text-sm text-gray-500">AI Tools</p>
            </div>

            <div>
              <p className="text-2xl font-bold">{branding.stats.builders}</p>
              <p className="text-sm text-gray-500">Builders</p>
            </div>

            <div>
              <p className="text-2xl font-bold">{branding.stats.uptime}</p>
              <p className="text-sm text-gray-500">Uptime</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}