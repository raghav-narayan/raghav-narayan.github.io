import React from "react";
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiFlask,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiCplusplus,
  SiMysql,
  SiFastapi,
  SiTensorflow,
  SiRedux,
} from "react-icons/si";

const skills = [
  { name: "Python", icon: <SiPython /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "React", icon: <SiReact /> },
  { name: "Redux", icon: <SiRedux /> },
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "Flask", icon: <SiFlask /> },
  { name: "FastAPI", icon: <SiFastapi /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "Docker", icon: <SiDocker /> },
  {
    name: "Azure",
    icon: (
      <img
        src="/azure.png"
        alt="Azure"
        style={{ width: "32px", height: "32px", objectFit: "contain" }}
      />
    ),
  },
  { name: "Git", icon: <SiGit /> },
  { name: "TensorFlow", icon: <SiTensorflow /> },
  { name: "C++", icon: <SiCplusplus /> },
];

export default function SkillsSection() {
  return (
    <section className="py-5 bg-light" id="skills">
      <div className="container">
        <h2 className="text-center fw-bold mb-4">Technical Skills</h2>
        <p className="text-center mb-5 fs-6">
          Proficient in a wide range of technologies for full-stack development, DevOps, cloud deployment,
          and AI/ML. Here's my core tech stack:
        </p>
        <div className="row g-4 justify-content-center">
          {skills.map((skill, index) => (
            <div key={index} className="col-6 col-sm-4 col-md-3 col-lg-2">
              <div className="text-center p-3 shadow-sm border rounded skill-card h-100">
                <div className="mb-2">
                  {typeof skill.icon === "string" ? (
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      style={{ width: "32px", height: "32px", objectFit: "contain" }}
                    />
                  ) : (
                    React.cloneElement(skill.icon, { size: 32, color: undefined })
                  )}
                </div>
                <div className="fw-semibold">{skill.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .skill-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          background-color: white;
        }
        .skill-card:hover {
          transform: scale(1.05);
          box-shadow: 0 0 15px rgba(0, 123, 255, 0.3);
        }
      `}</style>
    </section>
  );
}
