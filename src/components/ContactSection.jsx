import React from "react";

export default function ContactSection() {
  return (
    <section className="py-5 bg-light text-center" id="contact">
      <div className="container">
        <h2 className="fw-bold mb-4">Contact Me</h2>
        <p className="mb-4 fs-5">Feel free to reach out for job opportunities or collaborations!</p>
        <div className="d-flex flex-column align-items-center gap-2 fs-6">
          <p>
            📧 Email:{" "}
            <a
              href="mailto:raghav.narayan.98@gmail.com"
              className="text-decoration-none text-primary fw-semibold"
            >
              raghav.narayan.98@gmail.com
            </a>
          </p>
          <p>
            📞 Phone:{" "}
            <a href="tel:+16824053523" className="text-decoration-none text-primary fw-semibold">
              +1 (682) 405-3523
            </a>
          </p>
          <p>
            💼 LinkedIn:{" "}
            <a
              href="https://linkedin.com/in/raghav-narayan98"
              className="text-decoration-none text-primary fw-semibold"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/raghav-narayan98
            </a>
          </p>
          <p>
            💻 GitHub:{" "}
            <a
              href="https://github.com/raghav-narayan"
              className="text-decoration-none text-primary fw-semibold"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/raghav-narayan
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
