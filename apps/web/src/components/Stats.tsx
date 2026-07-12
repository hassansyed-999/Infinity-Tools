import {
  Bot,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

import { branding } from "../lib/branding";

const stats = [
  {
    title: "AI Tools",
    value: branding.stats.tools,
    description: "Powerful builders and utilities",
    icon: Bot,
    iconColor: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    title: "Active Builders",
    value: branding.stats.builders,
    description: "Developers building every day",
    icon: Users,
    iconColor: "text-violet-600",
    bgColor: "bg-violet-50",
  },
  {
    title: "Platform Uptime",
    value: branding.stats.uptime,
    description: "Reliable infrastructure",
    icon: ShieldCheck,
    iconColor: "text-emerald-600",
    bgColor: "bg-emerald-50",
  },
  {
    title: "AI Powered",
    value: "24/7",
    description: "Always ready to assist",
    icon: Sparkles,
    iconColor: "text-amber-600",
    bgColor: "bg-amber-50",
  },
];

export function Stats() {
  return (
    <section className="bg-gradient-to-b from-white to-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
            Platform Overview
          </p>

          <h2 className="mt-4 text-4xl font-black text-slate-900 md:text-5xl">
            Built for Scale
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Infinity Tools combines modern AI, scalable architecture,
            and developer-focused workflows into one unified platform.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.title}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
              >
                <div
                  className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl ${stat.bgColor}`}
                >
                  <Icon
                    size={30}
                    className={stat.iconColor}
                  />
                </div>

                <h3 className="text-4xl font-black text-slate-900">
                  {stat.value}
                </h3>

                <p className="mt-2 text-lg font-semibold text-slate-800">
                  {stat.title}
                </p>

                <p className="mt-3 leading-7 text-slate-600">
                  {stat.description}
                </p>

                <div className="mt-8 h-1 w-12 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 transition-all duration-300 group-hover:w-20" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}