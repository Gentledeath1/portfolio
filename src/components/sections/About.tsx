/* eslint-disable react/no-unescaped-entities */
"use client";

import { Code2, Layers, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Full-Stack Engineering",
    description:
      "From React frontends to Laravel APIs and PostgreSQL databases.. I own the entire stack.",
  },
  {
    icon: Layers,
    title: "Software Architecture",
    description:
      "I design systems that scale, clean separation of concerns, reliable infrastructure, thoughtful data models.",
  },
  {
    icon: Rocket,
    title: "Product Thinking",
    description:
      "I don't just build features. I ask why they exist, who they serve, and how they generate value.",
  },
  {
    icon: Users,
    title: "Technical Leadership",
    description:
      "I founded Radius Tech Hub to build a team that ships production software for real businesses across Africa.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 border-t border-[var(--border)]"
    >
      <div className="mx-auto px-6" style={{ maxWidth: "var(--max-width)" }}>
        {/* Section label */}
        <div className="flex items-center gap-3 mb-12">
          <span className="text-xs font-medium tracking-widest uppercase text-[var(--accent)]">
            About
          </span>
          <div className="h-px flex-1 bg-[var(--border)]" />
        </div>

        {/* Main content */}
        <div className="grid md:grid-cols-2 gap-16 mb-16">
          {/* Left — narrative */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-6 text-[var(--foreground)]">
              I build software that{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, var(--foreground) 0%, var(--accent) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                businesses rely on.
              </span>
            </h2>

            <div className="space-y-4 text-[var(--foreground-secondary)] leading-relaxed text-[0.95rem]">
              <p>
                I'm Ikechukwu Ogbonna, a software engineer and founder based in
                Nigeria. Over the past 5+ years, I've designed, built, and
                shipped production software across fintech, real estate,
                healthcare, logistics, and e-commerce.
              </p>
              <p>
                I founded{" "}
                <span className="text-[var(--foreground)] font-medium">
                  Radius Tech Hub NG Limited
                </span>{" "}
                because I saw a gap: businesses across Africa needed world-class
                software built by engineers who understood both the technology
                and the business context behind it.
              </p>
              <p>
                My approach is product-first. Before I write a single line of
                code, I ask: what problem are we solving, who is it for, and how
                will we know it worked? That mindset has helped me deliver
                systems that generate real business value, from WhatsApp
                automation CRMs to virtual fintech platforms.
              </p>
              <p>
                When I'm not building, I'm mentoring engineers, studying systems
                architecture, and pushing the boundaries of what's possible with
                modern web technology.
              </p>
            </div>
          </div>

          {/* Right — quick facts */}
          <div className="flex flex-col justify-center gap-6">
            {[
              { label: "Location", value: "Awka, Anambra State, Nigeria" },
              { label: "Company", value: "Radius Tech Hub NG Limited" },
              { label: "Role", value: "Founder & Lead Software Engineer" },
              { label: "Experience", value: "5+ Years" },
              {
                label: "GitHub",
                value: "github.com/Gentledeath1",
                href: "https://github.com/Gentledeath1",
              },
              {
                label: "LinkedIn",
                value: "linkedin.com/in/ikechukwu-ogbonna-Webdev",
                href: "https://www.linkedin.com/in/ikechukwu-ogbonna-Webdev",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-4 pb-6 border-b border-[var(--border-subtle)] last:border-0 last:pb-0"
              >
                <span className="text-xs font-medium tracking-widest uppercase text-[var(--foreground-tertiary)] w-24 shrink-0 pt-0.5">
                  {item.label}
                </span>
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[var(--accent)] hover:underline"
                  >
                    {item.value}
                  </a>
                ) : (
                  <span className="text-sm text-[var(--foreground)]">
                    {item.value}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Highlight cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 hover:border-[var(--border-strong)] hover:bg-[var(--surface-raised)] transition-all duration-200"
              >
                <div className="mb-4 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[var(--accent-subtle)] border border-[var(--accent)] border-opacity-20">
                  <Icon size={18} className="text-[var(--accent)]" />
                </div>
                <h3 className="text-sm font-semibold text-[var(--foreground)] mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-[var(--foreground-secondary)] leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
