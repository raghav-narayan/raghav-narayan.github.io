import React, { useEffect, useState } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { FaHome, FaUser, FaCode, FaProjectDiagram, FaBlog, FaStar, FaEnvelope } from "react-icons/fa";

const sections = [
  { id: "home", icon: <FaHome />, label: "Home" },
  { id: "about", icon: <FaUser />, label: "About" },
  { id: "skills", icon: <FaCode />, label: "Skills" },
  { id: "projects", icon: <FaProjectDiagram />, label: "Projects" },
  { id: "blogs", icon: <FaBlog />, label: "Blogs" },
  { id: "testimonials", icon: <FaStar />, label: "Testimonials" },
  { id: "contact", icon: <FaEnvelope />, label: "Contact" }
];

export default function SideNav() {
  const [activeId, setActiveId] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0.1 }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="position-fixed top-50 start-0 translate-middle-y d-flex flex-column gap-3 ps-2 z-3">
      {sections.map((s, idx) => (
        <OverlayTrigger
          key={idx}
          placement="right"
          overlay={<Tooltip>{s.label}</Tooltip>}
        >
          <a
            href={`#${s.id}`}
            className={`btn rounded-circle shadow-sm d-flex align-items-center justify-content-center ${
              activeId === s.id ? "btn-primary text-white" : "btn-light"
            }`}
            style={{ width: 45, height: 45 }}
          >
            {s.icon}
          </a>
        </OverlayTrigger>
      ))}
    </div>
  );
}
