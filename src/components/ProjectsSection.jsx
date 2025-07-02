import React, { useState } from "react";

const projects = [
  {
    title: "Financio",
    description: "A modern finance tracker with JWT-based auth, real-time state management, and dynamic analytics using Chart.js for smarter budgeting and expense control.",
    tech: ["React", "Node.js", "MongoDB", "JWT", "Chart.js"],
    image: process.env.PUBLIC_URL + "/projects/financio.png",
    github: "https://github.com/raghav-narayan/finance-tracker-mern",
    demo: ""
  },
  {
    title: "AuraCast",
    description: "A media SaaS platform that enables users to compress videos, apply smart filters, and auto-generate captions using Gemini AI—built for content creators and marketers.",
    tech: ["Next.js", "Gemini AI", "Tailwind", "TypeScript"],
    image: process.env.PUBLIC_URL + "/projects/auracast.png",
    github: "https://github.com/raghav-narayan/auracast",
    demo: "https://www.youtube.com/watch?v=l5T-Rx35ggQ"
  },
  {
    title: "AI Resume Builder",
    description: "An AI-powered resume generator that suggests bullet points based on job titles, offers PDF export, and enables rich text editing—built using Gemini API, Strapi, and Clerk.",
    tech: ["React", "Tailwind", "Vite", "Gemini API", "Strapi", "Clerk", "Vercel"],
    image: process.env.PUBLIC_URL + "/projects/ai_resume.png",
    github: "https://github.com/raghav-narayan/ai-resume-builder",
    demo: "https://ai-resume-creator-azure.vercel.app"
  },
  {
    title: "Trello UI Automation",
    description: "A robust Selenium-based UI testing suite for Trello that validates login, board creation, drag-and-drop, and dashboard UI with visual feedback and auto-generated reports.",
    tech: ["Python", "Selenium", "Pytest", "HTML", "Automation"],
    image: process.env.PUBLIC_URL + "/projects/selenium_trello.png",
    github: "https://github.com/raghav-narayan/selenium",
    demo: ""
  },
  {
    title: "Logistic Regression from Scratch",
    description: "Implemented logistic regression using SGD, log loss, and L2 regularization in NumPy. Trained and validated the model against Scikit-learn, achieving ~95% accuracy.",
    tech: ["Python", "NumPy", "Matplotlib", "ML Algorithms"],
    image: process.env.PUBLIC_URL + "/projects/logistic.png",
    github: "https://github.com/raghav-narayan/logistic-regression",
    demo: ""
  },
  {
    title: "Recommendation System",
    description: "Built a collaborative filtering recommendation engine using cosine similarity, user-item matrix, and top-k ranking—tested on real-world product review data.",
    tech: ["Python", "Pandas", "NumPy", "Scikit-learn"],
    image: process.env.PUBLIC_URL + "/projects/recommender.png",
    github: "https://github.com/raghav-narayan/recommendation-system",
    demo: ""
  },
  {
    title: "Backpropagation from Scratch",
    description: "Implemented the backpropagation algorithm from scratch using Python, including custom optimizers like Momentum and Adam. Validated gradient updates with gradient checking and visualized convergence.",
    tech: ["Python", "NumPy", "Matplotlib"],
    image: process.env.PUBLIC_URL + "/projects/backprop.png",
    github: "https://github.com/raghav-narayan/back-prop-grad-check",
    demo: ""
  },
  {
    title: "NLP Techniques from Scratch",
    description: "Built a custom TF-IDF vectorizer, Bag-of-Words processor, and tokenizer using NumPy and sparse matrix operations. Matched sklearn's implementation and demonstrated L2 normalization and top-k vocab selection.",
    tech: ["Python", "NumPy", "Scikit-learn", "TF-IDF", "Sparse Matrix"],
    image: process.env.PUBLIC_URL + "/projects/nlp.png",
    github: "https://github.com/raghav-narayan/nlp-techniques",
    demo: ""
  }
];

export default function ProjectsSection() {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <section className="py-5 bg-white" id="projects">
      <div className="container">
        <h2 className="text-center fw-bold mb-4">Projects</h2>
        <p className="text-center mb-5 text-muted fs-6">
          A few projects that showcase my skills in full-stack engineering, AI integration, and machine learning.
        </p>
        <div className="row g-4">
          {visibleProjects.map((project, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div className="card h-100 shadow-sm border border-light-subtle project-card position-relative overflow-hidden">
                <div className="ratio ratio-16x9 project-image-wrapper">
                  <img
                    src={project.image}
                    className="w-100 h-100 object-fit-cover"
                    alt={project.title}
                    loading="lazy"
                  />
                  <div className="project-hover d-flex flex-column justify-content-center align-items-center text-center">
                    {project.github && (
                      <a
                        href={project.github}
                        className="text-white fw-bold mb-2"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`GitHub for ${project.title}`}
                      >
                        🔗 GitHub
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        className="text-white fw-bold"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Demo for ${project.title}`}
                      >
                        🚀 Demo
                      </a>
                    )}
                  </div>
                </div>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-semibold">{project.title}</h5>
                  <p className="text-muted small">{project.description}</p>
                  <div className="mb-2 d-flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="badge bg-light text-dark border">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto d-flex gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        className="btn btn-outline-dark btn-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`GitHub link for ${project.title}`}
                      >
                        GitHub
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        className="btn btn-primary btn-sm"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Demo link for ${project.title}`}
                      >
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {!showAll && (
          <div className="text-center mt-4">
            <button
              className="btn btn-outline-primary btn-sm"
              onClick={() => setShowAll(true)}
            >
              See More Projects
            </button>
          </div>
        )}
      </div>
      

      <style>{`
        .project-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border-radius: 8px;
        }
        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 0 20px rgba(0,0,0,0.08);
        }
        .object-fit-cover {
          object-fit: cover;
        }
        .project-hover {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.6);
          opacity: 0;
          transition: opacity 0.3s ease-in-out;
          z-index: 2;
        }
        .project-card:hover .project-hover {
          opacity: 1;
        }
        .project-hover a {
          text-decoration: none;
          font-size: 1rem;
        }
        .project-image-wrapper {
          border-bottom: 1px solid #f1f1f1;
        }
      `}</style>
    </section>
  );
}
