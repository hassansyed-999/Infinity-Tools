"use client";

import { ReactNode } from "react";

type ThemeProviderProps = {
  children: ReactNode;
};

export function ThemeProvider({ children }: ThemeProviderProps) {
  return <>{children}</>;
}