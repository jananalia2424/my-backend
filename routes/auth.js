const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: '✅ Auth route works fine!' });
});

router.post('/register', (req, res) => {
  res.json({ message: 'Register endpoint' });
});

router.post('/login', (req, res) => {
  res.json({ message: 'Login endpoint' });
});

module.exports = router;
