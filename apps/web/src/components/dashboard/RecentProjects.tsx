import { FolderKanban } from "lucide-react";

import { recentProjects } from "../../lib/dashboard";

export function RecentProjects() {
  return (
    <section>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-900">
          Recent Projects
        </h2>

        <p className="mt-1 text-slate-600">
          Continue working on your latest projects.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
        {recentProjects.map((project, index) => (
          <div
            key={project.name}
            className={`flex items-center justify-between p-5 ${
              index !== recentProjects.length - 1
                ? "border-b border-slate-200"
                : ""
            }`}
          >
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                <FolderKanban
                  size={20}
                  className="text-blue-600"
                />
              </div>

              <div>
                <h3 className="font-semibold text-slate-900">
                  {project.name}
                </h3>

                <p className="text-sm text-slate-600">
                  {project.status}
                </p>
              </div>
            </div>

            <button className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100">
              Open
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}