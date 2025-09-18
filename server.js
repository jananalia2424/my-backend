import express from "express";
import fetch from "node-fetch";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());

const HF_API_KEY = process.env.HF_API_KEY; // المفتاح تاعك من Hugging Face
const HF_MODEL = "facebook/blenderbot-400M-distill"; // موديل محادثة مجاني

app.post("/api/chat", async (req, res) => {
  try {
    const userMessage = req.body.message;

    // ✅ نزيدو prompt أوضح
    const prompt = `أنت مساعد دعم تقني ودود. 
    جاوب المستخدم بالعربية بإيجاز ونقاط واضحة. 
    المستخدم قال: "${userMessage}"`;

    const response = await fetch(
      `https://api-inference.huggingface.co/models/${HF_MODEL}`,
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${HF_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          inputs: prompt,
        }),
      }
    );

    const data = await response.json();

    let reply =
      data && data.length > 0 && data[0].generated_text
        ? data[0].generated_text
        : "⚠️ الخدمة مشغولة حالياً، حاول مرة أخرى بعد لحظات.";

    res.json({ reply });
  } catch (error) {
    console.error("خطأ في السيرفر:", error);
    res.status(500).json({
      error: "⚠️ خطأ في الخادم، يرجى المحاولة لاحقاً.",
    });
  }
});

const PORT = process.env.PORT || 5000;
app.listen// نخلي مجلد public يخدم الملفات (index.html)
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

