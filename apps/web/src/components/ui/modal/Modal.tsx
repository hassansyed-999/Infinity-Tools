"use client";

import { ReactNode, useEffect, useRef } from "react";

interface ModalProps {
  open: boolean;
  children: ReactNode;
  className?: string;
  onClose?: () => void;
  size?: "sm" | "md" | "lg" | "xl" | "full";
  closeOnEscape?: boolean;
  closeOnOverlayClick?: boolean;
  ariaLabelledBy?: string;
  ariaDescribedBy?: string;
}

const sizeClasses = {
  sm: "max-w-md",
  md: "max-w-xl",
  lg: "max-w-2xl",
  xl: "max-w-4xl",
  full: "max-w-7xl",
} as const;

export function Modal({
  open,
  children,
  className = "",
  onClose,
  size = "lg",
  closeOnEscape = true,
  closeOnOverlayClick = true,
  ariaLabelledBy,
  ariaDescribedBy,
}: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    modalRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && closeOnEscape) {
        onClose?.();
        return;
      }

      if (event.key !== "Tab" || !modalRef.current) {
        return;
      }

      const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
        'button, a[href], input, textarea, select, [tabindex]:not([tabindex="-1"])'
      );

      if (focusableElements.length === 0) {
        event.preventDefault();
        return;
      }

      const first = focusableElements[0];
      const last = focusableElements[focusableElements.length - 1];

      if (event.shiftKey) {
        if (document.activeElement === first) {
          event.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose, closeOnEscape]);

  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={() => {
          if (closeOnOverlayClick) {
            onClose?.();
          }
        }}
        aria-hidden="true"
      />

      <div
        ref={modalRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-labelledby={ariaLabelledBy}
        aria-describedby={ariaDescribedBy}
        onClick={(event) => event.stopPropagation()}
        className={`
          relative
          z-10
          w-full
          ${sizeClasses[size]}
          rounded-2xl
          bg-white
          shadow-2xl
          outline-none
          ${className}
        `}
      >
        {children}
      </div>
    </div>
  );
}