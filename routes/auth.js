const express = require('express');
const router = express.Router();

// ????? ?????? ????
router.post('/register', (req, res) => {
<<<<<<< HEAD
    res.json({ message: 'Register endpoint' });
=======
    res.send('Register endpoint');
>>>>>>> 3998e0d85f5ec3111171ee9cbee6bf86c1cd271a
});

// ????? ??????
router.post('/login', (req, res) => {
<<<<<<< HEAD
    res.json({ message: 'Login endpoint' });
=======
    res.send('Login endpoint');
>>>>>>> 3998e0d85f5ec3111171ee9cbee6bf86c1cd271a
});

module.exports = router;
