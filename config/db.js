const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // This pulls the connection string from your .env file
        await mongoose.connect(process.env.MONGO_URI);
        console.log('✅ MongoDB Connected successfully');
    } catch (err) {
        // If 'Cite' was in your code, it would trigger this error message
        console.error('❌ MongoDB Connection Error:', err.message);
        process.exit(1); 
    }
};

module.exports = connectDB;