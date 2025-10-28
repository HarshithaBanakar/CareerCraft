import React from "react";

export default function ResumePreviewCard({ data }) {
  const { name, email, phone, summary, skills, experience, education } = data;

  return (
    <div className="space-y-6 text-gray-800 font-sans">
      <header>
        <h1 className="text-3xl font-bold text-blue-700">{name || "Your Name"}</h1>
        <p className="text-sm text-gray-500">{email || "email@example.com"} | {phone || "123-456-7890"}</p>
      </header>

      {summary && (
        <section>
          <h2 className="text-xl font-semibold text-gray-900 border-b border-gray-200 pb-1 mb-2">
            Summary
          </h2>
          <p className="text-gray-700 leading-relaxed">{summary}</p>
        </section>
      )}

      {skills && (
        <section>
          <h2 className="text-xl font-semibold text-gray-900 border-b border-gray-200 pb-1 mb-2">
            Skills
          </h2>
          <ul className="flex flex-wrap gap-2">
            {skills.split(",").map((skill, i) => (
              <li
                key={i}
                className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm hover:bg-blue-100 transition-colors"
              >
                {skill.trim()}
              </li>
            ))}
          </ul>
        </section>
      )}

      {experience && (
        <section>
          <h2 className="text-xl font-semibold text-gray-900 border-b border-gray-200 pb-1 mb-2">
            Experience
          </h2>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">{experience}</p>
        </section>
      )}

      {education && (
        <section>
          <h2 className="text-xl font-semibold text-gray-900 border-b border-gray-200 pb-1 mb-2">
            Education
          </h2>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">{education}</p>
        </section>
      )}
    </div>
  );
}
