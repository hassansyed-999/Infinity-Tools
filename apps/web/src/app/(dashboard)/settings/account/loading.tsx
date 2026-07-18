export default function AccountSettingsLoading() {
  return (
    <div
      className="space-y-8 animate-pulse"
      role="status"
      aria-label="Loading account settings"
    >
      <div className="space-y-3">
        <div className="h-8 w-56 rounded bg-muted" />
        <div className="h-4 w-96 max-w-full rounded bg-muted" />
      </div>

      <div className="rounded-xl border p-6">
        <div className="space-y-5">
          <div className="h-5 w-40 rounded bg-muted" />
          <div className="h-10 w-full rounded bg-muted" />
          <div className="h-10 w-full rounded bg-muted" />
          <div className="h-10 w-full rounded bg-muted" />
        </div>
      </div>

      <span className="sr-only">
        Loading account settings
      </span>
    </div>
  );
}