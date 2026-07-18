"use client";

import { useState } from "react";
import {
  AtSign,
  Check,
  CircleUserRound,
  Save,
  UserRound,
} from "lucide-react";

export function AccountSettings() {
  const [name, setName] = useState("Hassan");
  const [username, setUsername] = useState("hassan");
  const [email, setEmail] = useState("user@example.com");
  const [saved, setSaved] = useState(false);

  function handleSave() {
    setSaved(true);

    window.setTimeout(() => {
      setSaved(false);
    }, 2500);
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 rounded-2xl border border-blue-100 bg-blue-50 p-4">
        <CircleUserRound
          className="h-6 w-6 shrink-0 text-blue-600"
          aria-hidden="true"
        />

        <div>
          <p className="font-medium text-blue-900">
            Account information
          </p>

          <p className="text-sm text-blue-700">
            Keep your personal information up to date.
          </p>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="space-y-6">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-5">
            <UserRound
              className="h-5 w-5 text-violet-600"
              aria-hidden="true"
            />

            <div>
              <h2 className="font-semibold text-slate-900">
                Personal Information
              </h2>

              <p className="text-sm text-slate-500">
                Update your basic account details.
              </p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="space-y-2">
              <label
                htmlFor="account-name"
                className="text-sm font-medium text-slate-700"
              >
                Full name
              </label>

              <input
                id="account-name"
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="account-username"
                className="text-sm font-medium text-slate-700"
              >
                Username
              </label>

              <div className="relative">
                <AtSign
                  className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-violet-500"
                  aria-hidden="true"
                />

                <input
                  id="account-username"
                  type="text"
                  value={username}
                  onChange={(event) =>
                    setUsername(event.target.value)
                  }
                  className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-9 pr-3 text-sm outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="account-email"
              className="text-sm font-medium text-slate-700"
            >
              Email address
            </label>

            <input
              id="account-email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
            />
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 pt-6">
            <div
              className="flex items-center gap-2 text-sm"
              role="status"
              aria-live="polite"
            >
              {saved ? (
                <>
                  <Check
                    className="h-4 w-4 text-emerald-600"
                    aria-hidden="true"
                  />

                  <span className="text-emerald-600">
                    Account settings saved successfully.
                  </span>
                </>
              ) : (
                <span className="text-slate-500">
                  Changes are saved when you click the button.
                </span>
              )}
            </div>

            <button
              type="button"
              onClick={handleSave}
              className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-slate-700"
            >
              <Save
                className="h-4 w-4 text-emerald-300"
                aria-hidden="true"
              />

              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}