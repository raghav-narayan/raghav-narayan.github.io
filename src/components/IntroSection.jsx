import React, { useRef, useEffect, useState } from "react";
import Lottie from "react-lottie-player";
import { motion } from "framer-motion";

export default function IntroSection() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [animationData, setAnimationData] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    fetch("/lottie.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data));
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsPlaying(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.section
      id="intro"
      ref={ref}
      className="d-flex align-items-center justify-content-center"
      style={{
        minHeight: "90vh",
        background: "linear-gradient(180deg, #ffffff 0%, #f9fafc 100%)",
        overflow: "hidden",
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="container py-5">
        <div className="row align-items-center justify-content-center">
          {/* LEFT: Lottie Animation */}
          <motion.div
            className="col-lg-5 text-center mb-5 mb-lg-0"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: "easeOut", delay: 0.2 }}
          >
            {animationData && (
              <div
                style={{
                  width: "90%",
                  maxWidth: "380px",
                  margin: "0 auto",
                  filter: "drop-shadow(0 0 30px rgba(0, 123, 255, 0.25))",
                }}
              >
                <Lottie
                  loop
                  play={isPlaying}
                  animationData={animationData}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            )}
          </motion.div>

          {/* RIGHT: Text Content */}
          <motion.div
            className="col-lg-6 text-center text-lg-start"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h3 className="fw-semibold mb-2 text-muted">
              <span role="img" aria-label="wave">👋</span> Hey there,
            </h3>
            <h1
              className="fw-bold mb-3"
              style={{
                fontSize: "2.3rem",
                color: "#0d6efd",
                lineHeight: "1.2",
              }}
            >
              I think in systems, not just code.
            </h1>

            <p className="lead text-secondary mb-4">
              I’m <strong>Raghav Narayan</strong>, a full-stack engineer who blends{" "}
              <strong>AI</strong>, <strong>automation</strong>, and{" "}
              <strong>cloud-native design</strong> to turn complex ideas into reliable
              systems. My philosophy is simple: <em>Design fast, deliver smarter, and
              scale with intention.</em>
            </p>

            <p className="text-muted">
              Great engineering is about more than writing code. It’s about clarity,
              empathy, and iteration that create measurable impact.
            </p>

            {/* Scroll Cue */}
            <motion.div
              className="d-flex justify-content-center justify-content-lg-start mt-4"
              animate={{ y: [0, 6, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut",
              }}
            >
              <a
                href="#about"
                className="text-decoration-none text-primary fw-semibold"
                style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}
              >
                <span>↓ Keep Scrolling</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
