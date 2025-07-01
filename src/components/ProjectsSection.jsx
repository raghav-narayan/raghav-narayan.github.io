import React from "react";

const projects = [
  {
    title: "AuraCast",
    description:
      "AI-powered SaaS platform offering media tools like video compression, LLM captioning, and smart filtering with Gemini.",
    github: "https://github.com/raghav-narayan/aura-cast",
  },
  {
    title: "Financio",
    description:
      "Personal finance tracker with JWT authentication, API optimization, and real-time data visualization using Chart.js.",
    github: "https://github.com/raghav-narayan/financio",
  },
];

export default function ProjectsSection() {
  return (
    <section className="py-5" id="projects">
      <div className="container">
        <h2 className="text-center fw-bold mb-5">Projects</h2>
        <div className="row g-4">
          {projects.map((project, index) => (
            <div key={index} className="col-md-6">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-semibold">{project.title}</h5>
                  <p className="card-text flex-grow-1">{project.description}</p>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-primary mt-auto"
                  >
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
