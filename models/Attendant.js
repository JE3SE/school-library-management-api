const mongoose = require('mongoose');

const AttendantSchema = new mongoose.Schema({
    name: { type: String, required: true }, // [cite: 49]
    staffId: { type: String, required: true, unique: true }, // [cite: 50]
    createdAt: { type: Date, default: Date.now } // [cite: 51]
});

module.exports = mongoose.model('Attendant', AttendantSchema);