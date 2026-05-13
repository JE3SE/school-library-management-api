const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    name: { type: String, required: true }, // [cite: 42]
    email: { type: String, required: true, unique: true }, // [cite: 43]
    studentId: { type: String, required: true, unique: true }, // [cite: 44]
    createdAt: { type: Date, default: Date.now } // [cite: 45]
});

module.exports = mongoose.model('Student', StudentSchema);