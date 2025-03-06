// backend/server.js
const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS
app.use(cors());

// Body parsing middleware
app.use(express.json());

// Sample data
const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  { id: 3, name: 'Jack White', email: 'jack@example.com' },
];

// Simple API route to get user data
app.get('/api/users', (req, res) => {
  res.json(users);
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
