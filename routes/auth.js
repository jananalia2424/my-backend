const express = require('express');
const router = express.Router();

// تسجيل مستخدم جديد
router.post('/register', (req, res) => {
    res.json({ message: 'Register endpoint' });
});

// تسجيل الدخول
router.post('/login', (req, res) => {
    res.json({ message: 'Login endpoint' });
});

module.exports = router;
