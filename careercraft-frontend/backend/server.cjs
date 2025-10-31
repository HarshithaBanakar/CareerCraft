// backend/server.cjs
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

// mock AI resume analysis
app.post("/api/analyze-resume", async (req, res) => {
  const { name, summary, skills } = req.body;

  if (!name || !summary || !skills) {
    return res.status(400).json({ error: "Incomplete resume data" });
  }

  // Simple mock scoring logic
  const score = Math.floor(Math.random() * 40) + 60; // random 60–100

  const suggestions = [
    "Add measurable achievements to your summary.",
    "Include more technical details in your experience section.",
    "Tailor your skills to the job role.",
    "Use action verbs like 'led', 'built', 'optimized'.",
  ];

  return res.json({ score, suggestions });
});

const PORT = 5000;
app.listen(PORT, () =>
  console.log(`✅ AI Resume Analyzer backend running on http://localhost:${PORT}`)
);
