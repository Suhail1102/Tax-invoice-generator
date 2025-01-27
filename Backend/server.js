const express = require('express');
const cors = require('cors');
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Allow requests from your frontend
app.use(cors({ origin: 'http://localhost:5173' }));

// Handle signup requests
app.post('/api/signup', (req, res) => {
  console.log('Request Body:', req.body);

  const { fullName, email, password } = req.body;

  // Debug: Check if data is received correctly
  if (!fullName || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  console.log('Full Name:', fullName);
  console.log('Email:', email);
  console.log('Password:', password);

  // Send a success response
  res.json({ message: 'User registered successfully!' });
});

// Start the server
app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});
