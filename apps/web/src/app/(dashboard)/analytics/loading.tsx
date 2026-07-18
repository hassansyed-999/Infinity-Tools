export default function AnalyticsLoading() {
  return (
    <div className="space-y-8" aria-busy="true">
      <div className="space-y-3">
        <div className="h-8 w-64 animate-pulse rounded-lg bg-slate-200" />
        <div className="h-4 w-96 max-w-full animate-pulse rounded bg-slate-200" />
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="h-36 animate-pulse rounded-xl border border-slate-200 bg-slate-100"
          />
        ))}
      </div>

      <div className="space-y-4">
        <div className="h-7 w-56 animate-pulse rounded-lg bg-slate-200" />
        <div className="grid gap-6 xl:grid-cols-2">
          <div className="h-80 animate-pulse rounded-xl border border-slate-200 bg-slate-100" />
          <div className="h-80 animate-pulse rounded-xl border border-slate-200 bg-slate-100" />
        </div>
      </div>
    </div>
  );
}