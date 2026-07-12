"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What is Infinity Tools?",
    answer:
      "Infinity Tools is an all-in-one AI development platform where you can build websites, AI agents, games, automation workflows, documents, and access thousands of productivity tools from one workspace.",
  },
  {
    question: "Will Infinity Tools include more than 1,500 AI tools?",
    answer:
      "Yes. Instead of creating 1,500 completely separate applications, Infinity Tools is built around scalable engines such as Image, PDF, Writing, Video, Audio, Website, Game, and Automation. Each engine powers hundreds of specialized tools.",
  },
  {
    question: "Can I use Infinity Tools for free?",
    answer:
      "Yes. A free plan will provide access to many tools and builders. Premium plans will unlock advanced AI models, higher limits, faster processing, and additional features.",
  },
  {
    question: "Do I need coding experience?",
    answer:
      "No. Infinity Tools is designed for everyone—from beginners using AI builders to professional developers who want complete control over their projects.",
  },
  {
    question: "Which platforms will Infinity Tools support?",
    answer:
      "You'll be able to build websites, browser games, AI agents, automation workflows, documents, and many other projects from a single platform.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-4xl px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100">
            <HelpCircle
              size={30}
              className="text-blue-600"
            />
          </div>

          <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
            Frequently Asked Questions
          </p>

          <h2 className="mt-4 text-4xl font-black text-slate-900 md:text-5xl">
            Everything You Need to Know
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Find answers to the most common questions about
            Infinity Tools and how the platform works.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300"
              >
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="flex w-full items-center justify-between px-8 py-6 text-left"
                >
                  <h3 className="text-lg font-bold text-slate-900">
                    {faq.question}
                  </h3>

                  <ChevronDown
                    size={22}
                    className={`transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-blue-600" : "text-slate-500"
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-slate-100 px-8 py-6">
                      <p className="leading-8 text-slate-600">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}