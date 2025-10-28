import React, { useState, useRef } from "react";
import html2pdf from "html2pdf.js";

export default function ResumeBuilder() {
  const [resume, setResume] = useState({
    name: "",
    email: "",
    phone: "",
    summary: "",
    experience: [{ company: "", role: "", duration: "" }],
    skills: "",
  });

  const previewRef = useRef(null);

  // ✅ update form fields dynamically
  const handleChange = (field, value) => {
    setResume((prev) => ({ ...prev, [field]: value }));
  };

  // ✅ generate downloadable PDF
  const handleDownload = () => {
    const element = previewRef.current;
    const opt = {
      margin: 0.5,
      filename: `${resume.name || "resume"}.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
    };
    html2pdf().set(opt).from(element).save();
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col lg:flex-row">
      {/* LEFT: Form */}
      <div className="lg:w-1/2 w-full p-8 bg-white border-r border-gray-100">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Craft Your Resume
        </h1>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            value={resume.name}
            onChange={(e) => handleChange("name", e.target.value)}
            className="w-full border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            value={resume.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className="w-full border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none"
          />
          <input
            type="text"
            placeholder="Phone"
            value={resume.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            className="w-full border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none"
          />
          <textarea
            placeholder="Professional Summary"
            value={resume.summary}
            onChange={(e) => handleChange("summary", e.target.value)}
            className="w-full border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none"
            rows={4}
          />
          <input
            type="text"
            placeholder="Skills (comma separated)"
            value={resume.skills}
            onChange={(e) => handleChange("skills", e.target.value)}
            className="w-full border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none"
          />

          <button
            onClick={handleDownload}
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-all font-semibold mt-6"
          >
            Download PDF
          </button>
        </div>
      </div>

      {/* RIGHT: Preview */}
      <div className="lg:w-1/2 w-full p-8 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div
          ref={previewRef}
          className="bg-white shadow-md rounded-xl p-8 border border-gray-100 mx-auto max-w-lg"
        >
          <h1 className="text-3xl font-bold text-gray-800 mb-1">
            {resume.name || "Your Name"}
          </h1>
          <p className="text-gray-600 text-sm mb-4">
            {resume.email || "you@example.com"} |{" "}
            {resume.phone || "+91 00000 00000"}
          </p>

          <h2 className="text-xl font-semibold text-blue-700 mb-2">
            Professional Summary
          </h2>
          <p className="text-gray-700 text-sm mb-4 whitespace-pre-line">
            {resume.summary || "A brief summary about yourself goes here."}
          </p>

          <h2 className="text-xl font-semibold text-blue-700 mb-2">Skills</h2>
          <ul className="flex flex-wrap gap-2 mb-4">
            {(resume.skills
              ? resume.skills.split(",").map((s) => s.trim())
              : ["React", "Node.js", "MongoDB"]
            ).map((skill, i) => (
              <li
                key={i}
                className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs"
              >
                {skill}
              </li>
            ))}
          </ul>

          <h2 className="text-xl font-semibold text-blue-700 mb-2">
            Experience
          </h2>
          <p className="text-gray-700 text-sm">
            Add your experiences soon...
          </p>
        </div>
      </div>
    </div>
  );
}
