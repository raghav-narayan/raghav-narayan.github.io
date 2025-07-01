import React from "react";

export default function AboutSection() {
  return (
    <section className="py-5 bg-white" id="about">
      <div className="container">
        <h2 className="text-center fw-bold mb-4">About Me</h2>
        <p className="lead text-muted text-center mb-4">
          Full-stack Software Engineer with 3+ years of experience building scalable web applications using AI, cloud-native infrastructure, and DevOps practices.
        </p>
        <p>
          I'm Raghav Narayan Ramachandran, recently completed my MS in Computer Science at the University of Texas at Arlington at May 2025. I have experience working across both frontend and backend systems, and I focus on building solutions that are both efficient and impactful.
        </p>
        <p>
          At <strong>NVIT</strong>, I led the full-stack development and delivery of ILMS v1, a cloud-based government platform. The system included biometric face verification, GPS validation, and dashboard modules. I also improved CI/CD workflows using Docker and Bitbucket, which reduced deployment time by 40%.
        </p>
        <p>
          During my time at <strong>Cognizant</strong>, I worked on chatbot and e-commerce systems as both a backend and frontend engineer. I built RESTful APIs using Node.js, optimized performance, implemented test-driven development using Postman, and worked in SAFe Agile teams using Azure DevOps.
        </p>
        <p>
          I enjoy solving practical problems with AI and machine learning. Some of my notable projects include <strong>AuraCast</strong>, a media automation suite powered by LLMs, and <strong>Financio</strong>, a finance tracker with JWT-based authentication. I led agile teams to design, and build these tools.
        </p>
        <p>
          Outside of work, I am committed to continuous learning and enjoy breaking down complex systems into simple, maintainable components.
        </p>
      </div>
    </section>
  );
}
