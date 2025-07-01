import React, { useState } from "react";

const testimonials = [
  {
    name: "John Enoh",
    title: "CEO, NVIT | Ex-Microsoft, IBM | AI Consultant",
    text: `It was a pleasure mentoring and working closely with Raghav Narayan during his internship at NVIT. From the very beginning, Raghav demonstrated a strong foundation in full-stack development, AI integration, and scalable cloud systems. What impressed me most was his ability to quickly grasp complex technical concepts and apply them to real-world, high-impact projects.

Raghav contributed significantly to mission-critical platforms such as iLMS (Integrated Local Government Management System), where he played a key role in implementing liveness detection, geofencing, and robust CI/CD pipelines using Azure DevOps and Docker. His work not only improved our platform's performance and reliability but also highlighted his initiative and deep technical acumen.

Beyond technical skill, Raghav is a natural problem-solver and a collaborative team player. He consistently sought feedback, iterated rapidly, and delivered quality code under tight deadlines. His curiosity, work ethic, and drive to grow stood out in every interaction.

I’m confident Raghav will make a valuable contribution to any engineering or AI-focused team. I highly recommend him without reservation and look forward to seeing all the great things he will accomplish in his career.`,
    color: "hsl(124, 70%, 85%)",
  },
  {
    name: "Venkatraman Purushothaman",
    title: "Lead Generative AI Architect",
    text: `Raghav worked as a full-stack AI developer in my team, and I must say that he is highly talented and the finest developer. I really enjoyed working with him. He is professional in his work, has a genuine interest in learning, and takes complete ownership even under tough circumstances. He is good at managing and prioritizing his time and work, and he is the kind of guy who doesn't need a push or supervision and he can be on his own entirely. I wish you all the very best for your next endeavors.`,
    color: "hsl(337, 70%, 85%)",
  },
  {
    name: "Venkatraman Ravi",
    title: "PAM Consultant & AI MBA Candidate",
    text: `Raghav was an amazing student during college days. He studied well and is a master of all concepts. Raghav is a friendly person and used to help his friends during college days. Great Learner and a Good Mentor. All the best for a great future, Raghav!!!`,
    color: "hsl(69, 70%, 85%)",
  },
  {
    name: "Infant Ajay",
    title: "Software Engineer, Incubyte",
    text: `Raghav was a very valuable resource to our team. He was proactive and owned the work he took up. He's very professional and tries to think a step ahead of what is needed. Avid learner, never hesitated to ask questions and improved his performance radically.`,
    color: "hsl(147, 70%, 85%)",
  },
  {
    name: "Kavin Raju Sridhar",
    title: "Software Engineer 2, PayPal",
    text: `Raghav Narayan's interest to learn things fast and efficiently is one of his best qualities. His interest in volunteering for club activities is exemplary... his personal interest in ML algorithms led him to complete multiple projects. He integrated ML outcomes in his fullstack applications.`,
    color: "hsl(104, 70%, 85%)",
  },
  {
    name: "Ashwin Balaji",
    title: "Senior Analyst, Accenture",
    text: `Raghav joined new to my team with no prior experience in the technologies we were using, and he was quickly able to learn and adapt. Took ownership from day one and always showed eagerness to learn.`,
    color: "hsl(278, 70%, 85%)",
  }
];

function getInitials(name) {
  const parts = name.trim().split(" ");
  return (parts[0][0] + (parts[1]?.[0] || "")).toUpperCase();
}

export default function TestimonialsSection() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  return (
    <section className="py-5 bg-white" id="testimonials">
      <div className="container">
        <h2 className="text-center fw-bold mb-4">What Others Say</h2>
        <p className="text-center mb-5 text-muted fs-6">
          Recommendations and reflections shared by mentors, managers, and peers.
        </p>
        <div className="row g-4">
          {testimonials.map((t, i) => {
            const isExpanded = expandedIndex === i;
            const shortText = t.text.slice(0, 300);
            return (
              <div className="col-md-6 col-lg-4" key={i}>
                <div className="card h-100 border testimonial-card shadow-sm p-3">
                  <div className="d-flex align-items-center mb-3">
                    <div
                      className="rounded-circle d-flex align-items-center justify-content-center me-3"
                      style={{
                        width: "48px",
                        height: "48px",
                        backgroundColor: t.color,
                        fontWeight: 600,
                        color: "#333"
                      }}
                    >
                      {getInitials(t.name)}
                    </div>
                    <div>
                      <strong>{t.name}</strong>
                      <div className="text-muted small">{t.title}</div>
                    </div>
                  </div>
                  <p className="small text-muted">
                    {isExpanded ? t.text : shortText + (t.text.length > 300 ? "..." : "")}
                  </p>
                  {t.text.length > 300 && (
                    <button
                      onClick={() => toggleExpand(i)}
                      className="btn btn-sm btn-link ps-0"
                    >
                      {isExpanded ? "Read less" : "Read more"}
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .testimonial-card {
          border-radius: 12px;
          transition: all 0.3s ease;
          min-height: 280px;
        }
        .testimonial-card:hover {
          box-shadow: 0 0 20px rgba(0,0,0,0.08);
        }
        .btn-link {
          text-decoration: none;
        }
      `}</style>
    </section>
  );
}
