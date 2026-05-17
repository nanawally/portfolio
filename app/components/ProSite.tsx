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
      "Built in a cross-functional team of 8. Recipe browsing, filtering, and creation with responsive design.",
    link: "https://smoothify2025.vercel.app/",
  },
];

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 bg-overlay flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-surface rounded-lg p-6 max-w-lg w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-sm text-text-muted mb-4">{project.tech}</p>
        <p className="text-foreground mb-4">{project.description}</p>
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
        <div className="mt-6 text-right">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm border border-border rounded hover:bg-hover-bg"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ProSite() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen">
      <section className="max-w-3xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold mb-4">Anna Wallström</h1>
        <p className="text-lg text-text-muted">
          Fullstack developer who thrives across the entire stack — from
          database design and API architecture to polished, responsive UIs.
        </p>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-6">Tech Stack</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {Object.entries(techStack).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-sm font-medium text-text-muted mb-2">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 text-sm border border-border rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold mb-6">Projects</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {projects.map((project) => (
            <button
              key={project.title}
              onClick={() => setSelectedProject(project)}
              className="text-left p-4 border border-border rounded-lg hover:border-text-subtle transition-colors"
            >
              <h3 className="font-bold mb-1">{project.title}</h3>
              <p className="text-sm text-text-muted">{project.summary}</p>
              <p className="text-xs text-text-subtle mt-2">{project.tech}</p>
            </button>
          ))}
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-12 pb-24">
        <h2 className="text-2xl font-bold mb-6">Contact</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            // TODO: wire up API route
          }}
          className="flex flex-col gap-4 max-w-md"
        >
          <input
            type="text"
            placeholder="Your name"
            required
            className="px-4 py-2 border border-border rounded bg-transparent"
          />
          <input
            type="email"
            placeholder="Your email"
            required
            className="px-4 py-2 border border-border rounded bg-transparent"
          />
          <textarea
            placeholder="Message"
            rows={4}
            required
            className="px-4 py-2 border border-border rounded bg-transparent resize-none"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-primary text-white rounded font-medium hover:bg-primary-hover transition-colors self-start"
          >
            Send
          </button>
        </form>
      </section>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
