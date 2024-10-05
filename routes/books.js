const express = require('express')
const {
    getBooks,
    createBook,
    updateBook,
    deleteBook
} = require('../controllers/booksControllers')

const router = express.Router()

router.get('/', getBooks)
router.post('/', createBook)
router.put('/:id', updateBook)
router.delete('/:id', deleteBook)

module.exports = router
