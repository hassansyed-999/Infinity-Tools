import { ToastData } from "./types";
import { Toast } from "./Toast";

interface ToastContainerProps {
  toasts: ToastData[];
  onClose: (id: string) => void;
}

export function ToastContainer({
  toasts,
  onClose,
}: ToastContainerProps) {
  return (
    <div
      className="
        fixed
        top-6
        right-6
        z-[100]
        flex
        flex-col
        gap-3
      "
    >
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          toast={toast}
          onClose={onClose}
        />
      ))}
    </div>
  );
}