import Link from "next/link";

export default function AnalyticsNotFound() {
  return (
    <div className="flex min-h-[400px] items-center justify-center px-4">
      <div className="w-full max-w-lg rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-slate-100">
          <span
            aria-hidden="true"
            className="text-xl font-bold text-slate-700"
          >
            404
          </span>
        </div>

        <h2 className="mt-5 text-xl font-bold text-slate-900">
          Analytics page not found
        </h2>

        <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-600">
          The analytics page you are looking for could not be found.
        </p>

        <Link
          href="/dashboard"
          className="mt-6 inline-flex min-h-11 items-center justify-center rounded-lg bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
        >
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
}