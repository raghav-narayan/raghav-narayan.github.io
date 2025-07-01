import React from "react";

const projects = [
  {
    title: "Financio",
    description: "A modern finance tracker with JWT-based auth, real-time state management, and dynamic analytics using Chart.js for smarter budgeting and expense control.",
    tech: ["React", "Node.js", "MongoDB", "JWT", "Chart.js"],
    image: process.env.PUBLIC_URL + "/projects/financio.png",
    github: "https://github.com/raghav-narayan/financio",
    demo: ""
  },
  {
    title: "AuraCast",
    description: "A media SaaS platform that enables users to compress videos, apply smart filters, and auto-generate captions using Gemini AI—built for content creators and marketers.",
    tech: ["Next.js", "Gemini AI", "Tailwind", "TypeScript"],
    image: process.env.PUBLIC_URL + "/projects/auracast.png",
    github: "https://github.com/raghav-narayan/auracast",
    demo: ""
  },
  {
    title: "AI Resume Builder",
    description: "An AI-powered resume generator that suggests bullet points based on job titles, offers PDF export, and enables rich text editing—built using Gemini API, Strapi, and Clerk.",
    tech: ["React", "Tailwind", "Vite", "Gemini API", "Strapi", "Clerk", "Vercel"],
    image: process.env.PUBLIC_URL + "/projects/ai_resume.png",
    github: "https://github.com/raghav-narayan/ai-resume-builder",
    demo: "https://ai-resume-creator-azure.vercel.app"
  },
  {
    title: "Trello UI Automation",
    description: "A robust Selenium-based UI testing suite for Trello that validates login, board creation, drag-and-drop, and dashboard UI with visual feedback and auto-generated reports.",
    tech: ["Python", "Selenium", "Pytest", "HTML", "Automation"],
    image: process.env.PUBLIC_URL + "/projects/selenium_trello.png",
    github: "https://github.com/raghav-narayan/selenium",
    demo: ""
  }
];

export default function ProjectsSection() {
  return (
    <section className="py-5 bg-white" id="projects">
      <div className="container">
        <h2 className="text-center fw-bold mb-4">Projects</h2>
        <p className="text-center mb-5 text-muted fs-6">
          A few projects that showcase my skills in full-stack engineering, AI integration, and test automation.
        </p>
        <div className="row g-4">
          {projects.map((project, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div className="card h-100 shadow-sm border-0 project-card">
                <div className="ratio ratio-16x9">
                  <img
                    src={project.image}
                    className="w-100 h-100 object-fit-cover"
                    alt={project.title}
                  />
                </div>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-semibold">{project.title}</h5>
                  <p className="text-muted small">{project.description}</p>
                  <div className="mb-2 d-flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="badge bg-light text-dark border">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto d-flex gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        className="btn btn-outline-dark btn-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        className="btn btn-primary btn-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .project-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 0 20px rgba(0,0,0,0.1);
        }
        .object-fit-cover {
          object-fit: cover;
        }
      `}</style>
    </section>
  );
}
