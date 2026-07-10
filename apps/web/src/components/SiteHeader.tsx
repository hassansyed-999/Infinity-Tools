import { Navbar } from "@infinity/ui";

export function SiteHeader() {
  return (
    <Navbar>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <h1 className="text-xl font-bold">
          Infinity Tools
        </h1>

        <nav className="flex gap-6 text-sm">
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#about">About</a>
        </nav>
      </div>
    </Navbar>
  );
}