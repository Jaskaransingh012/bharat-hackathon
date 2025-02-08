require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectToDB = require('./config/dbConnect');
const userRoutes = require('./Routes/User.routes');
const animalRoutes = require('./Routes/Animal.routes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
connectToDB();

// Routes
app.use('/api/users', userRoutes);
app.use('/api/animals', animalRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));