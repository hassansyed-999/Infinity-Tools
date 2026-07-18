"use client";

import { useEffect } from "react";

interface AnalyticsErrorProps {
  error: Error & {
    digest?: string;
  };
  reset: () => void;
}

export default function AnalyticsError({
  error,
  reset,
}: AnalyticsErrorProps) {
  useEffect(() => {
    console.error("Analytics page error:", error);
  }, [error]);

  return (
    <div className="flex min-h-[400px] items-center justify-center px-4">
      <div
        role="alert"
        className="w-full max-w-lg rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm"
      >
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-slate-100">
          <span
            aria-hidden="true"
            className="text-2xl font-bold text-slate-700"
          >
            !
          </span>
        </div>

        <h2 className="mt-5 text-xl font-bold text-slate-900">
          Analytics temporarily unavailable
        </h2>

        <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-600">
          We could not load the analytics dashboard right now.
          Try again to reload the page and its data.
        </p>

        <button
          type="button"
          onClick={reset}
          className="mt-6 inline-flex min-h-11 items-center justify-center rounded-lg bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
        >
          Try again
        </button>
      </div>
    </div>
  );
}