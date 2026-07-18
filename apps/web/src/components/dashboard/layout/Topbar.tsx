import { ReactNode } from "react";

interface TopbarProps {
  left?: ReactNode;
  right?: ReactNode;
}

export function Topbar({
  left,
  right,
}: TopbarProps) {
  return (
    <header className="flex min-h-20 items-center justify-between border-b border-slate-200 bg-white px-8">
      <div className="flex items-center">
        {left}
      </div>

      <div className="flex items-center gap-4">
        {right}
      </div>
    </header>
  );
}