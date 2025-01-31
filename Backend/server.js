import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import UserSchema from './models/FormModel.js';

const app= express();


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
  res.status(200).json({ message: 'user registered successfully!' });
});


const FormModel = await UserSchema.create({
      name: 'suhail',
      email: "suhail@gmail.com"
})
console.log(FormModel)
// Start the server
app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});
