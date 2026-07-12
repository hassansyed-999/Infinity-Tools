export const theme = {
  colors: {
    primary: "blue",
    secondary: "violet",
    success: "emerald",
    warning: "amber",
    neutral: "slate",
  },

  gradients: {
    primary:
      "from-blue-600 via-indigo-600 to-violet-600",

    hero:
      "from-blue-700 via-indigo-700 to-violet-700",

    subtle:
      "from-slate-50 via-white to-slate-100",
  },

  radius: {
    button: "rounded-2xl",
    card: "rounded-3xl",
    badge: "rounded-full",
    section: "rounded-[32px]",
  },

  spacing: {
    section: "py-24",
    container: "mx-auto max-w-7xl px-6",
    heading: "mb-16",
  },

  shadows: {
    sm: "shadow-sm",
    lg: "shadow-lg",
    xl: "shadow-xl",
    hero: "shadow-2xl",
  },

  borders: {
    light: "border border-slate-200",
    subtle: "border border-slate-100",
  },

  animation: {
    card:
      "transition-all duration-300 hover:-translate-y-2 hover:shadow-xl",

    button:
      "transition-all duration-300 hover:scale-[1.02]",

    icon:
      "transition-transform duration-300",
  },

  typography: {
    hero: "text-5xl md:text-6xl font-black",
    sectionTitle: "text-4xl md:text-5xl font-black",
    cardTitle: "text-2xl font-bold",
    body: "text-slate-600 leading-7",
    label:
      "text-sm font-bold uppercase tracking-[0.25em] text-blue-600",
  },
} as const;

export type Theme = typeof theme;