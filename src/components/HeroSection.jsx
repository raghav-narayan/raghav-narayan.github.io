import React from "react";
import { ReactTyped } from "react-typed";
import {
  FaGithub,
  FaLinkedin,
  FaMedium,
  FaEnvelope,
  FaFilePdf,
} from "react-icons/fa";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="vh-100 d-flex flex-column justify-content-center align-items-center text-white text-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?auto=format&fit=crop&w=1950&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
      ></div>

      <div className="position-relative z-1 container">
        <h1 className="display-4 fw-bold mb-2">Raghav Narayan Ramachandran</h1>
        <h5 className="mb-4">
          <ReactTyped
            strings={[
              "Graduate Research Assistant @ UTA",
              "Full-Stack Engineer (3+ YOE)",
              "AI + Cloud Developer",
            ]}
            typeSpeed={60}
            backSpeed={40}
            loop
          />
        </h5>
        <p className="lead mb-4">
          Crafting scalable, AI-integrated systems with measurable impact across web, cloud, and automation.
        </p>
        <div className="d-flex justify-content-center gap-4 fs-4 mb-4 flex-wrap">
          <a href="https://github.com/raghav-narayan" className="text-white" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/raghav-narayan98" className="text-white" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://technotronic.medium.com" className="text-white" target="_blank" rel="noreferrer">
            <FaMedium />
          </a>
          <a href="mailto:raghav.narayan.98@gmail.com" className="text-white">
            <FaEnvelope />
          </a>
          <a href="/Raghav_Resume.pdf" className="text-white" target="_blank" rel="noreferrer">
            <FaFilePdf />
          </a>
        </div>

        {/* Chevron scroll down */}
        <a href="#about" className="text-white fs-3">
          <i className="bi bi-chevron-double-down"></i>
        </a>
      </div>
    </section>
  );
}
