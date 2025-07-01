import React from "react";

export default function AboutSection() {
  return (
   <section className="py-5 bg-white" id="about">
  <div className="container">
    <h2 className="text-center fw-bold mb-4">About Me</h2>
    <p className="lead text-muted text-center mb-4">
      Full-stack Software Engineer with 3+ years of experience building scalable web apps with integrated AI, cloud-native architecture, and DevOps practices.
    </p>
    <p>
      I'm Raghav Narayan Ramachandran, currently pursuing my MS in Computer Science at the University of Texas at Arlington (May 2025). With a solid foundation in both backend and frontend technologies, I specialize in building efficient and impactful solutions—ranging from multilingual chatbots to internal biometric verification platforms.
    </p>
    <p>
      Previously at <strong>NVIT</strong>, I led end-to-end delivery of ILMS v1—a government-grade cloud system—integrating biometric liveness detection, GPS validation, and role-based dashboards. I managed CI/CD pipelines using Docker & Bitbucket, improving deployment velocity by 40%.
    </p>
    <p>
      At <strong>Cognizant</strong>, I worked as both a backend and frontend engineer across chatbot systems and e-commerce platforms. I developed REST APIs in Node.js with performance tuning, led QA automation using Postman & TDD, and collaborated using Azure DevOps in SAFe Agile environments.
    </p>
    <p>
      I enjoy solving real-world problems with AI and ML—whether it’s generating smart captions in SaaS tools or building data pipelines for anomaly detection in IoT systems. I’ve also built polished products like <strong>AuraCast</strong> (LLM-driven media suite) and <strong>Financio</strong> (JWT-authenticated finance tracker), leading teams in agile sprints.
    </p>
    <p>
      Outside of coding, I write technical blogs and contribute to open-source projects. I’m known for my ownership mindset, fast learning ability, and drive to simplify complex systems into elegant, maintainable solutions.
    </p>
  </div>
</section>

  );
}
