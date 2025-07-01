import React from "react";

const skills = [
  "Python",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "React",
  "Flask",
  "SQL",
  "MongoDB",
  "Docker",
  "Azure",
  "REST APIs",
  "CI/CD",
  "GitHub",
  "Machine Learning",
  "Data Pipelines",
  "TDD",
];

export default function SkillsSection() {
  return (
    <section className="py-16 bg-white px-6 max-w-5xl mx-auto" id="skills">
      <h2 className="text-3xl font-bold text-center mb-10">Technical Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 text-center">
        {skills.map((skill) => (
          <div
            key={skill}
            className="bg-gray-100 p-4 rounded shadow text-sm font-medium hover:bg-blue-100 transition"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
