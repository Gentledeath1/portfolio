"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink, GitBranch, Lock } from "lucide-react";

const featured = [
  {
    id: 1,
    title: "Nigerian SME Business Automation CRM",
    description:
      "A full-scale business automation platform built for Nigerian SMEs. Features WhatsApp bot automation, appointment scheduling, order and logistics management, customer CRM, and Paystack payment integration.",
    type: "SaaS Platform",
    status: "Production",
    liveUrl: null,
    githubUrl: "https://github.com/Gentledeath1/nigerian-sme-saas",
    previewUrl: null,
    tags: [
      "Laravel",
      "React",
      "PostgreSQL",
      "OpenAI",
      "WhatsApp API",
      "Paystack",
      "Redis",
    ],
    gradient: "from-blue-600 via-blue-800 to-slate-900",
    label: "CRM",
  },
  {
    id: 2,
    title: "Blaqz Automobiles",
    description:
      "A premium automotive marketplace for a Nigerian car dealership. Features inventory browsing with NGN/USD toggle, vehicle condition filters, inspection booking, WhatsApp integration, and a car request system.",
    type: "Client Project",
    status: "Live",
    liveUrl: "https://blaqz-automobiles.vercel.app",
    githubUrl: "https://github.com/Gentledeath1/blaqz-automobiles",
    previewUrl:
      "https://api.microlink.io/?url=https://blaqz-automobiles.vercel.app&screenshot=true&meta=false&embed=screenshot.url",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    gradient: "from-slate-700 via-slate-800 to-slate-900",
    label: null,
  },
  {
    id: 3,
    title: "Item7go — E-commerce Platform",
    description:
      "A modern e-commerce platform built for Nigerian retailers. Features product catalogue, cart management, order processing, and a clean responsive storefront.",
    type: "E-commerce",
    status: "Live",
    liveUrl: "https://item7go-nine.vercel.app/",
    githubUrl: "https://github.com/Gentledeath1/item7go",
    previewUrl:
      "https://api.microlink.io/?url=https://item7go-nine.vercel.app/&screenshot=true&meta=false&embed=screenshot.url",
    tags: ["React", "Vite", "Tailwind CSS", "JavaScript"],
    gradient: "from-orange-600 via-orange-900 to-slate-900",
    label: null,
  },
  {
    id: 4,
    title: "Pineleaf Estates",
    description:
      "A real estate platform for a Nigerian property company. Features property listings, search and filtering, property detail pages, and client inquiry management.",
    type: "Real Estate",
    status: "Live",
    liveUrl: "https://www.pineleafestates.com",
    githubUrl: null,
    previewUrl:
      "https://api.microlink.io/?url=https://www.pineleafestates.com&screenshot=true&meta=false&embed=screenshot.url",
    tags: ["React", "Laravel", "MySQL", "Tailwind CSS"],
    gradient: "from-green-700 via-green-900 to-slate-900",
    label: null,
  },
];

const rest = [
  {
    id: 5,
    title: "Settlimax — Investment Platform",
    description:
      "A fintech investment platform with 12 tiered investment plans, referral system, wallet management, and a full admin dashboard.",
    type: "Fintech",
    status: "Live",
    liveUrl: "https://settlimax.vercel.app",
    githubUrl: "https://github.com/Gentledeath1/Settlimax",
    previewUrl:
      "https://api.microlink.io/?url=https://settlimax.vercel.app&screenshot=true&meta=false&embed=screenshot.url",
    tags: ["React", "Laravel", "MySQL", "Paystack"],
    gradient: "from-violet-700 via-violet-900 to-slate-900",
    nda: false,
  },
  {
    id: 6,
    title: "V-App — VTU & Fintech Platform",
    description:
      "A virtual top-up and fintech platform for airtime, data, electricity, and cable TV purchases with wallet management.",
    type: "Fintech",
    status: "Live",
    liveUrl: "https://vtusoftware.vercel.app",
    githubUrl: null,
    previewUrl:
      "https://api.microlink.io/?url=https://vtusoftware.vercel.app&screenshot=true&meta=false&embed=screenshot.url",
    tags: ["React", "Node.js", "Paystack", "Flutterwave"],
    gradient: "from-emerald-700 via-emerald-900 to-slate-900",
    nda: false,
  },
  {
    id: 7,
    title: "Hospital Management System",
    description:
      "An enterprise-grade hospital management system covering patient management, appointments, medical records, and administration.",
    type: "Healthcare",
    status: "Private",
    liveUrl: null,
    githubUrl: null,
    previewUrl: null,
    tags: ["MongoDB", "Express", "React", "Node.js"],
    gradient: "from-cyan-700 via-cyan-900 to-slate-900",
    nda: true,
  },
  {
    id: 8,
    title: "B Family Homes",
    description:
      "A real estate platform for a property development company with listings, agent profiles, and client inquiry management.",
    type: "Real Estate",
    status: "In Development",
    liveUrl: null,
    githubUrl: null,
    previewUrl: null,
    tags: ["React", "Laravel", "PostgreSQL", "Tailwind CSS"],
    gradient: "from-rose-700 via-rose-900 to-slate-900",
    nda: true,
  },
];

const statusColors: Record<string, string> = {
  Production: "text-blue-400 bg-blue-400/10 border-blue-400/20",
  Live: "text-green-400 bg-green-400/10 border-green-400/20",
  Private: "text-slate-400 bg-slate-400/10 border-slate-400/20",
  "In Development": "text-amber-400 bg-amber-400/10 border-amber-400/20",
};

function FeaturedProject({
  project,
  reverse,
}: {
  project: (typeof featured)[0];
  reverse: boolean;
}) {
  return (
    <div className="group rounded-xl border border-[var(--border)] bg-[var(--surface)] overflow-hidden hover:border-[var(--border-strong)] transition-all duration-300">
      <div
        className={`grid md:grid-cols-2 ${reverse ? "md:[&>*:first-child]:order-2" : ""}`}
      >
        {/* Visual */}
        <div className="relative h-64 md:h-80 overflow-hidden">
          {project.previewUrl ? (
            <Image
              src={project.previewUrl}
              alt={project.title}
              fill
              unoptimized
              className="w-[100%] object-center transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div
              className={`w-full h-full bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
            >
              <span className="text-white/20 text-7xl font-bold tracking-tighter select-none">
                {project.label}
              </span>
            </div>
          )}
          {/* Overlay badges */}
          <div className="absolute top-4 left-4">
            <span
              className={`text-xs px-2.5 py-1 rounded-full border font-medium ${statusColors[project.status]}`}
            >
              {project.status}
            </span>
          </div>
          <div className="absolute top-4 right-4">
            <span className="text-xs px-2.5 py-1 rounded-full border border-white/10 bg-black/40 text-white/70 backdrop-blur-sm">
              {project.type}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-bold text-[var(--foreground)] mb-3 leading-snug tracking-tight">
              {project.title}
            </h3>
            <p className="text-sm text-[var(--foreground-secondary)] leading-relaxed mb-6">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2.5 py-1 rounded-md bg-[var(--background-secondary)] border border-[var(--border-subtle)] text-[var(--foreground-tertiary)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4 pt-6 mt-6 border-t border-[var(--border-subtle)]">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-[var(--accent)] hover:underline"
              >
                <ExternalLink size={13} />
                Live Site
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-[var(--foreground-secondary)] hover:text-[var(--foreground)] transition-colors"
              >
                <GitBranch size={13} />
                Source
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function RestCard({ project }: { project: (typeof rest)[0] }) {
  return (
    <div className="group rounded-xl border border-[var(--border)] bg-[var(--surface)] overflow-hidden hover:border-[var(--border-strong)] transition-all duration-300 flex flex-col">
      <div className="relative h-32 overflow-hidden">
        {project.previewUrl ? (
          <Image
            src={project.previewUrl}
            alt={project.title}
            fill
            unoptimized
            className="w-[100%] object-center transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div
            className={`w-full h-full bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
          >
            {project.nda && (
              <div className="flex items-center gap-1.5 text-white/50">
                <Lock size={13} />
                <span className="text-xs tracking-widest uppercase">NDA</span>
              </div>
            )}
          </div>
        )}
        <div className="absolute top-3 left-3">
          <span
            className={`text-xs px-2 py-0.5 rounded-full border font-medium ${statusColors[project.status]}`}
          >
            {project.status}
          </span>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <span className="text-xs text-[var(--foreground-tertiary)] tracking-widest uppercase mb-1">
          {project.type}
        </span>
        <h3 className="text-sm font-semibold text-[var(--foreground)] mb-2 leading-snug">
          {project.title}
        </h3>
        <p className="text-xs text-[var(--foreground-secondary)] leading-relaxed mb-4 flex-1">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[0.65rem] px-2 py-0.5 rounded bg-[var(--background-secondary)] border border-[var(--border-subtle)] text-[var(--foreground-tertiary)]"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-3 pt-4 border-t border-[var(--border-subtle)]">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-[var(--accent)] hover:underline"
            >
              <ExternalLink size={11} />
              Live Site
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-[var(--foreground-secondary)] hover:text-[var(--foreground)] transition-colors"
            >
              <GitBranch size={11} />
              Source
            </a>
          )}
          {!project.liveUrl && !project.githubUrl && (
            <span className="inline-flex items-center gap-1.5 text-xs text-[var(--foreground-tertiary)]">
              <Lock size={11} />
              Private
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  return (
    <section
      id="projects"
      className="relative py-24 border-t border-[var(--border)]"
    >
      <div className="mx-auto px-6" style={{ maxWidth: "var(--max-width)" }}>
        {/* Section label */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-medium tracking-widest uppercase text-[var(--accent)]">
            Projects
          </span>
          <div className="h-px flex-1 bg-[var(--border)]" />
        </div>

        {/* Header */}
        <div className="mb-16 max-w-xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-4 text-[var(--foreground)]">
            Things I have{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, var(--foreground) 0%, var(--accent) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              shipped.
            </span>
          </h2>
          <p className="text-sm text-[var(--foreground-secondary)] leading-relaxed">
            Production software across fintech, real estate, healthcare, and
            business automation. Built for real clients, deployed to real users.
          </p>
        </div>

        {/* Featured rows */}
        <div className="flex flex-col gap-6 mb-12">
          {featured.map((project, i) => (
            <FeaturedProject
              key={project.id}
              project={project}
              reverse={i % 2 !== 0}
            />
          ))}
        </div>

        {/* Rest grid */}
        {showAll && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {rest.map((project) => (
              <RestCard key={project.id} project={project} />
            ))}
          </div>
        )}

        {/* Toggle */}
        <div className="text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 bg-transparent border border-[var(--border-strong)] text-[var(--foreground-secondary)] hover:text-[var(--foreground)] hover:border-[var(--foreground-tertiary)] rounded-lg px-6 py-3 text-sm font-medium cursor-pointer transition-all duration-150"
          >
            {showAll ? "Show Less" : `View All Projects (${rest.length} more)`}
          </button>
        </div>
      </div>
    </section>
  );
}
