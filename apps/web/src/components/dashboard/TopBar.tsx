export function TopBar() {
  return (
    <header className="sticky top-0 z-30 flex h-20 items-center justify-between border-b border-gray-200 bg-white px-8">
      {/* Search */}
      <div className="w-full max-w-lg">
        <input
          type="text"
          placeholder="Search AI tools, projects, agents..."
          className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:bg-white"
        />
      </div>

      {/* Right Side */}
      <div className="ml-8 flex items-center gap-4">
        <button className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white transition hover:bg-gray-100">
          🔔
        </button>

        <button className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white transition hover:bg-gray-100">
          ⚙️
        </button>

        <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-violet-600 font-bold text-white">
            H
          </div>

          <div>
            <p className="text-sm font-semibold text-gray-900">
              Hassan
            </p>

            <p className="text-xs text-gray-500">
              Free Plan
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}