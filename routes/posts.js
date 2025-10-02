const express = require('express');
const router = express.Router();

// جلب جميع البوستات
router.get('/', (req, res) => {
    res.json([]); // يرجع مصفوفة فارغة مؤقتًا
});

// إنشاء بوست جديد
router.post('/', (req, res) => {
    res.json({ message: 'Post created' });
});

module.exports = router;
