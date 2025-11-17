import React, { useEffect, useState, useRef } from "react";
import Tilt from "react-parallax-tilt";
import { motion, useAnimation } from "framer-motion";
import HeroBackground from "./HeroBackground";
import HeroOverlay from "./HeroOverlay";
import { FaGithub, FaLinkedin, FaMedium, FaEnvelope, FaFilePdf } from "react-icons/fa";

const roles = [
  "Software Engineer @ UTA",
  "Full-Stack Engineer | 3+ YOE",
  "Builder of Cloud-Native Intelligence",
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);
  const controls = useAnimation();
  const textRef = useRef(null);

  // rotating roles
  useEffect(() => {
    let active = true;
    const loop = async () => {
      if (!active) return;
      await controls.start({ opacity: 1, y: 0 });
      const timer = setInterval(async () => {
        if (!active) return;
        await controls.start({ opacity: 0, y: 15, transition: { duration: 0.3 } });
        setIndex((p) => (p + 1) % roles.length);
        await controls.start({ opacity: 1, y: 0, transition: { duration: 0.3, delay: 0.15 } });
      }, 2200);
      return () => clearInterval(timer);
    };
    loop();
    return () => (active = false);
  }, [controls]);

  // cursor-based parallax for text
  useEffect(() => {
    const textEl = textRef.current;
    const handleMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 15;
      const y = (e.clientY / window.innerHeight - 0.5) * 15;
      if (textEl)
        textEl.style.transform = `perspective(600px) rotateY(${x}deg) rotateX(${-y}deg)`;
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <section
      id="home"
      className="position-relative d-flex align-items-center text-white overflow-hidden"
      style={{ minHeight: "100vh", background: "#000", padding: "5rem 0" }}
    >
      {/* Ambient radial glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "500px",
          height: "500px",
          background: "radial-gradient(circle, rgba(255,255,255,0.07) 0%, transparent 70%)",
          transform: "translate(-50%, -50%)",
          zIndex: 0,
        }}
      />
      <HeroBackground />
      <HeroOverlay />

      <div className="container position-relative" style={{ zIndex: 3 }}>
        <div className="row align-items-center justify-content-center">
          {/* LEFT IMAGE */}
          <div className="col-lg-6 text-center mb-4 mb-lg-0 d-flex justify-content-center">
            <Tilt
              tiltMaxAngleX={4}
              tiltMaxAngleY={4}
              transitionSpeed={800}
              glareEnable={true}
              glareMaxOpacity={0.2}
            >
              <div
                style={{
                  width: "100%",
                  maxWidth: "640px",
                  aspectRatio: "4 / 3",
                  overflow: "hidden",
                  borderRadius: "22px",
                  boxShadow: "0 0 80px rgba(255,255,255,0.05)",
                  transition: "all 0.4s ease",
                }}
              >
                <img
                  src={process.env.PUBLIC_URL + "/hero.jpg"}
                  alt="Raghav"
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "block",
                    objectFit: "cover",
                    objectPosition: "center 55%", // centers torso
                    filter: "brightness(1.05) contrast(1.08)",
                  }}
                />
              </div>
            </Tilt>
          </div>

          {/* RIGHT TEXT */}
          <div className="col-lg-6 text-center text-lg-start" ref={textRef}>
            <motion.h1 className="display-4 fw-bold mb-2 shimmer-text py-2" whileHover={{ scale: 1.02 }}>
              Raghav Narayan
            </motion.h1>

            <motion.h5
              className="mb-4 role-text"
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              transition={{ duration: 0.6 }}
            >
              {roles[index]}
            </motion.h5>

<p className="lead mb-4 text-light text-opacity-75">
  Building AI-driven platforms and resilient cloud-native systems that simplify automation,
  accelerate delivery, and create measurable business impact through scalable engineering.
</p>


            {/* ICONS */}
            <div className="d-flex justify-content-center justify-content-lg-start gap-4 fs-3 flex-wrap mb-4">
              {[
                { icon: <FaGithub />, link: "https://github.com/raghav-narayan" },
                { icon: <FaLinkedin />, link: "https://linkedin.com/in/raghav-narayan98" },
                { icon: <FaMedium />, link: "https://technotronic.medium.com" },
                {
                  icon: (
                    <img
                      src={process.env.PUBLIC_URL + "/logos/leetcode.png"}
                      alt="LeetCode"
                      style={{ width: 26, height: 26, filter: "invert(1)" }}
                    />
                  ),
                  link: "https://leetcode.com/u/Raghav_Narayan/",
                },
                { icon: <FaEnvelope />, link: "mailto:raghav.narayan.98@gmail.com" },
                {
                  icon: <FaFilePdf />,
                  link: "https://drive.google.com/file/d/13uFmj6uK9Hlvy2OZbDYD2C2c_P1Zs0pI/view",
                },
              ].map(({ icon, link }, i) => (
                <motion.a
                  key={i}
                  href={link}
                  className="text-white social-icon"
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ rotate: 8, scale: 1.05, y: -1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 18 }}
                >
                  {icon}
                </motion.a>
              ))}
            </div>

            {/* BUTTONS */}
            <div className="d-flex gap-3 justify-content-center justify-content-lg-start flex-wrap">
              <a href="#contact" className="btn btn-outline-light btn-sm px-4">
                Let’s Build
              </a>
              <a
                href="https://drive.google.com/file/d/13uFmj6uK9Hlvy2OZbDYD2C2c_P1Zs0pI/view"
                target="_blank"
                rel="noreferrer"
                className="btn btn-light btn-sm px-4 text-dark fw-semibold"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .role-text { color:#ccc; text-shadow:0 0 8px rgba(255,255,255,0.25); }
        .social-icon { transition:all .25s ease; opacity:.85; }
        .social-icon:hover { opacity:1; text-shadow:0 0 18px rgba(255,255,255,0.9); }
        .shimmer-text {
          position: relative;
          color: #fff;
          overflow: hidden;
          text-shadow: 0 0 20px rgba(255,255,255,0.25);
        }
        .shimmer-text::after {
          content: "";
          position: absolute;
          top: 0; left: -100%;
          width: 100%; height: 100%;
          background: linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%);
          animation: shimmer 7s ease-in-out infinite;
        }
        @keyframes shimmer {
          0% { left: -100%; }
          50% { left: 100%; }
          100% { left: 100%; }
        }
      `}</style>
    </section>
  );
}
