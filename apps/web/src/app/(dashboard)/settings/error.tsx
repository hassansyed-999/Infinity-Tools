"use client";

interface SettingsErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function SettingsError({
  error,
  reset,
}: SettingsErrorProps) {
  return (
    <div
      className="flex min-h-[400px] flex-col items-center justify-center gap-4 text-center"
      role="alert"
    >
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">
          Something went wrong
        </h2>

        <p className="max-w-md text-sm text-muted-foreground">
          We could not load the settings page. Please try again.
        </p>
      </div>

      <button
        type="button"
        onClick={reset}
        className="rounded-lg border px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
      >
        Try again
      </button>

      {process.env.NODE_ENV === "development" && (
        <p className="max-w-lg text-xs text-muted-foreground">
          {error.message}
        </p>
      )}
    </div>
  );
}