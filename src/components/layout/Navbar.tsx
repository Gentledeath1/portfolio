"use client";

import { useState, useEffect } from "react";

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

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        borderBottom: scrolled
          ? "1px solid var(--border)"
          : "1px solid transparent",
        backgroundColor: scrolled ? "var(--surface-overlay)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        transition: "all var(--transition-base)",
      }}
    >
      <nav
        style={{
          maxWidth: "var(--max-width)",
          margin: "0 auto",
          padding: "0 var(--container-padding)",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
            display: "flex",
            flexDirection: "column",
            gap: "1px",
          }}
        >
          <span
            style={{
              fontSize: "0.9rem",
              fontWeight: 600,
              color: "var(--foreground)",
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
            }}
          >
            Ikechukwu Ogbonna
          </span>
          <span
            style={{
              fontSize: "0.7rem",
              color: "var(--foreground-tertiary)",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}
          >
            Founder & Engineer
          </span>
        </button>

        {/* Desktop Links */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2rem",
          }}
          className="hide-mobile"
        >
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: "0.875rem",
                color: "var(--foreground-secondary)",
                padding: 0,
                transition: "color var(--transition-fast)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--foreground)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--foreground-secondary)")
              }
            >
              {link.label}
            </button>
          ))}

          {/* CTA */}
          <button
            onClick={() => handleNavClick("#contact")}
            style={{
              backgroundColor: "var(--foreground)",
              color: "var(--background)",
              border: "none",
              borderRadius: "6px",
              padding: "0.5rem 1.1rem",
              fontSize: "0.875rem",
              fontWeight: 500,
              cursor: "pointer",
              transition: "opacity var(--transition-fast)",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Let's Talk
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="show-mobile"
          style={{
            background: "none",
            border: "1px solid var(--border)",
            borderRadius: "6px",
            padding: "0.4rem 0.6rem",
            cursor: "pointer",
            color: "var(--foreground)",
            fontSize: "1.1rem",
            display: "none",
          }}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            borderTop: "1px solid var(--border)",
            backgroundColor: "var(--surface)",
            padding: "1rem var(--container-padding)",
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
          }}
        >
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: "1rem",
                color: "var(--foreground-secondary)",
                textAlign: "left",
                padding: "0.25rem 0",
              }}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick("#contact")}
            style={{
              backgroundColor: "var(--foreground)",
              color: "var(--background)",
              border: "none",
              borderRadius: "6px",
              padding: "0.65rem 1rem",
              fontSize: "0.9rem",
              fontWeight: 500,
              cursor: "pointer",
              marginTop: "0.5rem",
            }}
          >
            Let's Talk
          </button>
        </div>
      )}
    </header>
  );
}
