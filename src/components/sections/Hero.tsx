/* eslint-disable react/no-unescaped-entities */
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "20+", label: "Projects Shipped" },
  { value: "10+", label: "Happy Clients" },
  { value: "3", label: "Countries Served" },
];

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background grid */}
      <div
        className="absolute inset-0 z-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(var(--border-subtle) 1px, transparent 1px),
            linear-gradient(90deg, var(--border-subtle) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial vignette over grid */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 30%, var(--background) 100%)",
        }}
      />

      {/* Accent glow */}
      <div
        className="absolute z-10"
        style={{
          top: "20%",
          left: "-10%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
          opacity: 0.08,
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />
      {/* Second glow — right */}
      <div
        className="absolute z-10"
        style={{
          top: "40%",
          right: "-5%",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
          opacity: 0.05,
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      {/* Photo — absolutely positioned right side, fades into bg */}
      <div className="absolute right-0 top-0 h-full w-[45%] z-10 hidden md:block">
        <Image
          src="/avatar.jpeg"
          alt="Ikechukwu Ogbonna"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Left fade */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, var(--background) 0%, transparent 50%)",
          }}
        />
        {/* Top fade */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, var(--background) 0%, transparent 30%, transparent 60%, var(--background) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div
        className="relative z-20 w-full mx-auto px-6 pt-24 pb-16"
        style={{ maxWidth: "var(--max-width)" }}
      >
        <div
          className="max-w-[600px] transition-all duration-700"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
          }}
        >
          {/* Available badge */}
          <div className="relative inline-flex items-center gap-2 rounded-full border border-[var(--accent)] bg-[var(--accent-subtle)] px-4 py-1.5 mb-8">
            <span
              className="absolute inset-0 rounded-full"
              style={{
                boxShadow:
                  "0 0 20px var(--accent), 0 0 40px var(--accent-subtle)",
                opacity: 0.3,
              }}
            />
            <span
              className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block shrink-0"
              style={{ boxShadow: "0 0 6px #16a34a" }}
            />
            <span className="text-xs text-[var(--accent)] tracking-wide font-medium">
              Available for new projects
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-6 text-[var(--foreground)]">
            <span
              style={{
                background:
                  "linear-gradient(135deg, var(--foreground) 0%, var(--accent) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Founder. Engineer.
            </span>{" "}
            <span className="font-normal text-[var(--foreground-tertiary)]">
              I design, build, and ship software that powers businesses across
              Africa.
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-base md:text-lg text-[var(--foreground-secondary)] leading-relaxed mb-10 max-w-[480px]">
            I'm Ikechukwu Ogbonna — Founder of Radius Tech Hub NG. I specialise
            in full-stack engineering, software architecture, and building
            products that generate real business value.
          </p>

          {/* CTAs */}
          <div className="flex items-center gap-4 flex-wrap">
            <button
              onClick={() => scrollTo("#projects")}
              className="inline-flex items-center gap-2 bg-[var(--foreground)] text-[var(--background)] border-none rounded-lg px-6 py-3 text-sm font-medium cursor-pointer hover:opacity-80 transition-opacity duration-150"
            >
              View My Work
              <ArrowRight size={15} />
            </button>

            <button
              onClick={() => scrollTo("#contact")}
              className="inline-flex items-center gap-2 bg-transparent text-[var(--foreground)] border border-[var(--border-strong)] rounded-lg px-6 py-3 text-sm font-medium cursor-pointer hover:bg-[var(--surface-raised)] hover:border-[var(--foreground-tertiary)] transition-all duration-150"
            >
              Let's Talk
            </button>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-8 mt-14 flex-wrap">
            {stats.map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-8">
                <div>
                  <div className="text-2xl font-bold tracking-tight text-[var(--foreground)] leading-none">
                    {stat.value}
                  </div>
                  <div className="text-xs text-[var(--foreground-tertiary)] mt-1 tracking-wide">
                    {stat.label}
                  </div>
                </div>
                {i < stats.length - 1 && (
                  <div className="w-px h-6 bg-[var(--border)]" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
