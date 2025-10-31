export async function analyzeResume(resumeData) {
  try {
    const response = await fetch("http://localhost:5000/api/analyze-resume", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(resumeData),
    });

    if (!response.ok) {
      throw new Error("Server returned an error");
    }

    const data = await response.json();
    return data; // {score, suggestions}
  } catch (error) {
    console.error("AI analysis failed:", error);
    return { score: null, suggestions: ["Could not connect to AI analyzer."] };
  }
}
