import { forwardRef, TextareaHTMLAttributes } from "react";

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
}

export const Textarea = forwardRef<
  HTMLTextAreaElement,
  TextareaProps
>(({ className = "", error = false, disabled, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      disabled={disabled}
      className={`
        w-full
        min-h-[120px]
        rounded-xl
        border
        bg-white
        px-4
        py-3
        text-sm
        text-slate-900
        placeholder:text-slate-400
        shadow-sm
        transition-all
        duration-200
        outline-none
        resize-y
        focus:shadow-md
        disabled:cursor-not-allowed
        disabled:bg-slate-100
        disabled:text-slate-500
        ${
          error
            ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200"
            : "border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        }
        ${className}
      `}
      {...props}
    />
  );
});

Textarea.displayName = "Textarea";