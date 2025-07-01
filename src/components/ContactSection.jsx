import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaMedium,
  FaEnvelope,
} from "react-icons/fa";

export default function FooterSection() {
  return (
    <footer className="py-5 bg-dark text-light text-center" id="contact">
      <div className="container">
        <h4 className="fw-bold mb-4">Raghav Narayan Ramachandran</h4>

        <div className="mb-4">
          <a
            href="https://github.com/raghav-narayan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light mx-3 fs-4"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/raghav-narayan98"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light mx-3 fs-4"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://technotronic.medium.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light mx-3 fs-4"
          >
            <FaMedium />
          </a>
          <a
            href="mailto:raghav.narayan.98@gmail.com"
            className="text-light mx-3 fs-4"
          >
            <FaEnvelope />
          </a>
        </div>

        <p className="fs-6 mb-0">
          © {new Date().getFullYear()} Raghav Narayan Ramachandran. Built with React & Bootstrap.
        </p>
      </div>
    </footer>
  );
}
