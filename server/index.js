const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Simple test route: http://localhost:5000/api/ping
app.get('/api/ping', (req, res) => {
  res.json({ message: 'Server is working!' });
});

// Here you can add more routes for database operations, forms, etc.

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
