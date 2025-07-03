import React from "react";

const certifications = [
  {
    name: "Cloud Engineering with Google Cloud",
    issuer: "Coursera",
    badge: process.env.PUBLIC_URL + "/certs/gcp.png",
    link: "https://www.coursera.org/account/accomplishments/specialization/certificate/RTX89DZN932T",
  },
  {
    name: "Oracle Cloud Infrastructure Foundations Associate",
    issuer: "Oracle",
    badge: process.env.PUBLIC_URL + "/certs/oracle.png",
    link: "https://www.credly.com/badges/9c53c4b3-55a3-49fa-8551-25778cb79b0f/linked_in_profile",
  }
];

export default function CertificationsSection() {
  return (
    <section className="py-5 bg-light" id="certifications">
      <div className="container">
        <h2 className="text-center fw-bold mb-5">Certifications</h2>
        <div className="row g-4 justify-content-center">
          {certifications.map((cert, index) => (
            <div key={index} className="col-md-4 col-sm-6">
              <div className="card h-100 shadow-sm border-0 text-center p-4">
                <div className="d-flex justify-content-center align-items-center mb-4" style={{ minHeight: "100px" }}>
                  <img
                    src={cert.badge}
                    alt={cert.name}
                    style={{
                      height: "80px",
                      width: "auto",
                      maxWidth: "180px",
                      objectFit: "contain",
                      transition: "transform 0.3s ease",
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
                    onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
                  />
                </div>
                <h6 className="fw-semibold">{cert.name}</h6>
                <small className="text-muted">{cert.issuer}</small>
                <div className="mt-3">
                  <a
                    href={cert.link}
                    className="btn btn-sm btn-outline-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Certificate
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
