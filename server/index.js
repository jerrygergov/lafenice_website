const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Simple test route
app.get('/api/ping', (req, res) => {
  res.json({ message: 'Server is working!' });
});

// Add more routes as needed

// Choose any free port you like (5000 / 8080 / etc.)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});