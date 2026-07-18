import { LabelHTMLAttributes } from "react";

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
}

export function Label({
  children,
  required = false,
  className = "",
  ...props
}: LabelProps) {
  return (
    <label
      className={`
        mb-2
        block
        text-sm
        font-semibold
        text-slate-700
        ${className}
      `}
      {...props}
    >
      {children}

      {required && (
        <span className="ml-1 text-red-500">*</span>
      )}
    </label>
  );
}