const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

// ✅ Middleware
app.use(cors());
app.use(express.json());

// ✅ Routes
try {
  const authRoutes = require("./routes/auth");
  const postRoutes = require("./routes/posts");
  const commentRoutes = require("./routes/comments");

  app.use("/api/auth", authRoutes);
  app.use("/api/posts", postRoutes);
  app.use("/api/comments", commentRoutes);
} catch (err) {
  console.error("⚠️ خطأ في تحميل الراوتات:", err.message);
}

// ✅ Route افتراضي للـ backend فقط
app.get("/", (req, res) => {
  res.json({ message: "✅ Backend is running correctly!" });
});

// ✅ Serve React frontend (if exists)
if (process.env.NODE_ENV === "production") {
  const buildPath = path.join(__dirname, "build");
  app.use(express.static(buildPath));

  app.get("*", (req, res) => {
    res.sendFile(path.join(buildPath, "index.html"));
  });
}

// ✅ Port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
