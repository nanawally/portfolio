"use client";
import { useState } from "react";

type Project = {
  title: string;
  summary: string;
  tech: string;
  description: string;
  link: string | null;
};

const techStack = {
  Languages: ["Java", "Kotlin", "TypeScript", "JavaScript"],
  Frontend: ["React", "Next.js", "Angular", "Tailwind"],
  Backend: ["Spring Boot", "Ktor", "Node.js"],
  Data: ["PostgreSQL", "MongoDB"],
  Tools: ["Docker", "Git", "CI/CD"],
};

const projects: Project[] = [
  {
    title: "Chain-Link",
    summary: "Multi-tenant fencing club management app",
    tech: "React, Next.js, TypeScript, Kotlin, Ktor, PostgreSQL",
    description:
      "Attendance tracking, real-time game modes (Poule, King of the Hill) with multi-device WebSocket sessions, group management, and role-based access control.",
    link: "https://chainlink.annawallstrom.com/",
  },
  {
    title: "Music Runner",
    summary: "2D rhythm game",
    tech: "Phaser, React, TypeScript, Java, Spring Boot, PostgreSQL",
    description:
      "Thesis project with a self-taught game framework. Players run through levels synced to music, with a level editor and server-side song map validation.",
    link: "https://music-runner-gamma.vercel.app",
  },
  {
    title: "Smoothify",
    summary: "Recipe app",
    tech: "React, TypeScript, Tailwind",
    description:
      "Built in a cross-functional team of 8. Recipe browsing and filtering with responsive design.",
    link: "https://smoothify2025.vercel.app/",
  },
];

export default function ProSite() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<
    "idle" | "sending" | "sent" | "error"
  >("idle");

  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactForm.email);
  const canSend =
    contactForm.name.trim() !== "" &&
    isValidEmail &&
    contactForm.message.trim() !== "" &&
    formStatus !== "sending";

  async function handleContact(e: React.FormEvent) {
    e.preventDefault();
    if (!canSend) return;
    setFormStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contactForm),
      });
      if (!res.ok) throw new Error();
      setFormStatus("sent");
      setContactForm({ name: "", email: "", message: "" });
    } catch {
      setFormStatus("error");
    }
  }

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-32 pb-16 text-center">
        <p className="text-sm tracking-[0.3em] text-primary uppercase mb-4">
          Software Developer
        </p>
        <h1 className="text-5xl font-serif font-bold mb-6 tracking-wide">
          Anna Wallström
        </h1>
        <div className="deco-divider">
          <span className="text-primary text-lg">◆</span>
        </div>
        <p className="text-lg text-text-muted max-w-xl mx-auto leading-relaxed">
          Fullstack developer who thrives across the entire stack — from
          database design and API architecture to polished, responsive UIs.
        </p>
      </section>

      {/* Tech Stack */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-serif font-bold mb-2 text-center tracking-wide">
          Tech Stack
        </h2>
        <div className="deco-divider mb-8">
          <span className="text-primary text-sm">◆</span>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {Object.entries(techStack).map(([category, items]) => (
            <div key={category} className="deco-frame p-5 border border-border">
              <h3 className="text-xs font-medium tracking-[0.2em] text-primary uppercase mb-3">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((item, i) => (
                  <span key={item} className="text-sm text-text-muted">
                    {i > 0 && <span className="text-text-subtle mr-2">·</span>}
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-serif font-bold mb-2 text-center tracking-wide">
          Projects
        </h2>
        <div className="deco-divider mb-8">
          <span className="text-primary text-sm">◆</span>
        </div>
        <div className="flex flex-col gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="deco-frame border border-border"
            >
              <button
                onClick={() =>
                  setSelectedProject(
                    selectedProject?.title === project.title ? null : project,
                  )
                }
                className="w-full text-left p-6 flex items-center justify-between"
              >
                <div>
                  <h3 className="font-serif font-bold text-lg">
                    {project.title}
                  </h3>
                  <p className="text-sm text-text-muted">{project.summary}</p>
                </div>
                <span className="text-primary text-sm ml-4">
                  {selectedProject?.title === project.title ? "▲" : "▼"}
                </span>
              </button>
              {selectedProject?.title === project.title && (
                <div className="px-6 pb-6 border-t border-border pt-4">
                  <p className="text-xs tracking-[0.15em] text-primary uppercase mb-3">
                    {project.tech}
                  </p>
                  <p className="text-text-muted leading-relaxed mb-3">
                    {project.description}
                  </p>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline text-sm"
                    >
                      Live demo →
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="max-w-3xl mx-auto px-6 py-16 pb-32">
        <h2 className="text-2xl font-serif font-bold mb-2 text-center tracking-wide">
          Contact
        </h2>
        <div className="deco-divider mb-8">
          <span className="text-primary text-sm">◆</span>
        </div>
        <form
          onSubmit={handleContact}
          className="flex flex-col gap-4 max-w-md mx-auto"
        >
          <input
            type="text"
            placeholder="Your name"
            value={contactForm.name}
            onChange={(e) =>
              setContactForm({ ...contactForm, name: e.target.value })
            }
            className="px-4 py-2 border border-border bg-surface rounded focus:border-border-accent focus:outline-none transition-colors"
          />
          <input
            type="email"
            placeholder="Your email"
            value={contactForm.email}
            onChange={(e) =>
              setContactForm({ ...contactForm, email: e.target.value })
            }
            className="px-4 py-2 border border-border bg-surface rounded focus:border-border-accent focus:outline-none transition-colors"
          />
          <textarea
            placeholder="Message"
            rows={4}
            value={contactForm.message}
            onChange={(e) =>
              setContactForm({ ...contactForm, message: e.target.value })
            }
            className="px-4 py-2 border border-border bg-surface rounded resize-none focus:border-border-accent focus:outline-none transition-colors"
          />
          <button
            type="submit"
            disabled={!canSend}
            className="px-6 py-2 bg-primary text-background rounded font-medium hover:bg-primary-hover transition-colors self-center disabled:opacity-50 tracking-wide"
          >
            {formStatus === "sending" ? "Sending..." : "Send"}
          </button>
          {formStatus === "sent" && (
            <p className="text-sm text-primary text-center">Message sent!</p>
          )}
          {formStatus === "error" && (
            <p className="text-sm text-red-500 text-center">
              Something went wrong. Try again.
            </p>
          )}
        </form>
      </section>
    </div>
  );
}
