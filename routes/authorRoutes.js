const express = require('express');
const router = express.Router();
const authorController = require('../controllers/authorController');

// Define the endpoints [cite: 58, 59, 60]
router.post('/', authorController.createAuthor);
router.get('/', authorController.getAllAuthors);
router.get('/:id', authorController.getAuthorById);

module.exports = router;