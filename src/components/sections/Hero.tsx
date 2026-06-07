"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "calc(64px + 3rem) var(--container-padding) 4rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(var(--border-subtle) 1px, transparent 1px),
            linear-gradient(90deg, var(--border-subtle) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          opacity: 0.6,
          zIndex: 0,
        }}
      />

      {/* Radial fade over grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 100% 100% at 50% 50%, transparent 10%, var(--background) 80%)",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "var(--max-width)",
          width: "100%",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "3rem",
          flexWrap: "wrap",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}
      >
        {/* Left — Text Content */}
        <div style={{ flex: 1, minWidth: 0 }}>
          {/* Available badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              backgroundColor: "var(--surface-raised)",
              border: "1px solid var(--border)",
              borderRadius: "100px",
              padding: "0.35rem 0.85rem",
              marginBottom: "2rem",
            }}
          >
            <span
              style={{
                width: "7px",
                height: "7px",
                borderRadius: "50%",
                backgroundColor: "#16a34a",
                display: "inline-block",
                boxShadow: "0 0 6px #16a34a",
              }}
            />
            <span
              style={{
                fontSize: "0.78rem",
                color: "var(--foreground-secondary)",
                letterSpacing: "0.03em",
              }}
            >
              Available for new projects
            </span>
          </div>

          {/* Headline */}
          <h1
            style={{
              fontSize: "clamp(1.8rem, 3.8vw, 3rem)",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              color: "var(--foreground)",
              maxWidth: "820px",
              marginBottom: "1.5rem",
            }}
          >
            Founder. Engineer.{" "}
            <span
              style={{ color: "var(--foreground-tertiary)", fontWeight: 400 }}
            >
              I design, build, and ship software that powers businesses across
              Africa.
            </span>
          </h1>

          {/* Subheading */}
          <p
            style={{
              fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
              color: "var(--foreground-secondary)",
              maxWidth: "540px",
              lineHeight: 1.7,
              marginBottom: "2.5rem",
            }}
          >
            I'm Ikechukwu Ogbonna — Founder of Radius Tech Hub NG. I specialise
            in full-stack engineering, software architecture, and building
            products that generate real business value.
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <button
              onClick={() => {
                document
                  .querySelector("#projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              style={{
                backgroundColor: "var(--foreground)",
                color: "var(--background)",
                border: "none",
                borderRadius: "8px",
                padding: "0.8rem 1.6rem",
                fontSize: "0.95rem",
                fontWeight: 500,
                cursor: "pointer",
                transition: "opacity var(--transition-fast)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              View My Work
            </button>

            <button
              onClick={() => {
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              style={{
                backgroundColor: "transparent",
                color: "var(--foreground)",
                border: "1px solid var(--border-strong)",
                borderRadius: "8px",
                padding: "0.8rem 1.6rem",
                fontSize: "0.95rem",
                fontWeight: 500,
                cursor: "pointer",
                transition:
                  "border-color var(--transition-fast), background-color var(--transition-fast)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor =
                  "var(--foreground-tertiary)";
                e.currentTarget.style.backgroundColor = "var(--surface-raised)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border-strong)";
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              Let's Talk
            </button>
          </div>

          {/* Stats strip */}
          <div
            style={{
              display: "flex",
              gap: "2.5rem",
              marginTop: "3.5rem",
              flexWrap: "wrap",
            }}
          >
            {[
              { value: "5+", label: "Years Experience" },
              { value: "20+", label: "Projects Shipped" },
              { value: "10+", label: "Happy Clients" },
              { value: "3", label: "Countries Served" },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  style={{
                    fontSize: "1.6rem",
                    fontWeight: 700,
                    color: "var(--foreground)",
                    letterSpacing: "-0.03em",
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: "0.8rem",
                    color: "var(--foreground-tertiary)",
                    marginTop: "0.3rem",
                    letterSpacing: "0.02em",
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Photo */}
        <div
          className="hero-photo-wrapper"
          style={{
            flexShrink: 0,
            width: "300px",
            height: "380px",
            borderRadius: "16px",
            overflow: "hidden",
            border: "1px solid var(--border)",
            boxShadow: "var(--shadow-xl)",
            position: "relative",
          }}
        >
          <img
            src="/avatar.jpeg"
            alt="Ikechukwu Ogbonna"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center top",
            }}
          />
        </div>
      </div>
    </section>
  );
}
