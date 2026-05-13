const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title: { type: String, required: true }, // [cite: 30]
    isbn: { type: String, required: true, unique: true }, // [cite: 31, 127]
    authors: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Author', required: true }], // [cite: 32]
    status: { type: String, enum: ['IN', 'OUT'], default: 'IN' }, // [cite: 33]
    borrowedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', default: null }, // [cite: 34]
    issuedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'Attendant', default: null }, // [cite: 35]
    returnDate: { type: Date, default: null }, // [cite: 37]
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Book', BookSchema);