const express = require("express");
const cors = require("cors");

const app = express();

/* -----------------------------------
   ✅ الإعدادات الأساسية
----------------------------------- */
app.use(cors());
app.use(express.json());

/* -----------------------------------
   ✅ تحميل الراوتات (Auth / Posts / Comments)
----------------------------------- */
try {
  const authRoutes = require("./routes/auth");
  const postRoutes = require("./routes/posts");
  const commentRoutes = require("./routes/comments");

  app.use("/api/auth", authRoutes);
  app.use("/api/posts", postRoutes);
  app.use("/api/comments", commentRoutes);
} catch (err) {
  console.error("⚠️ خطأ أثناء تحميل أحد ملفات الراوت:", err.message);
}

/* -----------------------------------
   ✅ اختبار عمل السيرفر
----------------------------------- */
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "✅ Backend is running correctly!",
    timestamp: new Date().toISOString(),
  });
});

/* -----------------------------------
   ✅ معالجة أي مسار غير معروف (بدون واجهة React)
----------------------------------- */
app.get("*", (req, res) => {
  res.status(404).json({
    success: false,
    message: "❌ Page not found — this server runs backend API only.",
  });
});

/* -----------------------------------
   ✅ تشغيل السيرفر
----------------------------------- */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running successfully on port ${PORT}`);
});
