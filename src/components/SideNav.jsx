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

const ACCENT_COLOR = "#1e88ff";
const ICON_BASE_COLOR = "#0f172a";

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
        transform: "translate(-125%, -50%)",
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
        {/* Futuristic AI head - pure SVG */}
        <svg
          width="85"
          height="85"
          viewBox="0 0 120 120"
          style={{ overflow: "visible" }}
        >
          <defs>
            <linearGradient id="visorGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.08" />
            </linearGradient>
          </defs>
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

          <motion.circle
            cx="60"
            cy="60"
            r="52"
            fill="none"
            stroke="rgba(30,136,255,0.35)"
            strokeWidth="1.5"
            animate={{
              opacity: [0.2, 0.7, 0.2],
              scale: isHovering ? [0.95, 1.08, 0.95] : [0.98, 1.03, 0.98]
            }}
            transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
          />

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
          <motion.rect
            x="32"
            width="56"
            height="6"
            rx="3"
            fill="url(#visorGlow)"
            animate={{
              y: [40, 74, 40],
              opacity: isHovering ? [0.15, 0.4, 0.15] : [0.08, 0.25, 0.08]
            }}
            transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
          />

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
          <motion.circle
            cx="60"
            cy="25"
            r="6"
            fill="#1e90ff"
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="1"
            animate={{
              scale: isHovering ? [1, 1.25, 1] : [0.95, 1.05, 0.95],
              opacity: isHovering ? [0.7, 1, 0.7] : [0.45, 0.85, 0.45],
              y: isHovering ? [25, 23, 25] : 25
            }}
            transition={{ duration: 2.2, repeat: Infinity }}
          />
          <motion.circle
            cx="60"
            cy="92"
            r="4"
            fill="rgba(14,165,233,0.35)"
            animate={{
              scale: isHovering ? [1, 1.35, 1] : [0.95, 1.05, 0.95],
              opacity: [0.2, 0.6, 0.2]
            }}
            transition={{ duration: 2.8, repeat: Infinity }}
          />
        </svg>
      </motion.div>
    </motion.div>
  );
};

const OrbitingCompanion = ({
  accent = ACCENT_COLOR,
  size = 70,
  duration = 8,
  delay = 0
}) => (
  <motion.div
    className="position-absolute"
    style={{
      width: size,
      height: size,
      left: "50%",
      top: "50%",
      marginLeft: -size / 2,
      marginTop: -size / 2,
      pointerEvents: "none",
      filter: "drop-shadow(0 0 18px rgba(14,165,233,0.25))"
    }}
    animate={{ rotate: 360 }}
    transition={{
      duration,
      repeat: Infinity,
      ease: "linear",
      delay
    }}
  >
    <motion.div
      style={{
        width: "100%",
        height: "100%",
        borderRadius: "999px",
        border: `1px dashed ${accent}66`
      }}
      animate={{
        opacity: [0.25, 0.65, 0.25],
        scale: [0.95, 1, 0.95]
      }}
      transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
    />

    <motion.span
      style={{
        position: "absolute",
        width: 12,
        height: 12,
        borderRadius: "999px",
        background: accent,
        left: "50%",
        top: -6,
        marginLeft: -6,
        boxShadow: `0 0 18px ${accent}`
      }}
      animate={{
        scale: [0.9, 1.35, 0.9],
        opacity: [0.65, 1, 0.65]
      }}
      transition={{
        duration: 1.6,
        repeat: Infinity,
        ease: "easeInOut",
        delay
      }}
    />
  </motion.div>
);

const AnimatedIcon = ({ Icon, isActive, isHovering }) => (
  <motion.div
    className="position-relative d-flex align-items-center justify-content-center"
    animate={{
      rotate: isActive
        ? [0, -6, 6, -6, 0]
        : isHovering
          ? [0, -4, 4, -4, 0]
          : 0,
      y: isActive ? [-1, -4, -1] : 0,
      scale: isActive ? 1.12 : isHovering ? 1.06 : 1
    }}
    transition={{
      duration: isActive ? 1.6 : 0.8,
      repeat: isActive ? Infinity : 0,
      ease: "easeInOut"
    }}
  >
    <motion.span
      className="position-absolute rounded-circle"
      style={{
        width: 38,
        height: 38,
        background: `radial-gradient(circle, ${ACCENT_COLOR}50, transparent 70%)`,
        filter: "blur(1px)"
      }}
      animate={{
        opacity: isActive ? [0.3, 0.8, 0.3] : isHovering ? 0.35 : 0.2,
        scale: isActive ? [1, 1.2, 1] : 1
      }}
      transition={{ duration: 1.2, repeat: isActive ? Infinity : 0 }}
    />
    <Icon size={18} color="#f8fafc" />
  </motion.div>
);


// ==========================================================
//                        NAV SECTIONS
// ==========================================================
const sections = [
  { id: "home", label: "Home", Icon: FaHome },
  { id: "about", label: "About", Icon: FaUser },
  { id: "skills", label: "Skills", Icon: FaCode },
  { id: "experience", label: "Experience", Icon: FaBriefcase },
  { id: "projects", label: "Projects", Icon: FaProjectDiagram },
  { id: "blogs", label: "Blogs", Icon: FaBlog },
  { id: "testimonials", label: "Testimonials", Icon: FaStar },
  { id: "contact", label: "Contact", Icon: FaEnvelope }
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

  const handleNavClick = (sectionId) => (event) => {
    event.preventDefault();
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div
      className="position-fixed top-50 start-0 translate-middle-y ps-4 z-3"
      style={{
        width: "110px",
        overflow: "visible",
        pointerEvents: "none"
      }}
    >
      <div
        className="d-flex flex-column gap-4 position-relative align-items-center"
        style={{
          pointerEvents: "auto",
          padding: "35px 0"
        }}
      >
        {sections.map((s) => {
          const isActive = activeId === s.id;
          const isHovering = hoveredId === s.id;
          const Icon = s.Icon;

          return (
            <div
              key={s.id}
              className="position-relative"
              style={{ height: 86 }}
            >
              {isActive && (
                <>
                  <Mascot direction={direction} isHovering={isHovering} />
                  <OrbitingCompanion />
                  <OrbitingCompanion size={55} duration={6} delay={0.4} />
                </>
              )}

              <OverlayTrigger
                placement="right"
                overlay={<Tooltip>{s.label}</Tooltip>}
              >
                <motion.a
                  href={`#${s.id}`}
                  className="sidenav-link d-flex align-items-center justify-content-center rounded-circle position-relative"
                  style={{
                    width: 58,
                    height: 58,
                    background: isActive
                      ? `linear-gradient(145deg, ${ACCENT_COLOR}, #005bd5)`
                      : ICON_BASE_COLOR,
                    color: "#ffffff",
                    boxShadow: isActive
                      ? "0 10px 25px rgba(30,136,255,0.35)"
                      : "0 6px 16px rgba(15,23,42,0.45)",
                    border: `1px solid ${
                      isActive
                        ? "rgba(255,255,255,0.25)"
                        : "rgba(255,255,255,0.08)"
                    }`,
                    transition: "background 0.35s ease"
                  }}
                  onMouseEnter={() => setHoveredId(s.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  onClick={handleNavClick(s.id)}
                  whileHover={{ scale: 1.1 }}
                  transition={{
                    type: "spring",
                    stiffness: 220,
                    damping: 18
                  }}
                >
                  <AnimatedIcon
                    Icon={Icon}
                    isActive={isActive}
                    isHovering={isHovering}
                  />
                </motion.a>
              </OverlayTrigger>
            </div>
          );
        })}
      </div>
    </div>
  );
}
