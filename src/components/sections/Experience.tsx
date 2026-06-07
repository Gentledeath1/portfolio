"use client";

import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    date: "Jan 2025 — Present",
    title: "Founder & Lead Software Engineer",
    company: "Radius Tech Hub NG Limited",
    location: "Awka, Anambra State",
    type: "founder",
    description:
      "Founded and lead a software company focused on business automation, enterprise software, fintech, AI integrations, and custom web applications for businesses across Africa.",
    achievements: [
      "Built AI-powered Business Automation CRM used by SMEs across Nigeria",
      "Delivered production applications across healthcare, fintech, real estate, and logistics",
      "Led architecture, DevOps, client strategy, and technical execution end to end",
      "Mentored and trained junior engineers on the team",
    ],
    tags: ["Next.js", "Laravel", "PostgreSQL", "OpenAI", "Docker"],
  },
  {
    date: "2023 — Early 2025",
    title: "Lead Full Stack Developer & Software Engineering Tutor",
    company: "Kodex Africa",
    location: "Nigeria",
    type: "work",
    description:
      "Led software engineering training for aspiring developers while building and reviewing production-grade projects across multiple cohorts.",
    achievements: [
      "Trained multiple cohorts of developers in modern full-stack engineering",
      "Designed practical curricula covering React, Node.js, Laravel, and deployment",
      "Conducted code reviews and guided students to production-ready project delivery",
      "Improved student coding standards and deployment practices significantly",
    ],
    tags: ["React", "Node.js", "Laravel", "MySQL", "Git"],
  },
  {
    date: "2023 — 2024",
    title: "Freelance Full Stack Engineer",
    company: "Self-Employed",
    location: "Remote",
    type: "work",
    description:
      "Delivered software projects independently across e-commerce, real estate, and business management sectors for clients in Nigeria and beyond.",
    achievements: [
      "Delivered 11-20 paid client projects across multiple industries",
      "Deployed 9-25 production applications to live environments",
      "Executed projects valued above ₦1,000,000",
      "Maintained strong client satisfaction and high repeat engagement rate",
    ],
    tags: ["React", "Laravel", "PostgreSQL", "Paystack", "Flutterwave"],
  },
  {
    date: "2022 — 2023",
    title: "Full Stack Web Developer",
    company: "IAB Codes",
    location: "Nigeria (Contract)",
    type: "work",
    description:
      "Built client-facing web applications and business systems using modern frontend and backend technologies under contract.",
    achievements: [
      "Developed responsive web applications for business clients",
      "Built RESTful APIs and backend services with Laravel and PHP",
      "Implemented Paystack and Flutterwave payment integrations",
      "Maintained databases and application infrastructure in production",
    ],
    tags: ["Laravel", "PHP", "React", "MySQL", "PostgreSQL"],
  },
  {
    date: "2020 — 2022",
    title: "Full Stack Development Tutor",
    company: "Destiny Tech Hub",
    location: "Nigeria",
    type: "teaching",
    description:
      "Delivered structured training in web development fundamentals and advanced software engineering to beginner and intermediate developers.",
    achievements: [
      "Mentored numerous beginner developers into job-ready engineers",
      "Developed practical training materials used across multiple cohorts",
      "Helped students build and deploy real-world applications",
      "Conducted hands-on coding sessions covering frontend and backend development",
    ],
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
  },
  {
    date: "2019",
    title: "Started Software Development Journey",
    company: "Self-Taught",
    location: "Nigeria",
    type: "milestone",
    description:
      "Began learning software development independently, building the foundation that would lead to 5+ years of professional engineering work.",
    achievements: [],
    tags: [],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-24 border-t border-[var(--border)]"
    >
      <div className="mx-auto px-6" style={{ maxWidth: "var(--max-width)" }}>
        {/* Section label */}
        <div className="flex items-center gap-3 mb-16">
          <span className="text-xs font-medium tracking-widest uppercase text-[var(--accent)]">
            Experience
          </span>
          <div className="h-px flex-1 bg-[var(--border)]" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-[200px] top-0 bottom-0 w-px bg-[var(--border)] hidden md:block" />

          <div className="flex flex-col gap-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative flex flex-col md:flex-row gap-4 md:gap-12"
              >
                {/* Date — left column */}
                <div className="md:w-[200px] shrink-0 md:text-right">
                  <span className="text-xs font-medium text-[var(--foreground-tertiary)] tracking-wide">
                    {exp.date}
                  </span>
                </div>

                {/* Dot */}
                <div className="absolute left-0 md:left-[196px] top-0 hidden md:flex items-center justify-center">
                  <div
                    className={`w-2 h-2 rounded-full border-2 ${
                      exp.type === "founder"
                        ? "bg-[var(--accent)] border-[var(--accent)]"
                        : exp.type === "milestone"
                          ? "bg-[var(--foreground-tertiary)] border-[var(--foreground-tertiary)]"
                          : "bg-[var(--background)] border-[var(--border-strong)]"
                    }`}
                  />
                </div>

                {/* Content — right column */}
                <div className="flex-1 pb-2">
                  <div className="flex flex-col gap-1 mb-3">
                    <div className="flex items-center gap-2">
                      {exp.type === "teaching" ? (
                        <GraduationCap
                          size={14}
                          className="text-[var(--foreground-tertiary)]"
                        />
                      ) : (
                        <Briefcase
                          size={14}
                          className="text-[var(--foreground-tertiary)]"
                        />
                      )}
                      <span className="text-xs text-[var(--foreground-tertiary)]">
                        {exp.company}
                      </span>
                      <span className="text-xs text-[var(--border-strong)]">
                        ·
                      </span>
                      <span className="text-xs text-[var(--foreground-tertiary)]">
                        {exp.location}
                      </span>
                    </div>
                    <h3 className="text-base font-semibold text-[var(--foreground)] tracking-tight">
                      {exp.title}
                    </h3>
                  </div>

                  {exp.description && (
                    <p className="text-sm text-[var(--foreground-secondary)] leading-relaxed mb-4">
                      {exp.description}
                    </p>
                  )}

                  {exp.achievements.length > 0 && (
                    <ul className="flex flex-col gap-2 mb-4">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-[var(--accent)] mt-1.5 text-xs">
                            ▸
                          </span>
                          <span className="text-sm text-[var(--foreground-secondary)]">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {exp.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2.5 py-1 rounded-md bg-[var(--surface-raised)] border border-[var(--border)] text-[var(--foreground-tertiary)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
