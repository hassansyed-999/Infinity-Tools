import { ToastData } from "./types";

interface ToastProps {
  toast: ToastData;
  onClose: (id: string) => void;
}

const variants = {
  success:
    "border-emerald-200 bg-emerald-50 text-emerald-900",

  error:
    "border-red-200 bg-red-50 text-red-900",

  warning:
    "border-amber-200 bg-amber-50 text-amber-900",

  info:
    "border-blue-200 bg-blue-50 text-blue-900",
} as const;

export function Toast({
  toast,
  onClose,
}: ToastProps) {
  return (
    <div
      className={`
        w-96
        rounded-xl
        border
        p-4
        shadow-lg
        transition-all
        duration-300
        ${variants[toast.variant]}
      `}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h4 className="font-semibold">
            {toast.title}
          </h4>

          {toast.description && (
            <p className="mt-1 text-sm opacity-80">
              {toast.description}
            </p>
          )}
        </div>

        <button
          type="button"
          onClick={() => onClose(toast.id)}
          className="text-lg leading-none opacity-70 hover:opacity-100"
        >
          ×
        </button>
      </div>
    </div>
  );
}