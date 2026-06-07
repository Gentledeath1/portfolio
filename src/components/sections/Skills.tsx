"use client";

import {
  Layout,
  Server,
  Database,
  Cloud,
  CreditCard,
  Shield,
} from "lucide-react";

const skillGroups = [
  {
    icon: Layout,
    category: "Frontend",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Vue",
      "Angular",
      "React Native",
      "Flutter",
      "Tailwind CSS",
      "Redux",
      "Zustand",
    ],
  },
  {
    icon: Server,
    category: "Backend",
    skills: [
      "Node.js",
      "Express",
      "PHP",
      "Laravel",
      "Python",
      "Django",
      "C#",
      ".NET",
      "REST APIs",
      "GraphQL",
      "WebSockets",
    ],
  },
  {
    icon: Database,
    category: "Databases & BaaS",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Firebase", "Supabase"],
  },
  {
    icon: Cloud,
    category: "DevOps & Infrastructure",
    skills: [
      "Linux",
      "Docker",
      "Nginx",
      "VPS",
      "GitHub Actions",
      "Cloudflare",
      "AWS",
      "DigitalOcean",
      "Vercel",
      "Netlify",
      "cPanel",
    ],
  },
  {
    icon: CreditCard,
    category: "Payments",
    skills: ["Paystack", "Flutterwave", "Monnify", "Stripe"],
  },
  {
    icon: Shield,
    category: "Authentication",
    skills: ["JWT", "OAuth", "Laravel Sanctum", "Session Auth"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-24 border-t border-[var(--border)]"
    >
      <div className="mx-auto px-6" style={{ maxWidth: "var(--max-width)" }}>
        {/* Section label */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-medium tracking-widest uppercase text-[var(--accent)]">
            Skills
          </span>
          <div className="h-px flex-1 bg-[var(--border)]" />
        </div>

        {/* Header */}
        <div className="mb-16 max-w-xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-4 text-[var(--foreground)]">
            A full stack of{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, var(--foreground) 0%, var(--accent) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              battle-tested tools.
            </span>
          </h2>
          <p className="text-sm text-[var(--foreground-secondary)] leading-relaxed">
            Every tool here has been used in production. No tutorial projects,
            no padding — just technologies I have shipped real software with.
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillGroups.map((group) => {
            const Icon = group.icon;
            return (
              <div
                key={group.category}
                className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 hover:border-[var(--border-strong)] hover:bg-[var(--surface-raised)] transition-all duration-200"
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-[var(--accent-subtle)]">
                    <Icon size={15} className="text-[var(--accent)]" />
                  </div>
                  <span className="text-sm font-semibold text-[var(--foreground)]">
                    {group.category}
                  </span>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-2.5 py-1 rounded-md bg-[var(--background-secondary)] border border-[var(--border-subtle)] text-[var(--foreground-secondary)] hover:border-[var(--accent)] hover:text-[var(--foreground)] transition-all duration-150 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
