const express = require("express");
const router = express.Router();

// ✅ جلب جميع المنشورات
router.get("/", (req, res) => {
  res.json([
    { id: 1, title: "Post 1", content: "This is post 1" },
    { id: 2, title: "Post 2", content: "This is post 2" },
  ]);
});

// ✅ إنشاء منشور جديد
router.post("/", (req, res) => {
  res.json({ message: "✅ Create post endpoint" });
});

module.exports = router;
