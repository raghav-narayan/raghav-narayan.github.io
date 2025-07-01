import React from "react";

export default function HeroSection() {
  return (
    <section
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
        className="position-absolute w-100 h-100"
        style={{ backgroundColor: "rgba(0,0,0,0.6)", top: 0, left: 0 }}
      ></div>

      <div className="position-relative z-1 container">
        <h1 className="display-4 fw-bold">Raghav Narayan Ramachandran</h1>
        <p className="lead">
          Full-Stack Engineer | Cloud & AI Solutions | 3+ YOE | ex-Cognizant
        </p>
        <div className="d-flex justify-content-center gap-3 mt-3 flex-wrap">
          <a
            href="/Raghav_Resume.pdf"
            className="btn btn-light text-primary fw-semibold"
          >
            Download Resume
          </a>
          <a href="#contact" className="btn btn-primary fw-semibold">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
