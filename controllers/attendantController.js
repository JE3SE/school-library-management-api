const Attendant = require('../models/Attendant');

exports.createAttendant = async (req, res) => {
    try {
        const newAttendant = new Attendant(req.body);
        await newAttendant.save();
        res.status(201).json(newAttendant);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getAllAttendants = async (req, res) => {
    try {
        const attendants = await Attendant.find();
        res.json(attendants);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};