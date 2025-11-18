import React, { useEffect, useRef, useState } from "react";
import Lottie from "react-lottie-player";
import { motion } from "framer-motion";

const highlightCards = [
  {
    title: "NVIT · Government Tech",
    detail:
      "Designed ILMS v1 with biometric + GPS attendance and modular React/Node dashboards; Dockerized Azure pipelines cut deployment effort 40%."
  },
  {
    title: "Cognizant · Conversational AI",
    detail:
      "Scaled multilingual chatbot APIs to 100K MAUs across 12 markets and improved p95 latency 30% through streamlined services + observability."
  }
];

const bulletHighlights = [
  "Architect solutions end-to-end—React/Next.js UIs, Node/FastAPI services, and Azure DevOps pipelines—so reliability becomes a habit, not a sprint deliverable.",
  "Document decisions, coach classmates on STAR storytelling, and remix inspirations from anime, weather data, and volunteer work into approachable automation."
];

const personaBadges = ["Systems-first thinker", "Anime + espresso powered", "Story-driven mentor"];

export default function IntroSection() {
  const ref = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [animationData, setAnimationData] = useState(null);

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
        minHeight: "100vh",
        marginTop: "-6vh",
        padding: "6vh 0 8vh",
        background: "linear-gradient(170deg, #030308 0%, #0d1528 40%, #f7f9fc 100%)",
        overflow: "hidden",
        position: "relative"
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.1, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div
        className="container position-relative"
        style={{ zIndex: 2, maxWidth: "1100px" }}
      >
        <div className="row align-items-center justify-content-center g-4">
          <motion.div
            className="col-lg-4"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.1 }}
          >
            {animationData && (
              <div
                style={{
                  padding: "20px",
                  borderRadius: "24px",
                  background: "rgba(11,18,34,0.85)",
                  border: "1px solid rgba(96,165,250,0.2)",
                  boxShadow: "0 35px 80px rgba(5,7,15,0.9)",
                  backdropFilter: "blur(16px)"
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

            <div
              className="mt-3 px-3 py-2 rounded-pill text-center text-uppercase fw-semibold"
              style={{
                letterSpacing: "0.08em",
                fontSize: "0.75rem",
                color: "#cfe0ff",
                border: "1px solid rgba(96,165,250,0.35)",
                background: "rgba(96,165,250,0.08)"
              }}
            >
              UTA · MS Computer Science
            </div>
          </motion.div>

          <motion.div
            className="col-lg-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <p
              className="text-uppercase fw-semibold mb-3"
              style={{ color: "#a6bfe7", letterSpacing: "0.18em" }}
            >
              About Raghav
            </p>
            <h1
              className="fw-bold mb-3"
              style={{
                fontSize: "2.45rem",
                color: "#ffffff",
                lineHeight: "1.3",
                textShadow: "0 25px 55px rgba(0,0,0,0.35)"
              }}
            >
              Systems thinker focused on dependable, scalable software.
            </h1>
            <p className="lead mb-3" style={{ color: "rgba(226,232,240,0.9)" }}>
              Full-stack engineer blending automation, AI, and modern DevOps to ship resilient platforms—from
              NVIT’s biometric workforce stack to Cognizant’s multilingual chatbot programs—while keeping teams
              anchored in measurable outcomes.
            </p>
            <ul className="mb-4" style={{ color: "rgba(203,213,225,0.95)" }}>
              {bulletHighlights.map((item, idx) => (
                <li key={idx} className="mb-2">
                  {item}
                </li>
              ))}
            </ul>
            <div className="d-flex flex-wrap gap-2 mb-4">
              {personaBadges.map((badge) => (
                <span
                  key={badge}
                  className="px-3 py-1 rounded-pill"
                  style={{
                    fontSize: "0.82rem",
                    background: "rgba(96,165,250,0.12)",
                    border: "1px solid rgba(96,165,250,0.35)",
                    color: "#c3dafc"
                  }}
                >
                  {badge}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="col-12 mt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
          >
            <div className="row g-3">
              {highlightCards.map((card) => (
                <div className="col-12 col-lg-6" key={card.title}>
                  <div
                    style={{
                      padding: "1.3rem 1.4rem",
                      borderRadius: "18px",
                      background: "#f8fafc",
                      border: "1px solid rgba(15,23,42,0.08)",
                      boxShadow: "0 20px 50px rgba(15,23,42,0.15)",
                      height: "100%"
                    }}
                  >
                    <h5 className="fw-semibold mb-1" style={{ color: "#111827" }}>
                      {card.title}
                    </h5>
                    <p className="mb-0" style={{ color: "#475569" }}>
                      {card.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 15% 80%, rgba(96,165,250,0.25), transparent 55%)",
          pointerEvents: "none",
          zIndex: 1
        }}
      />
    </motion.section>
  );
}
