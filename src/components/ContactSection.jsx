import React from "react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-16 bg-gray-100 px-6 max-w-4xl mx-auto text-center"
    >
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      <p className="mb-4 text-lg">
        Interested in collaborating or hiring? Let’s connect!
      </p>
      <div className="text-lg space-y-2">
        <p>
          📧 Email:{" "}
          <a
            href="mailto:raghav.narayan.98@gmail.com"
            className="text-blue-600 hover:underline"
          >
            raghav.narayan.98@gmail.com
          </a>
        </p>
        <p>
          📞 Phone:{" "}
          <a
            href="tel:+16824053523"
            className="text-blue-600 hover:underline"
          >
            +1 (682) 405-3523
          </a>
        </p>
        <p>
          💼 LinkedIn:{" "}
          <a
            href="https://linkedin.com/in/raghav-narayan98"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            linkedin.com/in/raghav-narayan98
          </a>
        </p>
        <p>
          💻 GitHub:{" "}
          <a
            href="https://github.com/raghav-narayan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            github.com/raghav-narayan
          </a>
        </p>
      </div>
    </section>
  );
}
