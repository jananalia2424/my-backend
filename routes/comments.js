const express = require('express');
const router = express.Router();

// جلب التعليقات حسب postId
router.get('/:postId', (req, res) => {
    res.json([]); // يرجع مصفوفة فارغة مؤقتًا
});

// إضافة تعليق جديد
router.post('/:postId', (req, res) => {
    res.json({ message: 'Comment added' });
});

module.exports = router;
