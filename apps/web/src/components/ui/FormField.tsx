import { ReactNode } from "react";
import { Label } from "./Label";

interface FormFieldProps {
  label: string;
  htmlFor: string;
  required?: boolean;
  error?: string;
  hint?: string;
  children: ReactNode;
  className?: string;
}

export function FormField({
  label,
  htmlFor,
  required = false,
  error,
  hint,
  children,
  className = "",
}: FormFieldProps) {
  return (
    <div className={`space-y-2.5 ${className}`}>
      <Label htmlFor={htmlFor} required={required}>
        {label}
      </Label>

      {children}

      {error ? (
        <p className="text-sm text-red-600">
          {error}
        </p>
      ) : hint ? (
        <p className="text-sm text-slate-500">
          {hint}
        </p>
      ) : null}
    </div>
  );
}