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
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-xl font-bold text-slate-900">
        Recent Activity
      </h3>

      <div className="mt-6 space-y-4">
        {activities.length === 0 ? (
          <p className="text-sm text-slate-500">
            No recent activity.
          </p>
        ) : (
          activities.map((activity) => (
            <div
              key={activity.id}
              className="flex items-center justify-between border-b border-slate-100 pb-4 last:border-b-0 last:pb-0"
            >
              <span className="font-medium text-slate-900">
                {activity.title}
              </span>

              <span className="text-sm text-slate-500">
                {activity.time}
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}