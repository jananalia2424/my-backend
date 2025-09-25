// server.js
import express from "express"; // استعملنا import ليتوافق مع type: "module"
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Endpoint الشات
app.post("/api/chat", (req, res) => {
  try {
    const { message } = req.body;
    if (!message) {
      return res.status(400).json({ reply: "⚠️ لم يتم إرسال أي رسالة" });
    }

    // رد بسيط للتجربة
    const reply = `👋 مرحبا! استلمت رسالتك: ${message}`;
    res.json({ reply });
  } catch (error) {
    console.error(error);
    res.status(500).json({ reply: "❌ حدث خطأ في السيرفر" });
  }
});

// تشغيل السيرفر
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
