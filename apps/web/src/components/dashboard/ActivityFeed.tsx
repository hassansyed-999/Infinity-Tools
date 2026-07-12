import { activityFeed } from "../../lib/dashboard";
import { Card, SectionHeader } from "../ui";

export function ActivityFeed() {
  return (
    <section>
      <SectionHeader
        title="Recent Activity"
        description="Keep track of your latest actions across the platform."
      />

      <Card>
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
                <Icon
                  size={20}
                  className="text-blue-600"
                />
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
      </Card>
    </section>
  );
}