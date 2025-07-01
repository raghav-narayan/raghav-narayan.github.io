import React from "react";

export default function HeroSection() {
  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?auto=format&fit=crop&w=1950&q=80")',
      }}
    >
      <div className="flex flex-col items-center justify-center h-full backdrop-brightness-50">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 text-center">
          Raghav Narayan Ramachandran
        </h1>
        <p className="text-xl text-white mb-6 text-center max-w-2xl">
          Full-Stack Engineer | Cloud & AI-Driven Solutions | 3+ YOE | ex-Cognizant
        </p>
        <div className="flex gap-4">
          <a
            href="/Raghav_Resume.pdf"
            className="px-4 py-2 bg-white text-blue-600 font-semibold rounded shadow"
          >
            Download Resume
          </a>
          <a
            href="#contact"
            className="px-4 py-2 bg-blue-600 text-white font-semibold rounded shadow"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
