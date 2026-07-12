import { quickActions } from "../../config/dashboard";

export function QuickActions() {
  return (
    <section className="mt-10">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-900">
          Quick Actions
        </h2>

        <p className="mt-1 text-slate-600">
          Jump directly into your most-used AI tools.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {quickActions.map((action) => {
          const Icon = action.icon;

          return (
            <button
              key={action.title}
              className="group rounded-2xl border border-slate-200 bg-white p-6 text-left transition-all duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 transition-colors group-hover:bg-blue-50">
                <Icon
                  size={24}
                  className="text-slate-700 group-hover:text-blue-600"
                />
              </div>

              <h3 className="text-lg font-semibold text-slate-900">
                {action.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                {action.description}
              </p>
            </button>
          );
        })}
      </div>
    </section>
  );
}