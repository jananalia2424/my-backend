const express = require("express");
const router = express.Router();

/* -----------------------------------
   ✅ جلب جميع التعليقات
----------------------------------- */
router.get("/", (req, res) => {
  res.json([
    { id: 1, postId: 1, content: "Great post!" },
    { id: 2, postId: 2, content: "Interesting!" },
  ]);
});

/* -----------------------------------
   ✅ جلب التعليقات الخاصة بمنشور معيّن
----------------------------------- */
router.get("/:postId", (req, res) => {
  const postId = req.params.postId;
  res.json({
    message: "Comments for specific post",
    postId,
    comments: [
      { id: 1, postId, content: "Nice one!" },
      { id: 2, postId, content: "Thanks for sharing!" },
    ],
  });
});

/* -----------------------------------
   ✅ إنشاء تعليق جديد
----------------------------------- */
router.post("/", (req, res) => {
  const { postId, content } = req.body;
  res.json({
    message: "Comment created successfully",
    comment: { id: Date.now(), postId, content },
  });
});

module.exports = router;
