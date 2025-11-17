import React, { useEffect, useState } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { motion } from "framer-motion";
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

// ==========================================================
//               PREMIUM ROBOT HEAD MASCOT (SVG + Motion)
// ==========================================================

const Mascot = ({ direction, isHovering }) => {
  const tilt =
    direction === "up" ? -6 :
    direction === "down" ? 6 : 0;

  return (
    <motion.div
      layoutId="mascot"
      className="position-absolute"
      style={{
        left: "0",
        top: "50%",
        transform: "translate(-125%, -50%)",  // perfect alignment
        width: 85,
        height: 85,
        zIndex: 20,
        pointerEvents: "none"
      }}
      transition={{
        type: "spring",
        stiffness: 140,
        damping: 18
      }}
    >
      <motion.div
        animate={{
          y: [0, -5, 0],
          rotate: tilt,
          scale: isHovering ? 1.12 : 1
        }}
        transition={{
          y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
          rotate: { type: "spring", stiffness: 160, damping: 14 },
          scale: { duration: 0.25 }
        }}
        style={{
          width: 85,
          height: 85,
          filter: isHovering
            ? "drop-shadow(0 0 20px rgba(0,150,255,0.6))"
            : "drop-shadow(0 0 10px rgba(0,150,255,0.25))"
        }}
      >
        {/* FUTURISTIC AI HEAD — PURE SVG */}
        <svg
          width="85"
          height="85"
          viewBox="0 0 120 120"
          style={{ overflow: "visible" }}
        >
          {/* Outer glowing ring */}
          <motion.circle
            cx="60"
            cy="60"
            r="42"
            fill="#0d0f12"
            stroke="#1e90ff"
            strokeWidth="4"
            animate={{
              strokeWidth: isHovering ? 5 : 4,
              opacity: isHovering ? 1 : 0.9
            }}
            transition={{ duration: 0.25 }}
          />

          {/* Screen visor */}
          <rect
            x="32"
            y="38"
            width="56"
            height="40"
            rx="16"
            fill="#1a1d22"
            stroke="#2a9df4"
            strokeWidth="3"
          />

          {/* Eyes — blinking */}
          <motion.circle
            cx="48"
            cy="58"
            r="6"
            fill="#61c6ff"
            animate={{ r: [6, 6, 6, 2, 6] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          <motion.circle
            cx="72"
            cy="58"
            r="6"
            fill="#61c6ff"
            animate={{ r: [6, 6, 6, 2, 6] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: 0.1,
              ease: "easeInOut"
            }}
          />

          {/* Mouth — expands slightly on hover */}
          <motion.rect
            x="50"
            y="68"
            width="20"
            height="4"
            rx="2"
            fill="#61c6ff"
            animate={{
              height: isHovering ? 10 : 4,
              y: isHovering ? 65 : 68
            }}
            transition={{ duration: 0.25 }}
          />
        </svg>
      </motion.div>
    </motion.div>
  );
};


// ==========================================================
//                        NAV SECTIONS
// ==========================================================
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

// ==========================================================
//                     FINAL POLISHED SIDENAV
// ==========================================================
export default function SideNav() {
  const [activeId, setActiveId] = useState("home");
  const [prevIndex, setPrevIndex] = useState(0);
  const [hoveredId, setHoveredId] = useState(null);

  // Track visible section smoothly
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) setActiveId(visible[0].target.id);
      },
      { threshold: 0.35 }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const activeIndex = sections.findIndex((s) => s.id === activeId);

  const direction =
    activeIndex < prevIndex ? "up" :
    activeIndex > prevIndex ? "down" : "none";

  useEffect(() => {
    setPrevIndex(activeIndex);
  }, [activeIndex]);

  return (
    <div
      className="position-fixed top-50 start-0 translate-middle-y d-flex flex-column gap-4 ps-4 z-3"
      style={{ width: "85px", overflow: "visible" }}
    >
      {sections.map((s, idx) => {
        const isActive = activeId === s.id;
        const isHovering = hoveredId === s.id;

        return (
          <div
            key={idx}
            className="position-relative"
            style={{ height: 68 }} // perfect fit
          >
            {isActive && (
              <Mascot direction={direction} isHovering={isHovering} />
            )}

            <OverlayTrigger
              placement="right"
              overlay={<Tooltip>{s.label}</Tooltip>}
            >
              <motion.a
                href={`#${s.id}`}
                className="sidenav-link d-flex align-items-center justify-content-center rounded-circle"
                style={{
                  width: 55,
                  height: 55,
                  background: isActive ? "#007bff" : "#ffffff",
                  color: isActive ? "#ffffff" : "#333",
                  boxShadow:
                    isActive
                      ? "0 10px 25px rgba(0,123,255,0.35)"
                      : "0 4px 12px rgba(0,0,0,0.12)",
                  border: isActive
                    ? "2px solid #007bff"      // clean border for blue active state (optional)
                    : "2px solid rgba(0,0,0,0.25)",  // subtle dark border on white circles
                }}
                onMouseEnter={() => setHoveredId(s.id)}
                onMouseLeave={() => setHoveredId(null)}
                whileHover={{ scale: 1.15 }}
                transition={{
                  type: "spring",
                  stiffness: 210,
                  damping: 18
                }}
              >
                {s.icon}
              </motion.a>
            </OverlayTrigger>
          </div>
        );
      })}
    </div>
  );
}
