export function AnalyticsTrendChartSkeleton() {
  return (
    <div
      className="space-y-6 animate-pulse"
      role="status"
      aria-label="Loading analytics trend"
    >
      <div className="space-y-2">
        <div className="h-5 w-40 rounded bg-muted" />
        <div className="h-4 w-64 rounded bg-muted" />
      </div>

      <div className="h-8 w-28 rounded bg-muted" />

      <div className="space-y-4">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="flex items-center gap-4"
          >
            <div className="h-4 w-16 rounded bg-muted" />

            <div className="h-3 flex-1 rounded-full bg-muted" />

            <div className="h-4 w-12 rounded bg-muted" />
          </div>
        ))}
      </div>

      <span className="sr-only">
        Loading analytics trend data
      </span>
    </div>
  );
}