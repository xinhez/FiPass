// server.js

const PORT = process.env.PORT || 3000;

const express = require('express');
const path = require('path');

const app = express();

// Static files
app.use(express.static('build'));

// API Routes
app.use('/api/student', require('./scripts/routes/student'));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'))
});

app.listen(PORT, () => {
  console.log(`App is up and running. Listening on port ${PORT}`);
});
