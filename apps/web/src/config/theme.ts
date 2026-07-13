export const theme = {
  colors: {
    primary: {
      50: "bg-blue-50",
      100: "bg-blue-100",
      500: "bg-blue-500",
      600: "bg-blue-600",
      700: "bg-blue-700",
    },

    secondary: {
      500: "bg-violet-500",
      600: "bg-violet-600",
    },

    success: {
      500: "bg-emerald-500",
      600: "bg-emerald-600",
    },

    warning: {
      500: "bg-amber-500",
      600: "bg-amber-600",
    },

    danger: {
      500: "bg-red-500",
      600: "bg-red-600",
    },

    surface: {
      primary: "bg-white",
      secondary: "bg-slate-50",
      tertiary: "bg-slate-100",
    },

    text: {
      primary: "text-slate-900",
      secondary: "text-slate-600",
      muted: "text-slate-500",
      inverse: "text-white",
    },

    border: {
      light: "border-slate-200",
      subtle: "border-slate-100",
    },
  },

  gradients: {
    primary: "from-blue-600 via-indigo-600 to-violet-600",
    hero: "from-blue-700 via-indigo-700 to-violet-700",
    subtle: "from-slate-50 via-white to-slate-100",
  },

  radius: {
    sm: "rounded-lg",
    md: "rounded-xl",
    lg: "rounded-2xl",
    xl: "rounded-3xl",
    full: "rounded-full",
  },

  spacing: {
    xs: "p-2",
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
    xl: "p-10",
  },

  shadows: {
    sm: "shadow-sm",
    md: "shadow",
    lg: "shadow-lg",
    xl: "shadow-xl",
    hero: "shadow-2xl",
  },

  animation: {
    fast: "transition-all duration-150",
    normal: "transition-all duration-300",
    slow: "transition-all duration-500",
  },

  typography: {
    hero: "text-5xl md:text-6xl font-black",
    heading: "text-4xl font-black",
    section: "text-2xl font-bold",
    body: "text-base leading-7",
    caption: "text-sm",
  },
} as const;

export type Theme = typeof theme;