"use client";

import { useState } from "react";

export function GeneralSettings() {
  const [language, setLanguage] = useState("English");
  const [timezone, setTimezone] = useState("UTC");
  const [saved, setSaved] = useState(false);

  function handleSave() {
    setSaved(true);

    window.setTimeout(() => {
      setSaved(false);
    }, 2000);
  }

  return (
    <div className="space-y-6 rounded-xl border p-6">
      <div className="space-y-2">
        <label
          htmlFor="language"
          className="text-sm font-medium"
        >
          Language
        </label>

        <select
          id="language"
          value={language}
          onChange={(event) =>
            setLanguage(event.target.value)
          }
          className="w-full rounded-lg border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
        >
          <option value="English">English</option>
          <option value="Urdu">Urdu</option>
        </select>
      </div>

      <div className="space-y-2">
        <label
          htmlFor="timezone"
          className="text-sm font-medium"
        >
          Timezone
        </label>

        <select
          id="timezone"
          value={timezone}
          onChange={(event) =>
            setTimezone(event.target.value)
          }
          className="w-full rounded-lg border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
        >
          <option value="UTC">UTC</option>
          <option value="Asia/Karachi">
            Asia/Karachi
          </option>
          <option value="America/New_York">
            America/New_York
          </option>
          <option value="Europe/London">
            Europe/London
          </option>
        </select>
      </div>

      <div className="flex items-center justify-between gap-4 border-t pt-6">
        <p
          className="text-sm text-muted-foreground"
          role="status"
        >
          {saved
            ? "Settings saved successfully."
            : "Changes are applied to your preferences."}
        </p>

        <button
          type="button"
          onClick={handleSave}
          className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-700"
        >
          Save changes
        </button>
      </div>
    </div>
  );
}