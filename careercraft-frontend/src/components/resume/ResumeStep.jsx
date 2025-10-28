import React from "react";

export default function ResumeStep({ step, data, onChange }) {
  switch (step) {
    case 0:
      return (
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            value={data.contact.name}
            onChange={(e) =>
              onChange("contact", { ...data.contact, name: e.target.value })
            }
            className="w-full border p-3 rounded-md"
          />
          <input
            type="email"
            placeholder="Email"
            value={data.contact.email}
            onChange={(e) =>
              onChange("contact", { ...data.contact, email: e.target.value })
            }
            className="w-full border p-3 rounded-md"
          />
          <input
            type="tel"
            placeholder="Phone"
            value={data.contact.phone}
            onChange={(e) =>
              onChange("contact", { ...data.contact, phone: e.target.value })
            }
            className="w-full border p-3 rounded-md"
          />
        </div>
      );
    case 1:
      return (
        <textarea
          placeholder="Professional Summary"
          value={data.summary}
          onChange={(e) => onChange("summary", e.target.value)}
          className="w-full border p-3 rounded-md h-40"
        />
      );
    case 2:
      return (
        <div>
          <p className="text-gray-600 text-sm mb-2">Experience (sample only)</p>
          <input
            type="text"
            placeholder="Company"
            onChange={(e) =>
              onChange("experience", [{ company: e.target.value }])
            }
            className="w-full border p-3 rounded-md"
          />
        </div>
      );
    default:
      return (
        <p className="text-gray-500 text-sm">
          Step {step + 1}: Section coming soon.
        </p>
      );
  }
}
