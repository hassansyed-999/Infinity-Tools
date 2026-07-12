import { activityFeed } from "../../lib/dashboard";

export function ActivityFeed() {
  return (
    <section>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-900">
          Recent Activity
        </h2>

        <p className="mt-1 text-slate-600">
          Keep track of your latest actions across the platform.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
        {activityFeed.map((activity, index) => {
          const Icon = activity.icon;

          return (
            <div
              key={`${activity.title}-${index}`}
              className={`flex items-start gap-4 p-5 ${
                index !== activityFeed.length - 1
                  ? "border-b border-slate-200"
                  : ""
              }`}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                <Icon size={20} className="text-blue-600" />
              </div>

              <div className="flex-1">
                <h3 className="font-semibold text-slate-900">
                  {activity.title}
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  {activity.time}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}