import express from "express"; 
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.post("/api/chat", (req, res) => {
  try {
    const { message } = req.body;
    if (!message) {
      return res.status(400).json({ reply: "⚠️ لم يتم إرسال أي رسالة" });
    }

    // هنا يمكنك إضافة استدعاء OpenAI لاحقًا
    const reply = `👋 مرحبا! استلم
