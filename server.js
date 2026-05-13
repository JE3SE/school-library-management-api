require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');

// Import Routes
const authorRoutes = require('./routes/authorRoutes');
const bookRoutes = require('./routes/bookRoutes');
const studentRoutes = require('./routes/studentRoutes');
const attendantRoutes = require('./routes/attendantRoutes');

const app = express();
connectDB();

// Middleware to parse JSON (Must be before routes)
app.use(express.json());

// Mounting Routes
app.use('/authors', authorRoutes);
app.use('/books', bookRoutes);
app.use('/students', studentRoutes);
app.use('/attendants', attendantRoutes);

app.get('/', (req, res) => res.send('Library API is Online'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));