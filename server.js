const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/api/chat', (req, res) => {
  const { message } = req.body;
  const reply = \?? ?????? ??????: \\;
  res.json({ reply });
});

app.listen(PORT, () => {
  console.log(\?? Server running on port \\);
});
