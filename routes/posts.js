const express = require('express');
const router = express.Router();

// ????? ????? ????
router.post('/', (req, res) => {
    res.send('Create post endpoint');
});

// ??? ?? ?????????
router.get('/', (req, res) => {
    res.send('Get posts endpoint');
});

module.exports = router;
