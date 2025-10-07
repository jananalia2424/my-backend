const express = require("express");
const cors = require("cors");
const path = require("path");

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
   ✅ الصفحة الرئيسية (افتراضية)
----------------------------------- */
app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>🚀 Backend API - Social App</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f5f6fa;
            text-align: center;
            margin-top: 100px;
            color: #2f3640;
          }
          h1 { color: #44bd32; }
          a {
            display: inline-block;
            margin-top: 20px;
            padding: 10px 20px;
            background-color: #273c75;
            color: white;
            text-decoration: none;
            border-radius: 5px;
          }
          a:hover { background-color: #40739e; }
        </style>
      </head>
      <body>
        <h1>✅ Backend API is running successfully!</h1>
        <p>Welcome to the <strong>Social App Backend</strong> 🚀
