// server.js
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 10000;

app.use(cors());
app.use(bodyParser.json());

// test endpoint
app.get("/", (req, res) => {
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.json({ message: "✅ Backend is running on Render!" });
});

// chat endpoint
app.post("/api/chat", async (req, res) => {
  try {
    const { message } = req.body;
    if (!message) return res.status(400).json({ error: "Message is required" });

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: message }]
      })
    });

    const data = await response.json();
    if (data.error) return res.status(500).json({ error: data.error.message });

    const reply = data.choices?.[0]?.message?.content ?? "No reply";
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.json({ reply });
  } catch (err) {
    console.error("❌ /api/chat error:", err);
    res.status(500).json({ error: "Server error" });
  }
});

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
