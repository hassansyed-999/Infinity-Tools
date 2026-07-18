export function DashboardHero() {
  const hour = new Date().getHours();

  const greeting =
    hour < 12
      ? "Good Morning"
      : hour < 18
      ? "Good Afternoon"
      : "Good Evening";

  return (
    <section
      className="
        relative
        overflow-hidden
        rounded-3xl
        border
        border-slate-200
        bg-gradient-to-br
        from-slate-900
        via-slate-800
        to-blue-900
        p-10
        text-white
        shadow-2xl
      "
    >
      {/* Background Glow */}
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />

      <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/10 px-4 py-2 backdrop-blur">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-200">
              Infinity Tools Workspace
            </span>
          </div>

          <h1 className="text-4xl font-black tracking-tight md:text-5xl">
            {greeting}, Hassan
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Build AI tools, websites, games, automations, documents,
            and complete digital products from one intelligent platform.
          </p>
        </div>

        <div
          className="
            min-w-[260px]
            rounded-2xl
            border
            border-white/10
            bg-white/10
            p-6
            backdrop-blur-xl
          "
        >
          <p className="text-sm font-medium text-slate-300">
            Workspace Status
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            Active
          </h2>

          <div className="mt-5">
            <div className="mb-2 flex items-center justify-between text-xs text-slate-300">
              <span>System Health</span>
              <span>100%</span>
            </div>

            <div className="h-2 overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-full rounded-full bg-emerald-400" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}