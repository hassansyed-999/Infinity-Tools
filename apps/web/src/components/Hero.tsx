import {
  Bot,
  Gamepad2,
  Workflow,
} from "lucide-react";

import { branding } from "../lib/branding";
import { Button } from "./Button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f3f4f6_1px,transparent_1px),linear-gradient(to_bottom,#f3f4f6_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Background Glows */}
      <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-blue-400/20 blur-3xl" />
      <div className="absolute -right-32 top-24 h-[30rem] w-[30rem] rounded-full bg-violet-500/20 blur-3xl" />
      <div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center">
        {/* Left Content */}
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
            {branding.hero.badge}
          </p>

          <h1 className="text-5xl font-black leading-tight tracking-tight text-slate-900 md:text-6xl">
            {branding.hero.title}
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            {branding.hero.subtitle}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button>Get Started</Button>

            <Button
              variant="secondary"
             href={branding.github}
             external
             >   
              GitHub
            </Button>
          </div>
        </div>

        {/* Right Dashboard */}
        <div className="rounded-3xl border border-white/40 bg-white/85 p-8 shadow-2xl backdrop-blur-xl">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-slate-900">
                Infinity Workspace
              </h3>

              <p className="text-sm text-slate-500">
                Build faster with AI
              </p>
            </div>

            <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
              ● Online
            </span>
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Bot
                    size={20}
                    className="text-blue-600"
                  />

                  <h4 className="font-semibold text-slate-900">
                    AI Website Builder
                  </h4>
                </div>

                <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-semibold text-green-700">
                  Running
                </span>
              </div>

              <p className="mt-2 text-sm text-slate-600">
                Landing page generated successfully.
              </p>
            </div>

            <div className="rounded-2xl border border-violet-100 bg-violet-50 p-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Gamepad2
                    size={20}
                    className="text-violet-600"
                  />

                  <h4 className="font-semibold text-slate-900">
                    Game Studio
                  </h4>
                </div>

                <span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-semibold text-blue-700">
                  Building
                </span>
              </div>

              <p className="mt-2 text-sm text-slate-600">
                AI is creating game assets.
              </p>
            </div>

            <div className="rounded-2xl border border-amber-100 bg-amber-50 p-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Workflow
                    size={20}
                    className="text-amber-600"
                  />

                  <h4 className="font-semibold text-slate-900">
                    Automation Flow
                  </h4>
                </div>

                <span className="rounded-full bg-amber-100 px-2 py-1 text-xs font-semibold text-amber-700">
                  Pending
                </span>
              </div>

              <p className="mt-2 text-sm text-slate-600">
                Waiting for approval.
              </p>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4 border-t border-slate-200 pt-6 text-center">
            <div>
              <p className="text-2xl font-bold text-slate-900">
                {branding.stats.tools}
              </p>

              <p className="text-sm text-slate-500">
                AI Tools
              </p>
            </div>

            <div>
              <p className="text-2xl font-bold text-slate-900">
                {branding.stats.builders}
              </p>

              <p className="text-sm text-slate-500">
                Builders
              </p>
            </div>

            <div>
              <p className="text-2xl font-bold text-slate-900">
                {branding.stats.uptime}
              </p>

              <p className="text-sm text-slate-500">
                Uptime
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}