import React from "react";

const testimonials = [
    {
      name: "John Enoh",
      title: "CEO, NVIT | Ex-Microsoft, IBM | AI Consultant",
      text: "Raghav demonstrated a strong foundation in full-stack development, AI integration, and scalable cloud systems. He played a key role in delivering the iLMS platform with features like liveness detection and CI/CD pipelines. His initiative, problem-solving, and ownership were exceptional. I highly recommend him."
    },
    {
      name: "Venkatraman Purushothaman",
      title: "Lead Generative AI Architect",
      text: "Raghav is a highly talented full-stack AI developer who consistently delivered quality work under pressure. He takes ownership, is professional, and is always keen to learn. A valuable teammate in every sense."
    },
    {
      name: "Venkatraman Ravi",
      title: "PAM Consultant & AI MBA Candidate",
      text: "Raghav was a great student—conceptually strong, helpful, and a natural mentor to peers. He has a bright future ahead."
    },
    {
      name: "Infant Ajay",
      title: "Software Engineer, Incubyte",
      text: "Raghav was proactive, owned his work, and thought ahead of what was needed. A quick learner and an asset to any team."
    },
    {
      name: "Kavin Raju Sridhar",
      title: "Software Engineer 2, PayPal",
      text: "Raghav is a fast and efficient learner with deep interests in ML and full-stack development. His academic and extracurricular contributions show his dedication and versatility."
    },
    {
      name: "Ashwin Balaji",
      title: "Senior Analyst, Accenture",
      text: "Raghav joined our team without prior experience in the tech stack, yet quickly ramped up, took ownership, and showed eagerness to learn."
    }
  ];

  const placeholderImg = "https://ui-avatars.com/api/?name=R+N&background=random";

export default function TestimonialsSection() {
  return (
    <section className="py-5 bg-white" id="testimonials">
      <div className="container">
        <h2 className="text-center fw-bold mb-4">What Others Say</h2>
        <p className="text-center mb-5 text-muted fs-6">
          Recommendations and reflections shared by mentors, managers, and peers.
        </p>
        <div className="row g-4 justify-content-center">
          {testimonials.map((t, i) => (
            <div key={i} className="col-md-6 col-lg-4">
              <div className="card h-100 border-0 shadow-sm testimonial-card p-3">
                <div className="d-flex align-items-center mb-3">
                  <img
                    src={placeholderImg}
                    alt={t.name}
                    className="rounded-circle me-3"
                    style={{ width: "48px", height: "48px", objectFit: "cover" }}
                  />
                  <div>
                    <strong>{t.name}</strong>
                    <div className="text-muted small">{t.title}</div>
                  </div>
                </div>
                <p className="small text-muted">“{t.text}”</p>
              </div>
            </div>
          ))}
        </div>

        <style>{`
          .testimonial-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .testimonial-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 0 20px rgba(0,0,0,0.1);
          }
        `}</style>
      </div>
    </section>
  );
}