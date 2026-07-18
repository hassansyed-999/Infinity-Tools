import { marketingNavigation } from "../config/navigation";
import { Button } from "./ui/Button";
import { Logo } from "./Logo";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Logo />

        {/* Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {marketingNavigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-blue-600"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Right Side */}
        <Button>
          Get Started
        </Button>
      </div>
    </header>
  );
}