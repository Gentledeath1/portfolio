"use client";

import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Chukwuemeka Obi",
    title: "CEO, Pineleaf Estates",
    company: "Pineleaf Estates",
    avatar: "CO",
    content:
      "Ikechukwu delivered a platform that completely transformed how we present and sell properties online. Clean, fast, and professional. Our inquiries doubled within the first month of launch.",
  },
  {
    name: "Adaeze Nwosu",
    title: "Operations Manager",
    company: "SME Client",
    avatar: "AN",
    content:
      "The WhatsApp automation system he built for us saved us hours every single day. Our customers get instant responses, appointments book themselves, and our team focuses on actual work. It just works.",
  },
  {
    name: "Tunde Fashola",
    title: "Founder, Blaqz Automobiles",
    company: "Blaqz Automobiles",
    avatar: "TF",
    content:
      "I needed a platform that matched the premium feel of our brand. Ikechukwu nailed it. The NGN/USD toggle alone has made it easier to close deals with diaspora buyers. Highly recommended.",
  },
  {
    name: "Blessing Okorie",
    title: "Lead Developer",
    company: "Kodex Africa",
    avatar: "BO",
    content:
      "Working alongside Ikechukwu at Kodex was a masterclass in practical engineering. He has a rare ability to break down complex systems into concepts that junior developers can actually build on.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative py-24 border-t border-[var(--border)]"
    >
      <div className="mx-auto px-6" style={{ maxWidth: "var(--max-width)" }}>
        {/* Section label */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-medium tracking-widest uppercase text-[var(--accent)]">
            Testimonials
          </span>
          <div className="h-px flex-1 bg-[var(--border)]" />
        </div>

        {/* Header */}
        <div className="mb-16 max-w-xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-4 text-[var(--foreground)]">
            What clients{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, var(--foreground) 0%, var(--accent) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              are saying.
            </span>
          </h2>
          <p className="text-sm text-[var(--foreground-secondary)] leading-relaxed">
            Real feedback from clients and colleagues across Nigeria and beyond.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 gap-4">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 hover:border-[var(--border-strong)] hover:bg-[var(--surface-raised)] transition-all duration-200 flex flex-col gap-4"
            >
              {/* Quote icon */}
              <Quote
                size={18}
                className="text-[var(--accent)] opacity-60 shrink-0"
              />

              {/* Content */}
              <p className="text-sm text-[var(--foreground-secondary)] leading-relaxed flex-1">
                {t.content}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-[var(--border-subtle)]">
                <div className="w-9 h-9 rounded-full bg-[var(--accent-subtle)] border border-[var(--accent)] border-opacity-20 flex items-center justify-center shrink-0">
                  <span className="text-xs font-semibold text-[var(--accent)]">
                    {t.avatar}
                  </span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-[var(--foreground)] leading-tight">
                    {t.name}
                  </div>
                  <div className="text-xs text-[var(--foreground-tertiary)]">
                    {t.title}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
