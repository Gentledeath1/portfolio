/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "border-b border-[var(--border)] bg-[var(--surface-overlay)] backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div
        className="mx-auto px-6 h-16 flex items-center justify-between"
        style={{ maxWidth: "var(--max-width)" }}
      >
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex flex-col gap-0.5 bg-transparent border-none cursor-pointer p-0 shrink-0"
        >
          <span className="text-sm font-semibold text-[var(--foreground)] tracking-tight leading-tight">
            Ikechukwu Ogbonna
          </span>
          <span className="text-[0.62rem] text-[var(--foreground-tertiary)] tracking-widest uppercase">
            Founder & Engineer
          </span>
        </button>

        {/* Desktop links — absolutely centered */}
        <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="bg-transparent border-none cursor-pointer text-sm text-[var(--foreground-secondary)] hover:text-[var(--foreground)] transition-colors duration-150 p-0"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center shrink-0">
          {/* Desktop CTA */}
          <button
            onClick={() => scrollTo("#contact")}
            className="hidden md:block bg-[var(--foreground)] text-[var(--background)] border-none rounded-md px-4 py-2 text-sm font-medium cursor-pointer hover:opacity-80 transition-opacity duration-150"
          >
            Let's Talk
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden bg-transparent border border-[var(--border)] rounded-md p-2 cursor-pointer text-[var(--foreground)]"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-[var(--border)] bg-[var(--surface)] flex flex-col">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="bg-transparent border-none border-b border-[var(--border-subtle)] cursor-pointer text-[0.95rem] text-[var(--foreground-secondary)] text-left px-6 py-4 hover:text-[var(--foreground)] transition-colors duration-150"
            >
              {link.label}
            </button>
          ))}
          <div className="px-6 py-4">
            <button
              onClick={() => scrollTo("#contact")}
              className="w-full bg-[var(--foreground)] text-[var(--background)] border-none rounded-lg py-3 text-[0.95rem] font-medium cursor-pointer"
            >
              Let's Talk
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
