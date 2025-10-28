import React, { useState } from "react";
import ResumeStep from "./ResumeStep";

const steps = [
  "Contact",
  "Summary",
  "Experience",
  "Education",
  "Skills",
  "Projects"
];

export default function ResumeForm({ data, setData }) {
  const [step, setStep] = useState(0);

  const next = () => setStep((s) => Math.min(s + 1, steps.length - 1));
  const prev = () => setStep((s) => Math.max(s - 1, 0));

  const handleChange = (field, value) => {
    setData({ ...data, [field]: value });
  };

  return (
    <div>
      {/* Progress bar */}
      <div className="flex items-center mb-6">
        {steps.map((s, i) => (
          <div key={s} className="flex-1">
            <div
              className={`h-2 rounded-full ${
                i <= step ? "bg-blue-600" : "bg-gray-200"
              }`}
            ></div>
          </div>
        ))}
      </div>

      <ResumeStep step={step} data={data} onChange={handleChange} />

      <div className="mt-6 flex justify-between">
        <button
          onClick={prev}
          disabled={step === 0}
          className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded-md disabled:opacity-50"
        >
          Back
        </button>
        <button
          onClick={next}
          disabled={step === steps.length - 1}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
        >
          Next
        </button>
      </div>
    </div>
  );
}
