// server.js

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3001;

app.use(bodyParser.json());

app.post('/record-attendance', (req, res) => {
  console.log('Attendance of the student recorded successfully');
  res.send('Attendance of the student recorded successfully');
});

// Route to handle GET requests to the root URL
app.get('/', (req, res) => {
  res.send('Welcome to the student attendance system!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
