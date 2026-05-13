const Author = require('../models/Author');

// Create a new author [cite: 58]
exports.createAuthor = async (req, res) => {
    try {
        const { name, bio } = req.body;
        const newAuthor = new Author({ name, bio });
        await newAuthor.save();
        res.status(201).json(newAuthor);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get all authors [cite: 59]
exports.getAllAuthors = async (req, res) => {
    try {
        const authors = await Author.find();
        res.json(authors);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get a single author by ID [cite: 60]
exports.getAuthorById = async (req, res) => {
    try {
        const author = await Author.findById(req.params.id);
        if (!author) return res.status(404).json({ message: "Author not found" });
        res.json(author);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};