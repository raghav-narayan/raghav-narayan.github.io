import React from "react";

const skills = [
  "Python", "JavaScript", "TypeScript", "Node.js", "React", "Flask",
  "SQL", "MongoDB", "Docker", "Azure", "REST APIs", "CI/CD",
  "GitHub", "Machine Learning", "Data Pipelines", "TDD"
];

export default function SkillsSection() {
  return (
    <section className="py-5 bg-light text-center" id="skills">
      <div className="container">
        <h2 className="mb-4 fw-bold">Technical Skills</h2>
        <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 g-4">
          {skills.map((skill, index) => (
            <div key={index} className="col">
              <div className="card shadow-sm border-0 h-100">
                <div className="card-body d-flex align-items-center justify-content-center">
                  <span className="fw-semibold">{skill}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
