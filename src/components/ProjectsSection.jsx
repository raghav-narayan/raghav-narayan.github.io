import React from "react";

const projects = [
  {
    title: "AuraCast",
    description:
      "An AI-driven SaaS platform offering media transformation tools including video compression, LLM-based captioning, and smart filtering using Gemini AI.",
    github: "https://github.com/raghav-narayan/aura-cast",
  },
  {
    title: "Financio",
    description:
      "A personal finance tracker with JWT authentication, real-time expense visualization, and optimized backend APIs for better performance.",
    github: "https://github.com/raghav-narayan/financio",
  },
];

export default function ProjectsSection() {
  return (
    <section className="py-16 px-6 max-w-5xl mx-auto" id="projects">
      <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div key={project.title} className="bg-white rounded shadow p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-medium hover:underline"
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
