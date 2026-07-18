export type ToastVariant =
  | "success"
  | "error"
  | "warning"
  | "info";

export interface ToastData {
  id: string;
  title: string;
  description?: string;
  variant: ToastVariant;
  duration?: number;
}