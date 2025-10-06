const express = require("express");
const router = express.Router();

// ✅ تسجيل مستخدم جديد
router.post("/register", (req, res) => {
  const { username, email, password } = req.body;

  // محاكاة إنشاء مستخدم
  res.status(201).json({
    success: true,
    message: "✅ تم التسجيل بنجاح",
    user: { id: Date.now(), username, email },
  });
});

// ✅ تسجيل الدخول
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  // محاكاة تحقق المستخدم
  if (email && password) {
    res.json({
      success: true,
      message: "✅ تم تسجيل الدخول بنجاح",
      token: "fake-jwt-token-" + Date.now(),
    });
  } else {
    res.status(400).json({
      success: false,
      message: "❌ البريد الإلكتروني أو كلمة المرور غير صحيحة",
    });
  }
});

module.exports = router;
