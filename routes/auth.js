const express = require('express');
const router = express.Router();

// ✅ مسار افتراضي لفحص عمل الراوت
router.get('/', (req, res) => {
  res.json({ message: '✅ Auth route working properly!' });
});

// ✅ تسجيل مستخدم جديد
router.post('/register', (req, res) => {
  const { username, email, password } = req.body;

  // لاحقًا نقدر نضيف قاعدة بيانات، لكن الآن نرجع فقط رسالة اختبار
  res.json({
    message: 'Register endpoint reached successfully!',
    data: { username, email, password }
  });
});

// ✅ تسجيل الدخول
router.post('/login', (req, res) => {
  const { email, password } = req.body;

  // استجابة اختبار فقط
  res.json({
    message: 'Login endpoint reached successfully!',
    data: { email, password }
  });
});

module.exports = router;
