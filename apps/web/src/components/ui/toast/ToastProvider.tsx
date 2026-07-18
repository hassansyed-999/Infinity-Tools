"use client";

import {
  ReactNode,
  useCallback,
  useMemo,
  useState,
} from "react";

import { ToastContainer } from "./ToastContainer";
import { ToastContext } from "./ToastContext";
import {
  ToastData,
  ToastVariant,
} from "./types";

interface ToastProviderProps {
  children: ReactNode;
}

export function ToastProvider({
  children,
}: ToastProviderProps) {
  const [toasts, setToasts] = useState<ToastData[]>([]);

  const remove = useCallback((id: string) => {
    setToasts((prev) =>
      prev.filter((toast) => toast.id !== id)
    );
  }, []);

  const show = useCallback(
    (
      variant: ToastVariant,
      title: string,
      description?: string,
      duration = 4000
    ) => {
      const id = crypto.randomUUID();

      setToasts((prev) => [
        ...prev,
        {
          id,
          variant,
          title,
          description,
          duration,
        },
      ]);

      window.setTimeout(() => {
        remove(id);
      }, duration);
    },
    [remove]
  );

  const value = useMemo(
    () => ({
      show,

      success: (
        title: string,
        description?: string
      ) =>
        show(
          "success",
          title,
          description
        ),

      error: (
        title: string,
        description?: string
      ) =>
        show(
          "error",
          title,
          description
        ),

      warning: (
        title: string,
        description?: string
      ) =>
        show(
          "warning",
          title,
          description
        ),

      info: (
        title: string,
        description?: string
      ) =>
        show(
          "info",
          title,
          description
        ),
    }),
    [show]
  );

  return (
    <ToastContext.Provider value={value}>
      {children}

      <ToastContainer
        toasts={toasts}
        onClose={remove}
      />
    </ToastContext.Provider>
  );
}