import React from "react";

const blogs = [
  {
    title: "Building an AI-powered Resume Builder",
    description:
      "How I leveraged GPT and Flask to create a smart resume generation tool tailored for developers.",
    link: "https://technotronic.medium.com/ai-resume-builder-project",
  },
  {
    title: "Financio: Building a Full-Stack Finance Tracker",
    description:
      "A breakdown of building a MERN stack finance tracker with JWT authentication and real-time charts.",
    link: "https://technotronic.medium.com/financio-personal-tracker-case-study",
  },
  {
    title: "Deploying Python Apps with Azure and Docker",
    description:
      "A practical guide for cloud-deploying Python microservices using Azure pipelines and Docker containers.",
    link: "https://technotronic.medium.com/deploying-python-apps-to-azure-with-docker",
  },
];

export default function BlogSection() {
  return (
    <section className="py-5 bg-light" id="blog">
      <div className="container">
        <h2 className="text-center fw-bold mb-5">Blogs</h2>
        <div className="row g-4">
          {blogs.map((blog, index) => (
            <div key={index} className="col-md-4">
              <div className="card h-100 shadow-sm border-0">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-semibold">{blog.title}</h5>
                  <p className="card-text">{blog.description}</p>
                  <a
                    href={blog.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-primary mt-auto"
                  >
                    Read More
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
