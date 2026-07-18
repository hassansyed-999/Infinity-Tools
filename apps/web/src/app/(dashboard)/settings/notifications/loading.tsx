export default function NotificationsSettingsLoading() {
  return (
    <div
      className="space-y-6 animate-pulse"
      role="status"
      aria-label="Loading notification settings"
    >
      <div className="h-24 rounded-2xl bg-muted" />

      <div className="rounded-2xl border p-6">
        <div className="space-y-5">
          <div className="h-5 w-48 rounded bg-muted" />
          <div className="h-16 rounded bg-muted" />
          <div className="h-16 rounded bg-muted" />
          <div className="h-16 rounded bg-muted" />
        </div>
      </div>

      <span className="sr-only">
        Loading notification settings
      </span>
    </div>
  );
}