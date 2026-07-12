import {
  FileText,
  Mail,
  Shield,
} from "lucide-react";

import { branding } from "../config/branding";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 md:flex-row">
        {/* Left */}
        <div className="flex flex-col items-center gap-4 md:items-start">
          <Logo />

          <p className="max-w-sm text-sm leading-6 text-slate-600">
            {branding.description}
          </p>

          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} {branding.footer.copyright}
          </p>
        </div>

        {/* Right */}
        <div className="flex flex-col items-center gap-4 md:items-end">
          <a
            href={`mailto:${branding.email}`}
            className="flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-blue-600"
          >
            <Mail size={16} />
            Email
          </a>

          <div className="flex flex-wrap items-center gap-6">
            <a
              href="#"
              className="flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-blue-600"
            >
              <Shield size={16} />
              Privacy
            </a>

            <a
              href="#"
              className="flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-blue-600"
            >
              <FileText size={16} />
              Terms
            </a>

            <a
              href="#"
              className="flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-blue-600"
            >
              <Mail size={16} />
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}