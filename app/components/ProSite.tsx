"use client";
import { useState } from "react";

type Project = {
  title: string;
  summary: string;
  tech: string;
  description: string;
  link: string | null;
  github: string | null;
  demo: string | null;
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
    github: null, // private repo,
    demo: "Admin: jane@janedoe.com / test123 · User: john@johndoe.com / test123",
  },
  {
    title: "Music Runner",
    summary: "2D rhythm game",
    tech: "Phaser, React, TypeScript, Java, Spring Boot, PostgreSQL",
    description:
      "Thesis project with a self-taught game framework. Players run through levels synced to music, with server-side song map validation.",
    link: "https://music-runner-gamma.vercel.app",
    github: "https://github.com/nanawally/examensprojekt-frontend",
    demo: null,
  },
  {
    title: "Smoothify",
    summary: "Recipe app",
    tech: "React, TypeScript, Tailwind",
    description:
      "Built in a cross-functional team of 8. Recipe browsing and filtering with responsive design.",
    link: "https://smoothify2025.vercel.app/",
    github: "https://github.com/nanawally/javauxproject2025",
    demo: null,
  },
];

const experience = [
  {
    title: "Internship (LIA)",
    place: "Fill Technology",
    period: "jan 2026–may 2026",
    description:
      "Fullstack developer in an agile Scrum team building a recruitment platform in Kotlin/Spring Boot and Angular. Key contributions include a scheduled backup service with comprehensive test coverage (~960 tests, TDD), deep-linking across the full stack, and database query optimization (N+1). Daily work involves code reviews, pair programming, and event-driven architecture with Axon Framework.",
  },
  {
    title: "Service & Support Engineer",
    place: "Ortivus MobiMed AB",
    period: "nov 2024–dec 2025",
    description:
      "Technical troubleshooting of software and hardware in ambulance care systems used across Scandinavia. Responsibilities included remote diagnostics, system configuration, log analysis, and coordinating with development teams on bug reports. Working in a safety-critical medical environment taught me precision, systematic problem-solving, and clear communication under pressure.",
  },
];

const studies = [
  {
    title: "Java Fullstack Developer",
    place: "Stockholms Tekniska Institut",
    period: "2024–2026",
    description: "Two-year vocational program focused on Java, Spring Boot, React, Typescript, TDD, and agile methodology. All courses completed with highest grade (VG).",
  },
  {
    title: "Master of Arts in Musicology",
    place: "Uppsala University",
    period: "2016–2022",
    description: "270 credits including academic writing, research methodology, and complex analysis. Developed strong skills in pattern recognition, structured argumentation, and independent project work.",
  },
];

const leadership = [
  {
    title: "Conductor & Artistic Director",
    org: "Cantus Feminis, Norrlands Nation",
    period: "2017–2024",
    description:
      "Led a women's choir for 7 years; repertoire selection, rehearsal planning, concert production. Two music scholarships awarded for this work.",
  },
  {
    title: "Theatre Director",
    org: "Norrlands Nations Spexensemble",
    period: "2019, 2022, 2023",
    description:
      "Directed three full-scale student theatre productions (Frankentodd, Jakten på Atlantis, Mordet På Arvingarna).",
  },
  {
    title: "Competition Choir Member",
    org: "La Cappella",
    period: "2016–present",
    description:
      "Ranked #3 worldwide among women's choirs. Member of the repertoire council since 2023.",
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

  const sections = [
    { id: "tech", label: "Tech" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "studies", label: "Studies" },
    { id: "leadership", label: "Leadership" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen scroll-smooth">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-background/90 backdrop-blur border-b border-border">
        <div className="max-w-3xl mx-auto px-6 flex items-center justify-center h-12">
          <div className="flex gap-6">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="text-xs tracking-[0.15em] uppercase text-text-muted hover:text-primary transition-colors"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="hero" className="max-w-3xl mx-auto px-6 pt-32 pb-16 text-center">
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
        <div className="flex justify-center gap-6 mt-6">
          <a
            href="https://www.linkedin.com/in/anna-wallstr%C3%B6m-368b72135/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline text-sm tracking-wide"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/nanawally"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline text-sm tracking-wide"
          >
            GitHub
          </a>
          <a
            href="/CV-Anna-Wallstrom.pdf"
            download
            className="text-primary hover:underline text-sm tracking-wide"
          >
            Download CV
          </a>
        </div>
      </section>

      {/* Tech Stack */}
      <section id="tech" className="max-w-3xl mx-auto px-6 py-16 scroll-mt-14">
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
      <section id="projects" className="max-w-3xl mx-auto px-6 py-16 scroll-mt-14">
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
                  {project.demo && (
                    <p className="text-xs text-text-muted mb-3">
                      Demo logins · {project.demo}
                    </p>
                  )}
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
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline text-sm ml-4"
                    >
                      GitHub →
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="max-w-3xl mx-auto px-6 py-16 scroll-mt-14">
        <h2 className="text-2xl font-serif font-bold mb-2 text-center tracking-wide">
          Experience
        </h2>
        <div className="deco-divider mb-8">
          <span className="text-primary text-sm">◆</span>
        </div>
        <div className="flex flex-col gap-6">
          {experience.map((exp) => (
            <div
              key={exp.title}
              className="deco-frame border border-border p-6"
            >
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="font-serif font-bold text-lg">{exp.title}</h3>
                <span className="text-sm text-text-muted">{exp.period}</span>
              </div>
              <p className="text-xs tracking-[0.15em] text-primary uppercase mb-2">
                {exp.place}
              </p>
              <p className="text-text-muted leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Studies */}
      <section id="studies" className="max-w-3xl mx-auto px-6 py-16 scroll-mt-14">
        <h2 className="text-2xl font-serif font-bold mb-2 text-center tracking-wide">
          Studies
        </h2>
        <div className="deco-divider mb-8">
          <span className="text-primary text-sm">◆</span>
        </div>
        <div className="flex flex-col gap-6">
          {studies.map((stud) => (
            <div
              key={stud.title}
              className="deco-frame border border-border p-6"
            >
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="font-serif font-bold text-lg">{stud.title}</h3>
                <span className="text-sm text-text-muted">{stud.period}</span>
              </div>
              <p className="text-xs tracking-[0.15em] text-primary uppercase mb-2">
                {stud.place}
              </p>
              <p className="text-text-muted leading-relaxed">
                {stud.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership & Volunteering */}
      <section id="leadership" className="max-w-3xl mx-auto px-6 py-16 scroll-mt-14">
        <h2 className="text-2xl font-serif font-bold mb-2 text-center tracking-wide">
          Leadership & Volunteering
        </h2>
        <div className="deco-divider mb-8">
          <span className="text-primary text-sm">◆</span>
        </div>
        <div className="flex flex-col gap-6">
          {leadership.map((item) => (
            <div
              key={item.title}
              className="deco-frame border border-border p-6"
            >
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="font-serif font-bold text-lg">{item.title}</h3>
                <span className="text-sm text-text-muted">{item.period}</span>
              </div>
              <p className="text-xs tracking-[0.15em] text-primary uppercase mb-2">
                {item.org}
              </p>
              <p className="text-text-muted leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-3xl mx-auto px-6 py-16 pb-32 scroll-mt-14">
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
