import React from "react";

export default function AboutSection() {
  return (
    <section className="py-5 bg-white" id="about">
      <div className="container">
        <h2 className="text-center fw-bold mb-4">About Me</h2>
        <p className="lead text-muted text-center mb-4">
          Full-stack Software Engineer with 3+ years of experience building
          scalable, AI-driven web platforms powered by cloud-native
          infrastructure and modern DevOps practices.
        </p>

        <p>
          I’m <strong>Raghav Narayan</strong>, a recent{" "}
          <strong>M.S. Computer Science</strong> graduate from the{" "}
          <strong>University of Texas at Arlington (May 2025)</strong>. My
          experience spans both frontend and backend systems, with a focus on
          engineering solutions that are efficient, reliable, and deliver
          measurable business impact.
        </p>

        <p>
          At <strong>NVIT</strong>, I led the full-stack development of{" "}
          <strong>ILMS v1</strong>, a cloud-based government platform adopted by
          multiple departments. The system integrated biometric face
          verification, GPS validation, and analytics dashboards. I also
          optimized CI/CD workflows with <strong>Docker</strong> and{" "}
          <strong>Bitbucket</strong>, reducing deployment time by{" "}
          <strong>~40%</strong>.
        </p>

        <p>
          Previously at <strong>Cognizant</strong>, I engineered{" "}
          <strong>RESTful APIs</strong> for multilingual chatbot and
          e-commerce platforms, implemented{" "}
          <strong>test-driven development (TDD)</strong> using Postman, and
          collaborated in <strong>SAFe Agile</strong> teams via{" "}
          <strong>Azure DevOps</strong>. My work improved service performance
          and stability across several high-traffic client deployments.
        </p>

        <p>
          Beyond enterprise systems, I’m passionate about solving real-world
          problems through <strong>AI and machine learning</strong>. I built{" "}
          <strong>AuraCast</strong>, a media automation suite powered by{" "}
          <strong>LLMs</strong>, and <strong>Financio</strong>, a secure
          finance tracker with <strong>JWT-based authentication</strong>. I
          led small agile pods to design and deploy these tools end-to-end.
        </p>

        <p>
          Outside of engineering, I’m driven by continuous learning and enjoy
          simplifying complex systems into elegant, maintainable, and scalable
          solutions.
        </p>
      </div>
    </section>
  );
}
