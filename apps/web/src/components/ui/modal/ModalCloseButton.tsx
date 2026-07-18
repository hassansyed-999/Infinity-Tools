interface ModalCloseButtonProps {
  onClick?: () => void;
}

export function ModalCloseButton({
  onClick,
}: ModalCloseButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Close modal"
      className="
        inline-flex
        h-10
        w-10
        items-center
        justify-center
        rounded-xl
        text-slate-500
        transition-all
        duration-200
        hover:bg-slate-100
        hover:text-slate-900
        focus:outline-none
        focus:ring-2
        focus:ring-blue-500
        focus:ring-offset-2
      "
    >
      ✕
    </button>
  );
}