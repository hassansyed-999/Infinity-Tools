"use client";

interface AIToolFiltersProps {
  category: string;
  pricing: string;
  onCategoryChange: (value: string) => void;
  onPricingChange: (value: string) => void;
}

const categories = [
  "All",
  "Chatbot",
  "Image",
  "Video",
  "Audio",
  "Code",
  "Writing",
  "Productivity",
  "Marketing",
  "Developer",
  "Education",
];

const pricingOptions = [
  "All",
  "Free",
  "Freemium",
  "Paid",
  "Subscription",
];

export function AIToolFilters({
  category,
  pricing,
  onCategoryChange,
  onPricingChange,
}: AIToolFiltersProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <div>
        <label
          htmlFor="tool-category"
          className="mb-2 block text-sm font-bold text-slate-900"
        >
          Category
        </label>

        <select
          id="tool-category"
          value={category}
          onChange={(event) =>
            onCategoryChange(event.target.value)
          }
          className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-200"
        >
          {categories.map((item) => (
            <option
              key={item}
              value={item}
            >
              {item}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="tool-pricing"
          className="mb-2 block text-sm font-bold text-slate-900"
        >
          Pricing
        </label>

        <select
          id="tool-pricing"
          value={pricing}
          onChange={(event) =>
            onPricingChange(event.target.value)
          }
          className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-200"
        >
          {pricingOptions.map((item) => (
            <option
              key={item}
              value={item}
            >
              {item}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}