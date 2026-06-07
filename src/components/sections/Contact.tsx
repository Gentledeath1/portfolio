/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState } from "react";
import { Mail, MessageCircle, GitBranch, Send, MapPin } from "lucide-react";
const FORMSPREE_URL = "https://formspree.io/f/xaqzeaoa";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/Gentledeath1",
    icon: GitBranch,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ikechukwu-ogbonna-Webdev",
    icon: Mail,
  },
  {
    label: "Email",
    href: "mailto:achillesdeo1@gmail.com",
    icon: Mail,
  },
];

type FormState = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    setFormState("submitting");

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setFormState("success");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  };

  const inputClass =
    "w-full bg-[var(--background-secondary)] border border-[var(--border)] rounded-lg px-4 py-3 text-sm text-[var(--foreground)] placeholder:text-[var(--foreground-tertiary)] focus:outline-none focus:border-[var(--accent)] transition-colors duration-150";

  return (
    <section
      id="contact"
      className="relative py-24 border-t border-[var(--border)]"
    >
      <div className="mx-auto px-6" style={{ maxWidth: "var(--max-width)" }}>
        {/* Section label */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-medium tracking-widest uppercase text-[var(--accent)]">
            Contact
          </span>
          <div className="h-px flex-1 bg-[var(--border)]" />
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Left — info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-4 text-[var(--foreground)]">
              Let's build something{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, var(--foreground) 0%, var(--accent) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                great together.
              </span>
            </h2>
            <p className="text-sm text-[var(--foreground-secondary)] leading-relaxed mb-10">
              Whether you need a production-grade web application, a business
              automation system, or a technical co-founder — I'm open to
              conversations. Reach out and let's talk.
            </p>

            {/* Contact details */}
            <div className="flex flex-col gap-4 mb-10">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[var(--accent-subtle)] flex items-center justify-center shrink-0">
                  <Mail size={15} className="text-[var(--accent)]" />
                </div>
                <div>
                  <div className="text-xs text-[var(--foreground-tertiary)] mb-0.5">
                    Email
                  </div>
                  <a
                    href="mailto:achillesdeo1@gmail.com"
                    className="text-sm text-[var(--foreground)] hover:text-[var(--accent)] transition-colors"
                  >
                    achillesdeo1@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[var(--accent-subtle)] flex items-center justify-center shrink-0">
                  <MapPin size={15} className="text-[var(--accent)]" />
                </div>
                <div>
                  <div className="text-xs text-[var(--foreground-tertiary)] mb-0.5">
                    Location
                  </div>
                  <span className="text-sm text-[var(--foreground)]">
                    Awka, Anambra State, Nigeria
                  </span>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/2348163986563"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white border-none rounded-lg px-5 py-3 text-sm font-medium cursor-pointer transition-colors duration-150 mb-10"
            >
              <MessageCircle size={16} />
              Chat on WhatsApp
            </a>

            {/* Socials */}
            <div className="flex items-center gap-3">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg border border-[var(--border)] bg-[var(--surface)] flex items-center justify-center text-[var(--foreground-secondary)] hover:text-[var(--foreground)] hover:border-[var(--border-strong)] transition-all duration-150"
                    title={s.label}
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right — form */}
          <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-8">
            {formState === "success" ? (
              <div className="h-full flex flex-col items-center justify-center text-center gap-4 py-12">
                <div className="w-12 h-12 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                  <Send size={20} className="text-green-500" />
                </div>
                <h3 className="text-lg font-semibold text-[var(--foreground)]">
                  Message sent.
                </h3>
                <p className="text-sm text-[var(--foreground-secondary)]">
                  Thanks for reaching out. I'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setFormState("idle")}
                  className="text-xs text-[var(--accent)] hover:underline mt-2"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-[var(--foreground-tertiary)]">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className={inputClass}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-[var(--foreground-tertiary)]">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-[var(--foreground-tertiary)]">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Project inquiry, collaboration, etc."
                    className={inputClass}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-[var(--foreground-tertiary)]">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or idea..."
                    rows={6}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {formState === "error" && (
                  <p className="text-xs text-red-400">
                    Something went wrong. Please try again or email me directly.
                  </p>
                )}

                <button
                  onClick={handleSubmit}
                  disabled={formState === "submitting"}
                  className="w-full bg-[var(--foreground)] text-[var(--background)] border-none rounded-lg py-3 text-sm font-medium cursor-pointer hover:opacity-80 transition-opacity duration-150 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {formState === "submitting" ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send size={14} />
                    </>
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
