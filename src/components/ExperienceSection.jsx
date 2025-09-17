import React, { useState } from "react";
import "./experience.css";

const EXPERIENCES = [
  {
    title: "Research Software Engineer",
    company: "The University of Texas at Arlington",
    logo: "/companies/uta.png",
    duration: "Jun 2025 – Present",
    location: "Arlington, TX",
    summary: "Weather viz tool for infrastructure resilience; Python/Streamlit data apps.",
    bullets: [
      "Modular Streamlit pages for map overlays (precipitation/wind/outage).",
      "Reusable Pandas/Numpy utilities; ~40% faster notebook→app handoff.",
      "st.cache_data cut 50MB CSV load ~8s → ~2s."
    ],
    impact: [
      "Research iteration ~2× faster via cached pipelines + pre-baked aggregates.",
      "Reproducible env + schema contracts."
    ],
    tech: ["Python","Pandas","NumPy","Streamlit","Plotly","Leaflet/Folium"]
  },
  {
    title: "Software Engineer Intern – Full Stack",
    company: "NVIT",
    logo: "/companies/nvit.jpeg",
    duration: "Jan 2025 – May 2025",
    location: "Frisco, TX",
    summary: "ILMS v1 (biometrics + payroll) to QA-ready Azure deployment.",
    bullets: [
      "React dashboards + Node APIs for onboarding/attendance/payroll.",
      "Azure Face API liveness + GPS geofencing via FastAPI; no spoofing.",
      "Dockerized services; Bitbucket→Azure App Service CI/CD.",
      "15+ role-based analytics dashboards with exports."
    ],
    impact: [
      "Deployment effort −40%; check-in time −~50% after full Azure recognition.",
      "Adopted across 5+ departments; QA unblocked 2 weeks earlier.",
      "Attendance accuracy ~95%."
    ],
    tech: ["React","Node.js/Express","PostgreSQL","FastAPI","Docker","Azure App Service","Azure Face API","Bitbucket Pipelines"]
  },
  {
    title: "Graduate Assistant – OIE",
    company: "The University of Texas at Arlington",
    logo: "/companies/uta.png",
    duration: "Feb 2024 – Jan 2025",
    location: "Arlington, TX",
    summary: "Audited immigration forms & optimized appointment logistics.",
    bullets: [
      "Standardized checklists; reduced review time & rework.",
      "Excel trackers increased scheduling visibility."
    ],
    impact: ["~15% faster review cycles via checklists & templates."],
    tech: ["PeopleSoft","Excel"]
  },
  {
    title: "Backend Engineer – Conversational AI",
    company: "Cognizant",
    logo: "/companies/cognizant.jpeg",
    duration: "Oct 2021 – Feb 2023",
    location: "Remote",
    summary: "APIs for multilingual automotive chatbot (~100K MAUs, 12+ countries).",
    bullets: [
      "Lead capture, recommendations, market-specific flows (Node/Express).",
      "Azure Language Studio; structured logging & validation.",
      "Stock-car recommender using 3rd-party inventory API.",
      "Ran releases during DevOps transition; zero deployment errors."
    ],
    impact: [
      "+30% leads (India launch); ~10% lower bounce with stock-car feature.",
      "p95 latency −30%; zero failed leads first month via SMTP alerts + RCA."
    ],
    tech: ["Node.js","Express","REST APIs","Azure App Service","Azure Monitor","Postman","TDD/Jest"]
  },
  {
    title: "Frontend Engineer – Omni Channel",
    company: "Cognizant",
    logo: "/companies/cognizant.jpeg",
    duration: "Jan 2020 – Sep 2021",
    location: "Remote",
    summary: "Responsive React UIs for U.S. e-commerce; internal training.",
    bullets: [
      "WCAG-aware, mobile-first UIs; resolved 30+ UI/UX issues.",
      "8-week frontend training with live coding; improved onboarding."
    ],
    impact: ["Shorter bug cycles; more consistent components."],
    tech: ["React","JavaScript","HTML5","CSS3","Jest"]
  }
];

function ExperienceCard({ exp }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="xp-card">
      <div className="xp-head">
        <img className="xp-logo" src={exp.logo} alt={exp.company} />
        <div>
          <p className="xp-title">{exp.title}</p>
          <div className="xp-company">{exp.company}</div>
        </div>
      </div>

      <div className="xp-meta">{exp.duration} · {exp.location}</div>

      {exp.summary && <p className="xp-summary">{exp.summary}</p>}

      <ul className="xp-list">
        {(open ? exp.bullets : exp.bullets.slice(0,3)).map((b, i) => <li key={i}>{b}</li>)}
      </ul>

      {open && exp.impact?.length > 0 && (
        <>
          <div className="xp-label">Impact</div>
          <ul className="xp-list">
            {exp.impact.map((i, k) => <li key={k}>{i}</li>)}
          </ul>
        </>
      )}

      <div className="xp-badges">
        {exp.tech.map((t, i) => <span key={i} className="xp-badge">{t}</span>)}
      </div>

      <div className="xp-actions">
        <button className="xp-btn" onClick={()=>setOpen(v=>!v)}>
          {open ? "Show less" : "Show more"}
        </button>
      </div>
    </div>
  );
}

export default function ExperienceSection() {
  return (
    <section id="experience" className="xp-section">
      <div className="xp-container">
        <h2 className="xp-h2">Experience</h2>
        <div className="xp-grid">
          {EXPERIENCES.map((e, i) => <ExperienceCard key={i} exp={e} />)}
        </div>
      </div>
    </section>
  );
}
