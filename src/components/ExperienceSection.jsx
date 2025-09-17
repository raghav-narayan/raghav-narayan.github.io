import React from "react";

const experiences = [
  {
    title: "Research Software Engineer",
    company: "The University of Texas at Arlington",
    logo: "/companies/uta.png",
    duration: "Jun 2025 – Present",
    location: "Arlington, TX",
    bullets: [
      "Supporting the development and optimization of a weather visualization tool for infrastructure resilience research",
      "Working on Python-based services using Streamlit, and other libraries for data presentation and backend logic"
    ],
    tech: ["Python", "Numpy", "Streamlit", "Pandas"],
  },
  {
    title: "Software Engineer Intern – Full Stack",
    company: "NVIT",
    logo: "/companies/nvit.jpeg",
    duration: "Jan 2025 – May 2025",
    location: "Frisco, TX",
    bullets: [
      "Released ILMS v1, a cloud-native government platform.",
      "Developed React dashboards and Node.js APIs to automate workflows.",
      "Integrated biometric tracking using Flask, Azure Face API, GPS geofencing.",
      "Orchestrated CI/CD using Docker and Azure DevOps, reducing deployment time by 40%.",
    ],
    tech: ["React", "Node.js", "PostgreSQL", "Flask", "Docker", "Azure"],
  },
  {
    title: "Graduate Assistant – OIE",
    company: "The University of Texas at Arlington",
    logo: "/companies/uta.png",
    duration: "Feb 2024 – Jan 2025",
    location: "Arlington, TX",
    bullets: [
      "Reviewed immigration forms and advised students on compliance.",
      "Managed appointments and improved student operations logistics.",
    ],
    tech: ["PeopleSoft", "Excel"],
  },
  {
    title: "Backend Engineer – Conversational AI",
    company: "Cognizant",
    logo: "/companies/cognizant.jpeg",
    duration: "Oct 2021 – Feb 2023",
    location: "Remote",
    bullets: [
      "Built Node.js APIs for multilingual chatbot (100K+ MAUs) across 12+ countries.",
      "Improved latency by 30% and implemented Azure Language Studio for NLP.",
      "Applied TDD and Postman for unit, regression, and integration testing.",
    ],
    tech: ["Node.js", "REST APIs", "Azure", "Postman", "TDD"],
  },
  {
    title: "Frontend Engineer – Omni Channel",
    company: "Cognizant",
    logo: "/companies/cognizant.jpeg",
    duration: "Jan 2020 – Sep 2021",
    location: "Remote",
    bullets: [
      "Built responsive UIs with React for a US-based e-commerce client.",
      "Resolved 30+ UI/UX bugs and conducted 10+ technical workshops.",
    ],
    tech: ["React", "JavaScript", "HTML5", "CSS3"],
  },
];

export default function ExperienceSection() {
  return (
    <section className="py-5 bg-white" id="experience">
      <div className="container">
        <h2 className="text-center fw-bold mb-4">Experience</h2>
        <div className="row g-4">
          {experiences.map((exp, i) => (
            <div key={i} className="col-md-6">
              <div className="border rounded p-3 h-100 shadow-sm experience-card">
                <div className="d-flex align-items-center mb-2">
                  <img
                    src={process.env.PUBLIC_URL + exp.logo}
                    alt={exp.company}
                    style={{ width: "40px", height: "40px", objectFit: "contain", marginRight: "12px" }}
                  />
                  <div>
                    <h6 className="mb-0 fw-bold">{exp.title}</h6>
                    <small className="text-muted">{exp.company}</small>
                  </div>
                </div>
                <div className="text-muted small mb-2">
                  {exp.duration} · {exp.location}
                </div>
                <ul className="small text-muted ps-3 mb-2">
                  {exp.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
                <div className="d-flex flex-wrap gap-2">
                  {exp.tech.map((tech, k) => (
                    <span key={k} className="badge bg-light text-dark border">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <style>{`
          .experience-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .experience-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 0 15px rgba(0,0,0,0.05);
          }
        `}</style>
      </div>
    </section>
  );
}
