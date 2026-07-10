export function Footer() {
  return (
    <footer className="border-t py-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} Infinity Tools. All rights reserved.
        </p>

        <div className="flex gap-6 text-sm">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </footer>
  );
}