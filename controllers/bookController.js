const Book = require('../models/Book');

// POST /books [cite: 64]
exports.createBook = async (req, res) => {
    try {
        const newBook = new Book(req.body);
        await newBook.save();
        res.status(201).json(newBook);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// GET /books [cite: 65]
exports.getAllBooks = async (req, res) => {
    try {
        const books = await Book.find().populate('authors');
        res.json(books);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// GET /books/:id [cite: 66, 106]
exports.getBookById = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id)
            .populate('authors') // [cite: 113]
            .populate('borrowedBy') // [cite: 114]
            .populate('issuedBy'); // [cite: 115]
        
        if (!book) return res.status(404).json({ message: "Book not found" });
        res.json(book);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// POST /books/:id/borrow [cite: 77]
exports.borrowBook = async (req, res) => {
    try {
        const { studentId, attendantId, returnDate } = req.body;
        const book = await Book.findById(req.params.id);

        if (!book || book.status === 'OUT') { // [cite: 86]
            return res.status(400).json({ message: "Book is not available" });
        }

        book.status = 'OUT'; // [cite: 88]
        book.borrowedBy = studentId; // [cite: 90]
        book.issuedBy = attendantId; // [cite: 91]
        book.returnDate = returnDate; // [cite: 92]

        await book.save();
        res.json(book);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// POST /books/:id/return [cite: 95]
exports.returnBook = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);

        if (!book || book.status === 'IN') { // [cite: 97]
            return res.status(400).json({ message: "Book is already in" });
        }

        book.status = 'IN'; // [cite: 100]
        book.borrowedBy = null; // [cite: 102]
        book.issuedBy = null; // [cite: 103]
        book.returnDate = null; // [cite: 104]

        await book.save();
        res.json(book);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};