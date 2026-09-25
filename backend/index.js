const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/api/hello', (req, res) => {
  res.json({
    message: 'Hello from Node.js Backend!',
    environment: process.env.NODE_ENV || 'development'
  });
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Backend running on port ${PORT}`);
  });
}

module.exports = app;