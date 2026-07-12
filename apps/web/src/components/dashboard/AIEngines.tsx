import { aiEngines } from "../../lib/dashboard";

export function AIEngines() {
  return (
    <section>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-900">
          AI Engines
        </h2>

        <p className="mt-1 text-slate-600">
          Explore the core AI capabilities powering Infinity Tools.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {aiEngines.map((engine) => {
          const Icon = engine.icon;

          return (
            <div
              key={engine.name}
              className="rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100">
                <Icon size={24} className="text-blue-600" />
              </div>

              <h3 className="text-lg font-semibold text-slate-900">
                {engine.name}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                {engine.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}