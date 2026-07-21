import Link from "next/link";
import {
  ArrowLeft,
  FolderOpen,
} from "lucide-react";

import { ProjectEditForm } from "@/components/projects/ProjectEditForm";
import { requireUser } from "@/lib/auth/require-user";
import { db } from "@/lib/db";

interface ProjectPageProps {
  params: Promise<{
    projectId: string;
  }>;
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const user = await requireUser();
  const { projectId } = await params;

  const project = await db.project.findFirst({
    where: {
      id: projectId,
      ownerId: user.id,
    },
  });

  if (!project) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-8">
        <h1 className="text-2xl font-black text-slate-950">
          Project Not Found
        </h1>

        <p className="mt-2 text-slate-600">
          This project does not exist or you do not have access to it.
        </p>

        <Link
          href="/dashboard/projects"
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-3 font-bold text-white transition hover:bg-slate-800"
        >
          <ArrowLeft size={18} />
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <Link
        href="/dashboard/projects"
        className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 transition hover:text-slate-950"
      >
        <ArrowLeft size={18} />
        Back to Projects
      </Link>

      <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-start">
        <div className="flex items-start gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100">
            <FolderOpen
              size={28}
              className="text-blue-600"
            />
          </div>

          <div>
            <h1 className="text-3xl font-black text-slate-950">
              {project.name}
            </h1>

            <p className="mt-2 text-slate-600">
              {project.description ||
                "No description provided."}
            </p>
          </div>
        </div>

        <ProjectEditForm
  projectId={project.id}
  initialName={project.name}
  initialDescription={project.description}
  initialStatus={project.status}
  initialVisibility={project.visibility}
/>
        
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <p className="text-sm font-semibold text-slate-500">
            Status
          </p>

          <p className="mt-2 text-xl font-black text-slate-950">
            {project.status}
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <p className="text-sm font-semibold text-slate-500">
            Visibility
          </p>

          <p className="mt-2 text-xl font-black text-slate-950">
            {project.visibility}
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <p className="text-sm font-semibold text-slate-500">
            Created
          </p>

          <p className="mt-2 text-xl font-black text-slate-950">
            {project.createdAt.toLocaleDateString()}
          </p>
        </div>
      </div>

      <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-10 text-center">
        <h2 className="text-xl font-bold text-slate-950">
          Project Workspace
        </h2>

        <p className="mt-2 text-slate-600">
          AI tools, workflows, and project resources will be connected here in the next roadmap stages.
        </p>
      </div>
    </div>
  );
}