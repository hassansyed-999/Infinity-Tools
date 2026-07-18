import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Analytics | Infinity Tools",
  description:
    "Track your Infinity Tools usage, projects, active users, and platform performance.",
};

export default function AnalyticsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}