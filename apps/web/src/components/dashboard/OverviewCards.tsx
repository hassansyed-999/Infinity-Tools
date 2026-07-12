import { overviewCards } from "../../config/dashboard";

export function OverviewCards() {
  return (
    <div className="mt-10 grid gap-6 md:grid-cols-3">
      {overviewCards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className={`rounded-2xl border ${card.border} ${card.bg} p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg`}
          >
            <div
              className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm ${card.color}`}
            >
              <Icon size={24} />
            </div>

            <h2 className="text-xl font-bold text-slate-900">
              {card.title}
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              {card.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}