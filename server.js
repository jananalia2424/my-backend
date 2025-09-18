import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 10000;

// API endpoint
app.post("/api/chat", async (req, res) => {
  try {
    const userMessage = req.body.message;

    const response = await fetch("https://api-inference.huggingface.co/models/gpt2", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.HF_API_KEY}`, // المفتاح تاعك من Hugging Face
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        inputs: userMessage
      })
    });

    const data = await response.json();

    // تنسيق الرد
    res.json({
      reply: `👋 أهلاً! هذا رد فريق الدعم:\n\n${data[0]?.generated_text || "عذراً، ما قدرناش نولدو رد."}`
    });

  } catch (error) {
    console.error("❌ خطأ:", error);
    res.status(500).json({ error: "مشكلة في الخادم 🚨" });
  }
});

// تشغيل السيرفر
app.listen(PORT, () => {
  console.log(`🚀 الخادم يعمل على المنفذ ${PORT}`);
});
