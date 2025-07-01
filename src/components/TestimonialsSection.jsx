import React from "react";

const testimonials = [
  {
    name: "Sundar Raj",
    role: "Project Manager at Cognizant",
    quote:
      "Raghav consistently delivered high-quality backend features under tight deadlines. His API performance tuning and ability to debug complex systems are top-notch.",
  },
  {
    name: "Ananya Kapoor",
    role: "Product Owner, NVIT",
    quote:
      "He took ownership of the ILMS project and delivered an entire biometric module independently. His initiative and problem-solving attitude made him an asset to our team.",
  },
  {
    name: "Ramesh V.",
    role: "Tech Lead at UTA Research",
    quote:
      "Raghav is incredibly sharp and reliable. He grasped complex data pipelines quickly and helped us scale infrastructure for real-time insights.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-5" id="testimonials">
      <div className="container">
        <h2 className="text-center fw-bold mb-5">What People Say</h2>
        <div className="row g-4">
          {testimonials.map((t, index) => (
            <div key={index} className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <p className="card-text fst-italic">"{t.quote}"</p>
                  <hr />
                  <h6 className="card-subtitle fw-semibold">{t.name}</h6>
                  <small className="text-muted">{t.role}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
