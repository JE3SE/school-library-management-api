const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

// Standard CRUD
router.post('/', bookController.createBook);
router.get('/', bookController.getAllBooks);
router.get('/:id', bookController.getBookById);

// Borrowing & Returning Logic
router.post('/:id/borrow', bookController.borrowBook);
router.post('/:id/return', bookController.returnBook);

module.exports = router;