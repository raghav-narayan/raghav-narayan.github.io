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
      "Engineered a Streamlit-based weather analytics platform, containerized with PyInstaller; cut load times ~40% via caching & pipeline optimization.",
      "Automated GIS workflows (GeoPandas/QGIS) to generate DFW floodplain/risk maps; reduced manual mapping ~60% and enabled resilience planning.",
      "Adapted SILK reliability methods for simulations, eliminating nested loops for 2–3× faster runs while maintaining 95%+ accuracy."
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
      "Architected and released ILMS v1, a cloud-native government platform adopted by 5+ departments for attendance & payroll.",
      "Delivered biometric attendance (95%+ accuracy) via Flask + Azure Face API with GPS geofencing & offline sync; eliminated proxy check-ins.",
      "Built 15+ role-based React dashboards; shipped modular Node.js/Express + PostgreSQL REST APIs with OAuth2/JWT & RBAC.",
      "Containerized services with Docker and automated CI/CD on Azure DevOps/Bitbucket; reduced deployment effort ~40%."
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
      "Reviewed immigration forms and advised students on compliance; streamlined advising logistics and appointment throughput.",
      "Improved operational accuracy by standardizing document checks across high-volume periods."
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
      "Built Node.js/Express services for a multilingual chatbot on Azure used in 12+ countries (100K+ MAUs), contributing to ~$1M+ leads impact.",
      "Reduced p95 latency ~30% by optimizing payloads and modularizing high-traffic endpoints; zero failed leads in initial market rollouts.",
      "Implemented TDD & automated testing (Postman); cut QA bugs ~60%. Strengthened observability with structured logging & Azure Monitor.",
      "Maintained 100% on-time, biweekly releases across 6 cycles by stepping into DevOps to stabilize Azure pipelines."
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
      "Delivered responsive UIs for a U.S. e-commerce client using React; resolved 30+ UI/UX issues and improved accessibility (WCAG).",
      "Led 10+ technical workshops; built reusable component patterns to accelerate delivery and improve cross-team consistency."
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
                className="border rounded p-3 h-100 shadow-sm experience-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={i}
                variants={cardVariants}
                aria-label={`${exp.title} at ${exp.company}`}
              >
                <div className="d-flex align-items-center mb-2">
                  <img
                    src={process.env.PUBLIC_URL + exp.logo}
                    alt={`${exp.company} logo`}
                    width={40}
                    height={40}
                    style={{ objectFit: "contain", marginRight: 12 }}
                    loading="lazy"
                  />
                  <div>
                    <h3 className="h6 mb-0 fw-bold">{exp.title}</h3>
                    <div className="text-muted small">{exp.company}</div>
                  </div>
                </div>

                <div className="text-muted small mb-2">
                  <span className="me-2">{exp.duration}</span>
                  <span aria-hidden="true">·</span>
                  <span className="ms-2">{exp.location}</span>
                </div>

                <ul className="small text-muted ps-3 mb-3">
                  {exp.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>

                <div className="d-flex flex-wrap gap-2" aria-label="Technologies used">
                  {exp.tech.map((t) => (
                    <span key={t} className="badge bg-light text-dark border">{t}</span>
                  ))}
                </div>
              </motion.article>
            </div>
          ))}
        </div>

        <style>{`
          .experience-card {
            transition: transform 0.25s ease, box-shadow 0.25s ease;
            will-change: transform;
          }
          .experience-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 8px 24px rgba(0,0,0,0.06);
          }
          @media (prefers-reduced-motion: reduce) {
            .experience-card { transition: none; }
          }
        `}</style>
      </div>
    </section>
  );
}
