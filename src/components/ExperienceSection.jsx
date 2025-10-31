import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Research Software Engineer",
    company: "The University of Texas at Arlington",
    logo: "/companies/uta.png",
    duration: "Jun 2025 – Present",
    location: "Arlington, TX",
    bullets: [
      "Engineered a Streamlit-based weather analytics platform, containerized with PyInstaller, achieving a ~40% improvement in load times via caching and pipeline optimization.",
      "Automated GIS workflows using GeoPandas and QGIS, generating floodplain and risk maps across the DFW region and reducing manual mapping efforts by 60%.",
      "Adapted SILK reliability methods for simulations, improving processing speed 2–3× faster while maintaining 95%+ accuracy in data results."
    ],
    tech: ["Python", "Pandas", "GeoPandas", "Streamlit", "PyInstaller", "QGIS"],
  },
  {
    title: "Software Engineer Intern — Full Stack",
    company: "NVIT",
    logo: "/companies/nvit.jpeg",
    duration: "Jan 2025 – May 2025",
    location: "Frisco, TX",
    bullets: [
      "Architected and launched ILMS v1, a cloud-native government platform adopted by 5+ departments for biometric attendance and payroll management.",
      "Integrated biometric attendance (95%+ accuracy) via Flask + Azure Face API with GPS geofencing and offline sync, eliminating proxy check-ins and improving data accuracy.",
      "Developed 15+ responsive dashboards using React and TypeScript, along with modular Node.js/Express + PostgreSQL REST APIs with OAuth2/JWT & RBAC for access control.",
      "Streamlined deployment workflows by containerizing services with Docker and automating CI/CD pipelines on Azure DevOps/Bitbucket, reducing deployment effort by 40%."
    ],
    tech: ["React", "Node.js/Express", "PostgreSQL", "Flask", "Docker", "Azure", "OAuth2/JWT"],
  },
  {
    title: "Graduate Assistant — Office of International Education",
    company: "The University of Texas at Arlington",
    logo: "/companies/uta.png",
    duration: "Feb 2024 – Jan 2025",
    location: "Arlington, TX",
    bullets: [
      "Reviewed immigration forms and provided compliance guidance to students, improving advising throughput and reducing processing time by 30%.",
      "Standardized document review processes during high-volume periods, resulting in improved operational accuracy and reduced errors."
    ],
    tech: ["PeopleSoft", "Excel"],
  },
  {
    title: "Backend Engineer — Conversational AI",
    company: "Cognizant",
    logo: "/companies/cognizant.jpeg",
    duration: "Oct 2021 – Feb 2023",
    location: "Remote",
    bullets: [
      "Designed and developed Node.js/Express services for a multilingual chatbot platform, scaling to 12+ countries with 100K+ MAUs, leading to a ~$1M+ increase in qualified leads.",
      "Optimized high-traffic APIs, reducing p95 latency by 30% and modularizing endpoints to ensure zero failed leads in initial market rollouts.",
      "Implemented Test-Driven Development (TDD) practices and automated testing with Postman, resulting in a 60% reduction in QA bugs.",
      "Maintained a 100% on-time release rate for 6 consecutive biweekly cycles by managing Azure DevOps pipelines."
    ],
    tech: ["Node.js/Express", "REST APIs", "Azure", "Postman", "TDD", "Azure Monitor"],
  },
  {
    title: "Frontend Engineer — Omni-Channel",
    company: "Cognizant",
    logo: "/companies/cognizant.jpeg",
    duration: "Jan 2020 – Sep 2021",
    location: "Remote",
    bullets: [
      "Delivered accessible, responsive UIs for a U.S. e-commerce client using React, resolving over 30 UI/UX issues and improving WCAG accessibility standards.",
      "Led 10+ technical workshops, creating reusable component patterns that improved team throughput by 25% and enhanced cross-team consistency."
    ],
    tech: ["React", "JavaScript", "HTML5", "CSS3", "Accessibility"],
  },
];


const cardVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, type: "tween", duration: 0.35 }
  }),
};

export default function ExperienceSection() {
  return (
    <section className="py-5 bg-white" id="experience" aria-labelledby="experience-heading">
      <div className="container">
        <h2 id="experience-heading" className="text-center fw-bold mb-4">Experience</h2>

        <div className="row g-4">
          {experiences.map((exp, i) => (
            <div key={`${exp.company}-${exp.title}`} className="col-md-6">
  <motion.article
  className="border rounded p-4 h-100 shadow-sm experience-card"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
  custom={i}
  variants={cardVariants}
  aria-label={`${exp.title} at ${exp.company}`}
>
  <div className="d-flex align-items-center mb-3">
    <img
      src={process.env.PUBLIC_URL + exp.logo}
      alt={`${exp.company} logo`}
      width={50}
      height={50}
      style={{
        objectFit: "contain",
        marginRight: 12,
        borderRadius: "50%",
      }}
      loading="lazy"
    />
    <div>
      <h3 className="h5 mb-1 fw-bold">{exp.title}</h3>
      <div className="text-muted small">{exp.company}</div>
    </div>
  </div>

  <div className="text-muted small mb-3">
    <span className="me-2">{exp.duration}</span>
    <span aria-hidden="true">·</span>
    <span className="ms-2">{exp.location}</span>
  </div>

  <ul className="small text-muted ps-3 mb-3" style={{ lineHeight: "1.7" }}>
    {exp.bullets.map((b, j) => (
      <li key={j}>{b}</li>
    ))}
  </ul>

  <div className="d-flex flex-wrap gap-2" aria-label="Technologies used">
    {exp.tech.map((t) => (
      <span
        key={t}
        className="badge bg-light text-dark border tech-badge"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title={t}
      >
        {t}
      </span>
    ))}
  </div>
</motion.article>

            </div>
          ))}
        </div>

        <style>{`
          .experience-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            will-change: transform;
          }

          .experience-card:hover {
            transform: translateY(-8px) scale(1.05);
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            z-index: 2;
          }

          .tech-badge {
            font-size: 0.875rem;
            padding: 5px 10px;
            border-radius: 12px;
            background-color: #e9ecef;
            transition: all 0.3s ease;
          }

          .tech-badge:hover {
            background-color: #f1f1f1;
            color: #007bff;
            transform: scale(1.05);
          }

          @media (max-width: 767px) {
            .experience-card {
              padding: 1.5rem;
            }

            .experience-card:hover {
              transform: none;
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .experience-card { transition: none; }
          }
        `}</style>
      </div>
    </section>
  );
}
