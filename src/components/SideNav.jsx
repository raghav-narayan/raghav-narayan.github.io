import React, { useEffect, useState } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import {
  FaHome,
  FaUser,
  FaCode,
  FaProjectDiagram,
  FaBlog,
  FaStar,
  FaEnvelope,
  FaBriefcase
} from "react-icons/fa";

const sections = [
  { id: "home", icon: <FaHome />, label: "Home" },
  { id: "about", icon: <FaUser />, label: "About" },
  { id: "skills", icon: <FaCode />, label: "Skills" },
  { id: "experience", icon: <FaBriefcase />, label: "Experience" },
  { id: "projects", icon: <FaProjectDiagram />, label: "Projects" },
  { id: "blogs", icon: <FaBlog />, label: "Blogs" },
  { id: "testimonials", icon: <FaStar />, label: "Testimonials" },
  { id: "contact", icon: <FaEnvelope />, label: "Contact" }
];

export default function SideNav() {
  const [activeId, setActiveId] = useState("home");

  useEffect(() => {
    const sectionElements = sections.map(({ id }) =>
      document.getElementById(id)
    );

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visibleSections.length > 0) {
          const topMost = visibleSections[0];
          setActiveId(topMost.target.id);
        } else {
          setActiveId("home"); // fallback when no section is intersecting
        }
      },
      {
        threshold: [0.25, 0.5, 0.75] // more responsive visibility range
      }
    );

    sectionElements.forEach((el) => {
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
