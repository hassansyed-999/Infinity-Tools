"use client";

import { useState } from "react";
import { Bookmark, Loader2 } from "lucide-react";

interface BookmarkButtonProps {
  toolId: string;
  initialBookmarked?: boolean;
}

export function BookmarkButton({
  toolId,
  initialBookmarked = false,
}: BookmarkButtonProps) {
  const [bookmarked, setBookmarked] = useState(initialBookmarked);
  const [loading, setLoading] = useState(false);

  async function toggleBookmark() {
    if (loading) {
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        `/api/ai-tools/${toolId}/bookmark`,
        {
          method: bookmarked ? "DELETE" : "POST",
        },
      );

      if (!response.ok) {
        throw new Error("Unable to update bookmark.");
      }

      setBookmarked(!bookmarked);
    } catch (error) {
      console.error(error);
      alert("Unable to update bookmark.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      type="button"
      onClick={toggleBookmark}
      disabled={loading}
      className={`inline-flex items-center gap-2 rounded-xl px-5 py-3 font-bold transition ${
        bookmarked
          ? "bg-amber-500 text-white hover:bg-amber-600"
          : "border border-slate-300 bg-white text-slate-900 hover:bg-slate-50"
      } disabled:cursor-not-allowed disabled:opacity-60`}
    >
      {loading ? (
        <Loader2
          size={18}
          className="animate-spin"
        />
      ) : (
        <Bookmark
          size={18}
          fill={bookmarked ? "currentColor" : "none"}
        />
      )}

      {bookmarked ? "Bookmarked" : "Bookmark"}
    </button>
  );
}