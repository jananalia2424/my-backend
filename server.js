import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const app = express();

// ✅ إعدادات السيرفر
app.use(cors()); // يسمح لأي origin
app.use(express.json());
app.use(express.static("public")); // يخدم ملفات HTML و CSS من مجلد public

// إعداد OpenAI
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// نقطة نهاية شات ChatGPT
app.post("/api/chat", async (req, res) => {
  const { message } = req.body;
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: message }],
    });
    res.json({ reply: response.choices[0].message.content });
  } catch (err) {
    console.error(err);
    res.status(500).json({ reply: "⚠️ حدث خطأ بالسيرفر. حاول لاحقًا." });
  }
});

// تشغيل السيرفر على بورت 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
