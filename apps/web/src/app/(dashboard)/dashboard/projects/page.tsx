"use client";

import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import { FolderOpen, Loader2, Plus, X } from "lucide-react";

import { EmptyState } from "../../../../components/ui";

interface Project {
  id: string;
  name: string;
  description: string | null;
  status: string;
  visibility: string;
  createdAt: string;
  updatedAt: string;
}

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isCreating, setIsCreating] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  async function loadProjects() {
    try {
      setError("");

      const response = await fetch("/api/projects");

      if (!response.ok) {
        throw new Error("Unable to load projects.");
      }

      const data = await response.json();

      setProjects(data.projects);
    } catch {
      setError("Unable to load your projects.");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    void loadProjects();
  }, []);

  async function handleCreateProject(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    if (!name.trim()) {
      setError("Project name is required.");
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          description,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Unable to create project.",
        );
      }

      setProjects((currentProjects) => [
        data.project,
        ...currentProjects,
      ]);

      setName("");
      setDescription("");
      setIsCreating(false);
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Unable to create project.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isLoading) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <Loader2
          className="h-8 w-8 animate-spin text-slate-700"
        />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-slate-950">
            Projects
          </h1>

          <p className="mt-2 text-slate-600">
            Manage your websites, games, automations, and AI
            workflows.
          </p>
        </div>

        <button
          type="button"
          onClick={() => {
            setError("");
            setIsCreating(true);
          }}
          className="flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-3 font-bold text-white transition hover:bg-slate-800"
        >
          <Plus size={18} />
          Create Project
        </button>
      </div>

      {error && (
        <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
          {error}
        </div>
      )}

      {isCreating && (
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-bold text-slate-950">
              Create New Project
            </h2>

            <button
              type="button"
              onClick={() => {
                setIsCreating(false);
                setError("");
              }}
              className="rounded-lg p-2 text-slate-600 transition hover:bg-slate-100 hover:text-slate-950"
              aria-label="Close"
            >
              <X size={20} />
            </button>
          </div>

          <form
            onSubmit={handleCreateProject}
            className="space-y-5"
          >
            <div>
              <label
                htmlFor="project-name"
                className="mb-2 block text-sm font-bold text-slate-900"
              >
                Project Name
              </label>

              <input
                id="project-name"
                value={name}
                onChange={(event) =>
                  setName(event.target.value)
                }
                maxLength={100}
                required
                placeholder="My amazing project"
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-950 placeholder:text-slate-500 outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-200"
              />
            </div>

            <div>
              <label
                htmlFor="project-description"
                className="mb-2 block text-sm font-bold text-slate-900"
              >
                Description
              </label>

              <textarea
                id="project-description"
                value={description}
                onChange={(event) =>
                  setDescription(event.target.value)
                }
                rows={4}
                placeholder="What are you building?"
                className="w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-950 placeholder:text-slate-500 outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-200"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 font-bold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting && (
                <Loader2
                  size={18}
                  className="animate-spin"
                />
              )}

              {isSubmitting
                ? "Creating..."
                : "Create Project"}
            </button>
          </form>
        </div>
      )}

      {projects.length === 0 ? (
        <EmptyState
          icon={
            <FolderOpen
              size={32}
              className="text-blue-600"
            />
          }
          title="No Projects Yet"
          description="Create your first project to start building websites, games, automations, and AI workflows."
          action={
            <button
              type="button"
              onClick={() => setIsCreating(true)}
              className="flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 font-bold text-white transition hover:bg-slate-800"
            >
              <Plus size={18} />
              Create Your First Project
            </button>
          }
        />
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.id}
              href={`/dashboard/projects/${project.id}`}
              className="group block rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-slate-300 hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 transition group-hover:bg-slate-200">
                <FolderOpen
                  size={24}
                  className="text-blue-600"
                />
              </div>

              <h2 className="text-lg font-bold text-slate-950">
                {project.name}
              </h2>

              <p className="mt-2 line-clamp-3 text-sm text-slate-600">
                {project.description ||
                  "No description provided."}
              </p>

              <div className="mt-5 flex items-center justify-between text-xs font-semibold text-slate-500">
                <span>{project.status}</span>
                <span>{project.visibility}</span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}