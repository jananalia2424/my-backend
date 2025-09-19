const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// نضمن أن الرد يكون UTF-8
app.use((req, res, next) => {
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  next();
});

app.get("/", (req, res) => {
  res.send("✅ Backend is running");
});

app.post("/api/chat", (req, res) => {
  const userMessage = req.body.message || "";
  res.json({ reply: `👋 مرحبا! استلمت رسالتك: ${userMessage}` });
});

app.listen(5000, () => {
  console.log("🚀 Server running on http://localhost:5000");
});
