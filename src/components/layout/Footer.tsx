import { GitBranch, Mail, MessageCircle } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] py-10">
      <div
        className="mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6"
        style={{ maxWidth: "var(--max-width)" }}
      >
        {/* Left */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="text-sm font-semibold text-[var(--foreground)] tracking-tight">
            Ikechukwu Ogbonna
          </span>
          <span className="text-xs text-[var(--foreground-tertiary)]">
            Founder & Lead Software Engineer · Radius Tech Hub NG
          </span>
        </div>

        {/* Center */}
        <p className="text-xs text-[var(--foreground-tertiary)] text-center">
          © {year} Ikechukwu Ogbonna. All rights reserved.
        </p>

        {/* Right */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/Gentledeath1"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-lg border border-[var(--border)] flex items-center justify-center text-[var(--foreground-tertiary)] hover:text-[var(--foreground)] hover:border-[var(--border-strong)] transition-all duration-150"
          >
            <GitBranch size={15} />
          </a>
          <a
            href="https://wa.me/2348066687958"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-lg border border-[var(--border)] flex items-center justify-center text-[var(--foreground-tertiary)] hover:text-[var(--foreground)] hover:border-[var(--border-strong)] transition-all duration-150"
          >
            <MessageCircle size={15} />
          </a>
          <a
            href="mailto:achillesdeo1@gmail.com"
            className="w-9 h-9 rounded-lg border border-[var(--border)] flex items-center justify-center text-[var(--foreground-tertiary)] hover:text-[var(--foreground)] hover:border-[var(--border-strong)] transition-all duration-150"
          >
            <Mail size={15} />
          </a>
        </div>
      </div>
    </footer>
  );
}
