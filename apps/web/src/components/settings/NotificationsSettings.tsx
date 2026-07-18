"use client";

import { useState } from "react";
import {
  Bell,
  Check,
  Mail,
  MessageSquare,
  Save,
  Sparkles,
} from "lucide-react";

interface NotificationPreferences {
  email: boolean;
  productUpdates: boolean;
  projectActivity: boolean;
  securityAlerts: boolean;
}

export function NotificationsSettings() {
  const [preferences, setPreferences] =
    useState<NotificationPreferences>({
      email: true,
      productUpdates: true,
      projectActivity: true,
      securityAlerts: true,
    });

  const [saved, setSaved] = useState(false);

  function updatePreference(
    key: keyof NotificationPreferences,
  ) {
    setPreferences((current) => ({
      ...current,
      [key]: !current[key],
    }));

    setSaved(false);
  }

  function handleSave() {
    setSaved(true);

    window.setTimeout(() => {
      setSaved(false);
    }, 2500);
  }

  return (
    <div className="space-y-6">
      <div className="flex items-start gap-3 rounded-2xl border border-violet-100 bg-violet-50 p-4">
        <Bell
          className="mt-0.5 h-6 w-6 shrink-0 text-violet-600"
          aria-hidden="true"
        />

        <div>
          <p className="font-medium text-violet-900">
            Notification preferences
          </p>

          <p className="text-sm text-violet-700">
            Choose how Infinity Tools keeps you informed.
          </p>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="space-y-5">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-5">
            <Mail
              className="h-5 w-5 text-blue-600"
              aria-hidden="true"
            />

            <div>
              <h2 className="font-semibold text-slate-900">
                Email Notifications
              </h2>

              <p className="text-sm text-slate-500">
                Manage the emails you receive from the platform.
              </p>
            </div>
          </div>

          <NotificationToggle
            icon={Mail}
            iconClassName="text-blue-600"
            title="Email notifications"
            description="Receive important updates and account notifications by email."
            enabled={preferences.email}
            onChange={() => updatePreference("email")}
          />

          <NotificationToggle
            icon={Sparkles}
            iconClassName="text-amber-600"
            title="Product updates"
            description="Receive news about new features and improvements."
            enabled={preferences.productUpdates}
            onChange={() =>
              updatePreference("productUpdates")
            }
          />

          <NotificationToggle
            icon={MessageSquare}
            iconClassName="text-emerald-600"
            title="Project activity"
            description="Get notified about activity related to your projects."
            enabled={preferences.projectActivity}
            onChange={() =>
              updatePreference("projectActivity")
            }
          />

          <NotificationToggle
            icon={Bell}
            iconClassName="text-red-600"
            title="Security alerts"
            description="Receive important security and account alerts."
            enabled={preferences.securityAlerts}
            onChange={() =>
              updatePreference("securityAlerts")
            }
          />

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
                    Notification preferences saved successfully.
                  </span>
                </>
              ) : (
                <span className="text-slate-500">
                  Your notification preferences are saved locally.
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

              Save preferences
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

interface NotificationToggleProps {
  icon: typeof Bell;
  iconClassName: string;
  title: string;
  description: string;
  enabled: boolean;
  onChange: () => void;
}

function NotificationToggle({
  icon: Icon,
  iconClassName,
  title,
  description,
  enabled,
  onChange,
}: NotificationToggleProps) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-xl border border-slate-200 p-4">
      <div className="flex min-w-0 items-center gap-3">
        <div className="rounded-xl bg-slate-50 p-2">
          <Icon
            className={`h-5 w-5 ${iconClassName}`}
            aria-hidden="true"
          />
        </div>

        <div className="min-w-0">
          <p className="font-medium text-slate-900">
            {title}
          </p>

          <p className="text-sm text-slate-500">
            {description}
          </p>
        </div>
      </div>

      <button
        type="button"
        role="switch"
        aria-checked={enabled}
        aria-label={`Toggle ${title}`}
        onClick={onChange}
        className={[
          "relative h-6 w-11 shrink-0 rounded-full transition-colors",
          enabled ? "bg-emerald-600" : "bg-slate-300",
        ].join(" ")}
      >
        <span
          className={[
            "absolute top-1 h-4 w-4 rounded-full bg-white shadow-sm transition-transform",
            enabled ? "translate-x-6" : "translate-x-1",
          ].join(" ")}
        />
      </button>
    </div>
  );
}