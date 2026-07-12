import { ArrowRight, Sparkles } from "lucide-react";

import { Button } from "./Button";

export function CTA() {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-indigo-700 to-violet-700" />

      {/* Glow Effects */}
      <div className="absolute -top-24 left-10 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="absolute -bottom-24 right-10 h-72 w-72 rounded-full bg-violet-400/20 blur-3xl" />

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:48px_48px]" />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center px-6 text-center">
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 backdrop-blur">
          <Sparkles
            size={32}
            className="text-white"
          />
        </div>

        <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-100">
          Start Building Today
        </p>

        <h2 className="mt-5 text-4xl font-black leading-tight text-white md:text-6xl">
          Build the Future with
          <br />
          Infinity Tools
        </h2>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-100">
          Create AI agents, websites, games, automation workflows,
          productivity tools, and thousands of intelligent applications
          from one modern development platform.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button>
            Get Started
          </Button>

          <a
            href="#features"
            className="inline-flex items-center gap-2 rounded-2xl border border-white/25 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur transition-all duration-300 hover:bg-white/20"
          >
            Explore Features

            <ArrowRight size={18} />
          </a>
        </div>

        <div className="mt-14 grid w-full gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur">
            <h3 className="text-3xl font-black text-white">
              1500+
            </h3>

            <p className="mt-2 text-blue-100">
              AI Tools
            </p>
          </div>

          <div className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur">
            <h3 className="text-3xl font-black text-white">
              24/7
            </h3>

            <p className="mt-2 text-blue-100">
              AI Assistance
            </p>
          </div>

          <div className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur">
            <h3 className="text-3xl font-black text-white">
              One
            </h3>

            <p className="mt-2 text-blue-100">
              Unified Platform
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}