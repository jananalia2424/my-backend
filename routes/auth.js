const express = require('express');
const router = express.Router();

// تسجيل مستخدم جديد (مثال تجريبي)
router.post('/register', (req, res) => {
  // لو عندك منطق التسجيل حطه هنا
  res.json({ message: 'Register endpoint (OK)', bodySent: req.body || null });
});

// تسجيل الدخول (مثال تجريبي)
router.post('/login', (req, res) => {
  // لو عندك تحقق الباسورد والـ JWT حطه هنا
  res.json({ message: 'Login endpoint (OK)', bodySent: req.body || null });
});

module.exports = router;
