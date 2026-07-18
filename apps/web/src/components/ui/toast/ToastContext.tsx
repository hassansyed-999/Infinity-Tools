"use client";

import {
  createContext,
  useContext,
} from "react";
import { ToastVariant } from "./types";

export interface ToastContextValue {
  show: (
    variant: ToastVariant,
    title: string,
    description?: string,
    duration?: number
  ) => void;

  success: (
    title: string,
    description?: string
  ) => void;

  error: (
    title: string,
    description?: string
  ) => void;

  warning: (
    title: string,
    description?: string
  ) => void;

  info: (
    title: string,
    description?: string
  ) => void;
}

export const ToastContext =
  createContext<ToastContextValue | null>(null);

export function useToast() {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error(
      "useToast must be used inside ToastProvider."
    );
  }

  return context;
}