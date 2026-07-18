import { Skeleton } from "../ui";

export function DashboardSkeleton() {
  return (
    <div className="space-y-8">
      {/* Hero Skeleton */}

      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <Skeleton className="h-5 w-48" />

        <Skeleton className="mt-6 h-12 w-96 max-w-full" />

        <Skeleton className="mt-4 h-5 w-full max-w-2xl" />
        <Skeleton className="mt-2 h-5 w-3/4" />

        <div className="mt-8">
          <Skeleton className="h-24 w-64 rounded-2xl" />
        </div>
      </div>

      {/* Stats */}

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 2xl:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <Skeleton className="h-4 w-24" />

                <Skeleton className="mt-4 h-10 w-28" />

                <Skeleton className="mt-3 h-4 w-32" />
              </div>

              <Skeleton
                className="h-14 w-14"
                rounded="xl"
              />
            </div>

            <div className="mt-6 flex items-center justify-between">
              <Skeleton className="h-3 w-24" />

              <Skeleton className="h-6 w-16 rounded-full" />
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="flex gap-4">
              <Skeleton
                className="h-14 w-14"
                rounded="xl"
              />

              <div className="flex-1">
                <Skeleton className="h-5 w-40" />

                <Skeleton className="mt-3 h-4 w-full" />

                <Skeleton className="mt-2 h-4 w-3/4" />

                <Skeleton className="mt-5 h-4 w-28" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity */}

      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <Skeleton className="h-6 w-48" />

        <div className="mt-8 space-y-6">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="flex items-start gap-4"
            >
              <Skeleton
                className="h-10 w-10"
                rounded="full"
              />

              <div className="flex-1">
                <Skeleton className="h-5 w-64" />

                <Skeleton className="mt-2 h-4 w-32" />
              </div>

              <Skeleton className="h-6 w-20 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}