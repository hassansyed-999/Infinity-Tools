"use client";

import { FormEvent, useState } from "react";
import { Loader2, Plus } from "lucide-react";

import { AI_TOOL_CATEGORIES } from "@/lib/ai-tools/categories";

export function CreateAIToolForm() {
  const [name, setName] = useState("");
  const [description, setDescription] =
    useState("");
  const [category, setCategory] =
    useState("chat");

  const [loading, setLoading] =
    useState(false);

  const [error, setError] = useState("");

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    setError("");

    if (!name.trim()) {
      setError("Tool name is required.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "/api/ai-tools",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            name,
            description,
            category,
          }),
        },
      );

      const data =
        await response.json();

      if (!response.ok) {
        throw new Error(
          data.error ??
            "Unable to create tool.",
        );
      }

      window.location.reload();
    } catch (error) {
      setLoading(false);

      setError(
        error instanceof Error
          ? error.message
          : "Unable to create tool.",
      );
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
    >
      <h2 className="text-2xl font-black text-slate-950">
        Create AI Tool
      </h2>

      {error && (
        <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 font-semibold text-red-700">
          {error}
        </div>
      )}

      <div>
        <label className="mb-2 block text-sm font-bold text-slate-900">
          Tool Name
        </label>

        <input
          value={name}
          onChange={(event) =>
            setName(event.target.value)
          }
          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
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
            setDescription(
              event.target.value,
            )
          }
          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-bold text-slate-900">
          Category
        </label>

        <select
          value={category}
          onChange={(event) =>
            setCategory(
              event.target.value,
            )
          }
          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
        >
          {AI_TOOL_CATEGORIES.map(
            (category) => (
              <option
                key={category.id}
                value={category.id}
              >
                {category.name}
              </option>
            ),
          )}
        </select>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-bold text-white transition hover:bg-blue-700 disabled:opacity-60"
      >
        {loading ? (
          <Loader2
            size={18}
            className="animate-spin"
          />
        ) : (
          <Plus size={18} />
        )}

        {loading
          ? "Creating..."
          : "Create AI Tool"}
      </button>
    </form>
  );
}