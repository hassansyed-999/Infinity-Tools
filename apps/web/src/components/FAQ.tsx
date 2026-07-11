const faqs = [
  {
    question: "What is Infinity Tools?",
    answer:
      "Infinity Tools is an AI-powered platform for building websites, AI agents, games, automations, and developer tools from one workspace.",
  },
  {
    question: "Do I need coding experience?",
    answer:
      "No. Beginners can build visually with AI, while developers have access to advanced customization and code generation.",
  },
  {
    question: "Can I create Roblox and browser games?",
    answer:
      "Yes. Infinity Tools is designed to support game creation, including Roblox experiences and browser-based games.",
  },
  {
    question: "Will there be a free plan?",
    answer:
      "Yes. A free plan will be available, with optional premium plans offering more AI credits and advanced features.",
  },
  {
    question: "Can teams collaborate?",
    answer:
      "Yes. Team workspaces, shared projects, and collaboration tools are planned as part of the platform.",
  },
  {
    question: "Which AI models will be supported?",
    answer:
      "Infinity Tools is being designed to integrate with multiple leading AI providers, giving users flexibility as the platform grows.",
  },
];

export function FAQ() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
            Frequently Asked Questions
          </p>

          <h2 className="text-4xl font-black tracking-tight text-gray-900">
            Have Questions?
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Everything you need to know about Infinity Tools.
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <h3 className="mb-3 text-lg font-bold text-gray-900">
                {faq.question}
              </h3>

              <p className="leading-7 text-gray-600">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}