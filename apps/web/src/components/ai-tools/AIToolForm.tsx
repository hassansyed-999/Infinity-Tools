"use client";

import { FormEvent, useState } from "react";
import { Loader2, Trash2 } from "lucide-react";

interface AIToolFormProps {
  mode?: "create" | "edit";
  initialValues?: {
    name: string;
    description: string;
    category: string;
    website: string;
    pricing: string;
    icon: string;
  };
  toolId?: string;
}

export function AIToolForm({
  mode = "create",
  initialValues,
  toolId,
}: AIToolFormProps) {
  const [name, setName] = useState(initialValues?.name ?? "");
  const [description, setDescription] = useState(
    initialValues?.description ?? "",
  );
  const [category, setCategory] = useState(
    initialValues?.category ?? "",
  );
  const [website, setWebsite] = useState(
    initialValues?.website ?? "",
  );
  const [pricing, setPricing] = useState(
    initialValues?.pricing ?? "Free",
  );
  const [icon, setIcon] = useState(
    initialValues?.icon ?? "",
  );

  const [loading, setLoading] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        mode === "create"
          ? "/api/ai-tools"
          : `/api/ai-tools/${toolId}`,
        {
          method:
            mode === "create"
              ? "POST"
              : "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            description,
            category,
            website,
            pricing,
            icon,
          }),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Something went wrong.",
        );
      }

      window.location.href =
        mode === "create"
          ? `/dashboard/ai-tools/${data.tool.id}`
          : `/dashboard/ai-tools/${toolId}`;
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Something went wrong.",
      );
      setLoading(false);
    }
  }

  async function handleDelete() {
    if (!toolId) {
      return;
    }

    const confirmed = window.confirm(
      "Are you sure you want to permanently delete this AI Tool?",
    );

    if (!confirmed) {
      return;
    }

    setDeleting(true);
    setError("");

    try {
      const response = await fetch(
        `/api/ai-tools/${toolId}`,
        {
          method: "DELETE",
        },
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Unable to delete tool.",
        );
      }

      window.location.href = "/dashboard/ai-tools";
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Unable to delete tool.",
      );

      setDeleting(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
    >
      <h1 className="text-3xl font-black text-slate-950">
        {mode === "create"
          ? "Create AI Tool"
          : "Edit AI Tool"}
      </h1>

      {error && (
        <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-red-700">
          {error}
        </div>
      )}

      <div>
        <label className="mb-2 block font-bold">
          Tool Name
        </label>

        <input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-xl border border-slate-300 px-4 py-3"
        />
      </div>

      <div>
        <label className="mb-2 block font-bold">
          Description
        </label>

        <textarea
          rows={5}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full rounded-xl border border-slate-300 px-4 py-3"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="mb-2 block font-bold">
            Category
          </label>

          <input
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full rounded-xl border border-slate-300 px-4 py-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-bold">
            Pricing
          </label>

          <select
            value={pricing}
            onChange={(e) => setPricing(e.target.value)}
            className="w-full rounded-xl border border-slate-300 px-4 py-3"
          >
            <option>Free</option>
            <option>Freemium</option>
            <option>Paid</option>
            <option>Subscription</option>
          </select>
        </div>
      </div>
            <div>
        <label className="mb-2 block font-bold">
          Website
        </label>

        <input
          type="url"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          placeholder="https://example.com"
          className="w-full rounded-xl border border-slate-300 px-4 py-3"
        />
      </div>

      <div>
        <label className="mb-2 block font-bold">
          Icon URL
        </label>

        <input
          type="url"
          value={icon}
          onChange={(e) => setIcon(e.target.value)}
          placeholder="https://example.com/icon.png"
          className="w-full rounded-xl border border-slate-300 px-4 py-3"
        />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          type="submit"
          disabled={loading || deleting}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-violet-600 px-5 py-3 font-bold text-white transition hover:bg-violet-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading && (
            <Loader2
              size={18}
              className="animate-spin"
            />
          )}

          {mode === "create"
            ? "Create Tool"
            : "Save Changes"}
        </button>

        {mode === "edit" && (
          <button
            type="button"
            onClick={handleDelete}
            disabled={loading || deleting}
            className="flex items-center justify-center gap-2 rounded-xl border border-red-300 px-5 py-3 font-bold text-red-600 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {deleting ? (
              <Loader2
                size={18}
                className="animate-spin"
              />
            ) : (
              <Trash2 size={18} />
            )}

            {deleting
              ? "Deleting..."
              : "Delete Tool"}
          </button>
        )}
      </div>
    </form>
  );
}