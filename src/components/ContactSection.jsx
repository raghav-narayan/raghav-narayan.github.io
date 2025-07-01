import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaMedium,
  FaEnvelope
} from "react-icons/fa";

export default function ContactSection() {
  return (
    <section className="py-5 bg-dark text-light" id="contact">
      <div className="container text-center">
        <h2 className="fw-bold mb-4">Let’s Connect</h2>
        <p className="mb-4">
          I'm currently looking for full-time SDE opportunities. Feel free to reach out if you'd like to collaborate or discuss an opening.
        </p>

        <div className="mb-4">
          <a
            href="https://github.com/raghav-narayan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light me-3 fs-4"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/raghav-narayan98"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light me-3 fs-4"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://technotronic.medium.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light me-3 fs-4"
          >
            <FaMedium />
          </a>
          <a
            href="mailto:raghav.narayan.98@gmail.com"
            className="text-light fs-4"
          >
            <FaEnvelope />
          </a>
        </div>

        <p className="small mb-0">
          © {new Date().getFullYear()} Raghav Narayan Ramachandran. Built with React & Bootstrap.
        </p>
      </div>
    </section>
  );
}
