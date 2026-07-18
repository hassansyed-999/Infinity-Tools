import { CheckCircle2, Clock3 } from "lucide-react";

interface ActivityItem {
  id: string;
  title: string;
  time: string;
}

interface DashboardRecentActivityProps {
  activities: ActivityItem[];
}

export function DashboardRecentActivity({
  activities,
}: DashboardRecentActivityProps) {
  return (
    <div
      className="
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-6
        shadow-sm
      "
    >
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold text-slate-900">
            Recent Activity
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            Latest updates from your workspace
          </p>
        </div>

        <Clock3
          size={20}
          className="text-slate-400"
        />
      </div>

      <div className="mt-8">
        {activities.length === 0 ? (
          <div
            className="
              rounded-2xl
              border
              border-dashed
              border-slate-300
              py-12
              text-center
            "
          >
            <p className="font-medium text-slate-600">
              No recent activity
            </p>

            <p className="mt-2 text-sm text-slate-400">
              Your latest actions will appear here.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {activities.map((activity, index) => (
              <div
                key={activity.id}
                className="
                  group
                  flex
                  items-start
                  gap-4
                "
              >
                {/* Timeline */}

                <div className="flex flex-col items-center">
                  <div
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      bg-emerald-100
                      text-emerald-600
                      transition-all
                      duration-300
                      group-hover:scale-110
                    "
                  >
                    <CheckCircle2 size={18} />
                  </div>

                  {index !== activities.length - 1 && (
                    <div className="mt-2 h-12 w-px bg-slate-200" />
                  )}
                </div>

                {/* Content */}

                <div
                  className="
                    flex-1
                    rounded-2xl
                    border
                    border-slate-100
                    p-4
                    transition-all
                    duration-300
                    group-hover:border-blue-200
                    group-hover:bg-slate-50
                  "
                >
                  <div className="flex items-center justify-between gap-4">
                    <h4 className="font-semibold text-slate-900">
                      {activity.title}
                    </h4>

                    <span
                      className="
                        rounded-full
                        bg-slate-100
                        px-3
                        py-1
                        text-xs
                        font-medium
                        text-slate-500
                      "
                    >
                      {activity.time}
                    </span>
                  </div>

                  <p className="mt-2 text-sm text-slate-500">
                    Activity completed successfully.
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}