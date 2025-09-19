const express = require("express");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");
require("dotenv").config();

const app = express();
app.use(bodyParser.json());

// نخلي الردود UTF-8
app.use((req, res, next) => {
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  next();
});

app.get("/", (req, res) => {
  res.send("✅ Backend is running");
});

app.post("/api/chat", async (req, res) => {
  const userMessage = req.body.message || "";

  try {
    const response = await fetch(`https://api-inference.huggingface.co/models/${process.env.HF_MODEL}`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.HF_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ inputs: userMessage })
    });

    const data = await response.json();
    let botReply = "⚠️ ماقدرناش نجيب رد من الذكاء الاصطناعي.";

    if (Array.isArray(data) && data[0]?.generated_text) {
      botReply = data[0].generated_text;
    } else if (data?.error) {
      botReply = "⚠️ خطأ: " + data.error;
    }

    res.json({ reply: botReply });
  } catch (err) {
    res.json({ reply: "⚠️ مشكل في الاتصال بالسيرفر." });
  }
});

app.listen(process.env.PORT || 5000, () => {
  console.log(`🚀 Server running on http://localhost:${process.env.PORT || 5000}`);
});
