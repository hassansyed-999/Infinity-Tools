import type { Metadata } from "next";
import { ReactNode } from "react";

import { AuthSessionProvider } from "@/components/auth/AuthSessionProvider";
import { ToastProvider } from "../components/ui/toast";

import "./globals.css";

export const metadata: Metadata = {
  title: "Infinity Tools",
  description:
    "The all-in-one platform for AI tools, automation, websites, games, and more.",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <AuthSessionProvider>
          <ToastProvider>
            {children}
          </ToastProvider>
        </AuthSessionProvider>
      </body>
    </html>
  );
}