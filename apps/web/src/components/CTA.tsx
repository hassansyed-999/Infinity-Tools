import { Button } from "./Button";

export function CTA() {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600" />

      {/* Glow */}
      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-violet-400/20 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-100">
          Ready to Build?
        </p>

        <h2 className="text-4xl font-black tracking-tight text-white md:text-5xl">
          Create Faster with AI-Powered Development
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
          Build websites, AI agents, games, automations, and developer tools
          from one unified platform designed for creators.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button>Get Started Free</Button>

          <Button
            variant="secondary"
            href="#features"
          >
            Explore Features
          </Button>
        </div>
      </div>
    </section>
  );
}