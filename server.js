// server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// API Routes
app.use('/api/student', require('./routes/student'));

app.get('/', (req, res) => {
  res.send('Welcome to FiPass!');
});

app.listen(PORT, () => {
  console.log(`App is up and running. Listening on port ${PORT}`);
});
