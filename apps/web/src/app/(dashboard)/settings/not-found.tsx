export default function SettingsNotFound() {
  return (
    <div className="flex min-h-[400px] flex-col items-center justify-center gap-4 text-center">
      <h2 className="text-xl font-semibold">
        Settings not found
      </h2>

      <p className="text-sm text-muted-foreground">
        The requested settings page could not be found.
      </p>
    </div>
  );
}