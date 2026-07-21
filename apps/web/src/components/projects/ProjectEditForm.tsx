"use client";

import { FormEvent, useState } from "react";
import {
  AlertTriangle,
  Loader2,
  Pencil,
  Trash2,
  X,
} from "lucide-react";

interface ProjectEditFormProps {
  projectId: string;
  initialName: string;
  initialDescription: string | null;
  initialStatus: "DRAFT" | "ACTIVE" | "ARCHIVED";
  initialVisibility: "PRIVATE" | "PUBLIC";
}

export function ProjectEditForm({
  projectId,
  initialName,
  initialDescription,
  initialStatus,
  initialVisibility,
}: ProjectEditFormProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const [name, setName] = useState(initialName);

  const [description, setDescription] = useState(
    initialDescription ?? "",
  );

  const [status, setStatus] = useState(initialStatus);

  const [visibility, setVisibility] =
    useState(initialVisibility);

  const [isSubmitting, setIsSubmitting] =
    useState(false);

  const [error, setError] = useState("");

  async function handleSubmit(
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
      const response = await fetch(
        `/api/projects/${projectId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            name,
            description,
            status,
            visibility,
          }),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error ??
            "Unable to update project.",
        );
      }

      window.location.reload();
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Unable to update project.",
      );

      setIsSubmitting(false);
    }
  }

  async function handleDelete() {
    const confirmed = window.confirm(
      `Are you sure you want to delete "${initialName}"? This action cannot be undone.`,
    );

    if (!confirmed) {
      return;
    }

    setIsDeleting(true);
    setError("");

    try {
      const response = await fetch(
        `/api/projects/${projectId}`,
        {
          method: "DELETE",
        },
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error ??
            "Unable to delete project.",
        );
      }

      window.location.href =
        "/dashboard/projects";
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Unable to delete project.",
      );

      setIsDeleting(false);
    }
  }

  if (!isEditing) {
    return (
      <div className="flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={() => {
            setError("");
            setIsEditing(true);
          }}
          className="flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-3 font-bold text-slate-900 transition hover:bg-slate-50"
        >
          <Pencil size={18} />
          Edit Project
        </button>

        <button
          type="button"
          onClick={handleDelete}
          disabled={isDeleting}
          className="flex items-center gap-2 rounded-xl border border-red-200 bg-white px-4 py-3 font-bold text-red-600 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isDeleting ? (
            <Loader2
              size={18}
              className="animate-spin"
            />
          ) : (
            <Trash2 size={18} />
          )}

          {isDeleting
            ? "Deleting..."
            : "Delete Project"}
        </button>

        {error && (
          <div className="basis-full rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
            {error}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="w-full max-w-lg rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-bold text-slate-950">
          Edit Project
        </h2>

        <button
          type="button"
          onClick={() => {
            setIsEditing(false);
            setError("");
          }}
          className="rounded-lg p-2 text-slate-600 transition hover:bg-slate-100 hover:text-slate-950"
          aria-label="Close"
        >
          <X size={20} />
        </button>
      </div>

      {error && (
        <div className="mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
          {error}
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="space-y-5"
      >
        <div>
          <label className="mb-2 block text-sm font-bold text-slate-900">
            Project Name
          </label>

          <input
            value={name}
            onChange={(event) =>
              setName(event.target.value)
            }
            maxLength={100}
            required
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-200"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-bold text-slate-900">
            Description
          </label>

          <textarea
            rows={4}
            value={description}
            onChange={(event) =>
              setDescription(event.target.value)
            }
            className="w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-200"
          />
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-bold text-slate-900">
              Status
            </label>

            <select
              value={status}
              onChange={(event) =>
                setStatus(
                  event.target.value as
                    | "DRAFT"
                    | "ACTIVE"
                    | "ARCHIVED",
                )
              }
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-200"
            >
              <option value="DRAFT">
                Draft
              </option>

              <option value="ACTIVE">
                Active
              </option>

              <option value="ARCHIVED">
                Archived
              </option>
            </select>
          </div>
                    <div>
            <label className="mb-2 block text-sm font-bold text-slate-900">
              Visibility
            </label>

            <select
              value={visibility}
              onChange={(event) =>
                setVisibility(
                  event.target.value as
                    | "PRIVATE"
                    | "PUBLIC",
                )
              }
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-200"
            >
              <option value="PRIVATE">
                Private
              </option>

              <option value="PUBLIC">
                Public
              </option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 font-bold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting && (
            <Loader2
              size={18}
              className="animate-spin"
            />
          )}

          {isSubmitting
            ? "Saving..."
            : "Save Changes"}
        </button>
      </form>

      <div className="mt-8 border-t border-slate-200 pt-6">
        <div className="mb-4 flex items-start gap-3">
          <AlertTriangle
            size={20}
            className="mt-0.5 shrink-0 text-red-600"
          />

          <div>
            <h3 className="font-bold text-slate-950">
              Danger Zone
            </h3>

            <p className="mt-1 text-sm text-slate-600">
              Deleting this project permanently removes it from
              your workspace. This action cannot be undone.
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={handleDelete}
          disabled={isDeleting}
          className="flex items-center gap-2 rounded-xl border border-red-200 px-4 py-3 font-bold text-red-600 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isDeleting ? (
            <Loader2
              size={18}
              className="animate-spin"
            />
          ) : (
            <Trash2 size={18} />
          )}

          {isDeleting
            ? "Deleting..."
            : "Delete Project"}
        </button>
      </div>
    </div>
  );
}