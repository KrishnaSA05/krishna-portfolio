import { portfolioData } from "../client/src/data/portfolio";

// Vercel automatically turns this file into the serverless endpoint: /api/chat
// It runs on the server, so the GROQ_API_KEY never reaches the browser.

interface IncomingMessage {
  role: "user" | "bot";
  content: string;
}

function buildSystemPrompt(): string {
  const { personal, about, experience, projects, skills, education, certifications } =
    portfolioData;

  const experienceText = experience
    .map(
      (e) =>
        `- ${e.title} at ${e.company} (${e.period}): ${e.achievements
          .slice(0, 2)
          .join(" ")}`
    )
    .join("\n");

  const projectsText = projects
    .map(
      (p) =>
        `- ${p.title} [${p.technologies.slice(0, 6).join(", ")}]: ${p.description}`
    )
    .join("\n");

  const skillsText = Object.entries(skills)
    .map(([category, items]) => `${category}: ${(items as string[]).join(", ")}`)
    .join("\n");

  const educationText = education
    .map((e) => `- ${e.degree}, ${e.institution} (${e.period})`)
    .join("\n");

  const certsText = certifications.map((c) => `- ${c.title} (${c.issuer})`).join("\n");

  return `You are the AI Portfolio Assistant for ${personal.name}, an ${personal.title}.
Answer visitor questions ONLY using the information below. Be concise, friendly, and specific.
If asked something you can't answer from this data, say you don't have that information and suggest contacting ${personal.name} directly at ${personal.email}.

ABOUT:
${about}

EXPERIENCE:
${experienceText}

PROJECTS:
${projectsText}

SKILLS:
${skillsText}

EDUCATION:
${educationText}

CERTIFICATIONS:
${certsText}

CONTACT:
Email: ${personal.email} | LinkedIn: ${personal.linkedin} | GitHub: ${personal.github}
`;
}

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    res.status(500).json({ error: "Server is missing GROQ_API_KEY" });
    return;
  }

  try {
    const { messages } = req.body as { messages: IncomingMessage[] };

    if (!messages || !Array.isArray(messages)) {
      res.status(400).json({ error: "Missing messages array" });
      return;
    }

    const groqMessages = [
      { role: "system", content: buildSystemPrompt() },
      ...messages.map((m) => ({
        role: m.role === "bot" ? "assistant" : "user",
        content: m.content,
      })),
    ];

    const groqRes = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "openai/gpt-oss-120b",
        messages: groqMessages,
        temperature: 0.5,
        max_tokens: 500,
      }),
    });

    if (!groqRes.ok) {
      const errText = await groqRes.text();
      console.error("Groq API error:", errText);
      res.status(502).json({ error: "Failed to get a response from Groq" });
      return;
    }

    const data = await groqRes.json();
    const reply = data.choices?.[0]?.message?.content ?? "Sorry, I couldn't generate a response.";

    res.status(200).json({ reply });
  } catch (err) {
    console.error("Chat handler error:", err);
    res.status(500).json({ error: "Something went wrong" });
  }
}
