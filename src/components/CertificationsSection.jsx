import React from "react";

const certifications = [
  {
    name: "Google Cloud Engineering Specialization",
    issuer: "Coursera",
    badge: "https://www.gstatic.com/devrel-devsite/prod/vf74e4b6be2710ad2d1b558c5c1d94a4e11e07d79145c0f0efecf48f0a379ec7e/cloud/images/favicons/onecloud/favicon.ico",
    link: "https://www.coursera.org/account/accomplishments/specialization/XYZ123",
  },
  {
    name: "Oracle Cloud Infrastructure Foundations",
    issuer: "Oracle",
    badge: "https://www.oracle.com/a/tech/img/certification-logo.png",
    link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=XYZ456",
  },
  {
    name: "Applied AI & ML",
    issuer: "Udemy",
    badge: "https://cdn.worldvectorlogo.com/logos/udemy-2.svg",
    link: "https://www.udemy.com/certificate/UC-XYZ789/",
  },
];

export default function CertificationsSection() {
  return (
    <section className="py-5 bg-light" id="certifications">
      <div className="container">
        <h2 className="text-center fw-bold mb-5">Certifications</h2>
        <div className="row g-4 justify-content-center">
          {certifications.map((cert, index) => (
            <div key={index} className="col-md-4 col-sm-6">
              <div className="card h-100 shadow-sm border-0 text-center p-3">
                <img
                  src={cert.badge}
                  alt={cert.name}
                  style={{ height: "60px", objectFit: "contain", marginBottom: "1rem" }}
                />
                <h6 className="fw-semibold">{cert.name}</h6>
                <small className="text-muted">{cert.issuer}</small>
                <div className="mt-2">
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
