// Vercel automatically turns this file into the serverless endpoint: /api/contact
// It runs on the server, so the RESEND_API_KEY never reaches the browser.
//
// This file is fully self-contained (no imports from outside /api) — see the
// comment in api/chat.ts for why that matters on Vercel.

const NOTIFY_EMAIL = "krishnaambekar05@gmail.com"; // where submissions get sent

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    res.status(500).json({ error: "Server is missing RESEND_API_KEY" });
    return;
  }

  try {
    const { name, email, subject, message } = req.body as {
      name?: string;
      email?: string;
      subject?: string;
      message?: string;
    };

    if (!name || !email || !message) {
      res.status(400).json({ error: "Missing required fields" });
      return;
    }

    const emailRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: "Portfolio Contact Form <onboarding@resend.dev>",
        to: [NOTIFY_EMAIL],
        reply_to: email,
        subject: subject ? `Portfolio contact: ${subject}` : "New portfolio contact message",
        text: `From: ${name} (${email})\nSubject: ${subject || "(none)"}\n\n${message}`,
      }),
    });

    if (!emailRes.ok) {
      const errText = await emailRes.text();
      console.error("Resend API error:", errText);
      res.status(502).json({ error: "Failed to send email" });
      return;
    }

    res.status(200).json({ success: true });
  } catch (err) {
    console.error("Contact handler error:", err);
    res.status(500).json({ error: "Something went wrong" });
  }
}