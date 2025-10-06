const express = require("express");
const router = express.Router();

/* -----------------------------------
   ✅ تسجيل مستخدم جديد (Register)
----------------------------------- */
router.post("/register", (req, res) => {
  const { username, email, password } = req.body;

  // 🛑 التحقق من القيم
  if (!username || !email || !password) {
    return res.status(400).json({
      success: false,
      message: "❌ يجب إدخال اسم المستخدم والبريد وكلمة المرور",
    });
  }

  // 🧩 محاكاة إنشاء مستخدم جديد
  const newUser = {
    id: Date.now(),
    username,
    email,
  };

  res.status(201).json({
    success: true,
    message: "✅ تم التسجيل بنجاح",
    user: newUser,
  });
});

/* -----------------------------------
   ✅ تسجيل الدخول (Login)
----------------------------------- */
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  // 🛑 التحقق من القيم
  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "❌ يرجى إدخال البريد الإلكتروني وكلمة المرور",
    });
  }

  // ⚙️ محاكاة تحقق من بيانات المستخدم
  res.json({
    success: true,
    message: "✅ تم تسجيل الدخول بنجاح",
    token: `fake-jwt-token-${Date.now()}`,
  });
});

module.exports = router;
