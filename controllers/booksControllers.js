const books = require('../models/books')
const { sendResponse } = require('../utils/utils')
const { bookSchema } = require('../validators/bookValidator')
const { v4: uuidv4 } = require('uuid')

const filterByAuthor = (books, author) => {
    return books.filter((book) =>
        book?.author.toLocaleLowerCase().includes(author.toLocaleLowerCase())
    )
}

const filterByName = (books, name) => {
    return books.filter((book) =>
        book?.title.toLocaleLowerCase().includes(name.toLocaleLowerCase())
    )
}

const filterByYear = (books, year) => {
    const parsedYear = parseInt(year, 10)
    if (isNaN(parsedYear)) return books
    return books.filter((book) => book.year === parsedYear)
}

const getBooks = (req, res) => {
    console.log(req.query)

    let result = books

    if (req.query.showAll === 'true') {
        return res.json(result)
    }

    if (req.query.author) {
        result = filterByAuthor(result, req.query.author)
    }

    if (req.query.name) {
        result = filterByName(result, req.query.name)
    }

    if (req.query.year) {
        result = filterByYear(result, req.query.year)
    }

    res.json(result)
}

const createBook = (req, res) => {
    // Validate the incoming data, excluding the id
    const { error, value } = bookSchema.validate(req.body, {
        allowUnknown: true,
        stripUnknown: true
    })

    if (error) {
        return sendResponse(
            res,
            400,
            false,
            null,
            `Validation error: ${error.details[0].message}`
        )
    }

    // Add a new UUID to the book data
    const newBook = { id: uuidv4(), ...value }

    books.push(newBook)
    sendResponse(res, 201, true, newBook, 'Book created successfully')
}

const updateBook = (req, res) => {
    const { id } = req.params
    const { error, value } = bookSchema.validate(req.body, {
        allowUnknown: true,
        stripUnknown: true,
        presence: 'optional' // Allow partial updates
    })

    if (error) {
        return sendResponse(
            res,
            400,
            false,
            null,
            `Validation error: ${error.details[0].message}`
        )
    }

    const bookIndex = books.findIndex((book) => book.id === id)

    if (bookIndex !== -1) {
        books[bookIndex] = { ...books[bookIndex], ...value }
        return sendResponse(
            res,
            200,
            true,
            books[bookIndex],
            'Book updated successfully'
        )
    }

    sendResponse(res, 404, false, null, 'Book not found')
}

const deleteBook = (req, res) => {
    const { id } = req.params
    const bookIndex = books.findIndex((book) => book.id === id)

    if (bookIndex !== -1) {
        const deletedBook = books.splice(bookIndex, 1)
        return sendResponse(
            res,
            200,
            true,
            deletedBook,
            'Book deleted successfully'
        )
    }

    sendResponse(res, 404, false, null, 'Book not found')
}

module.exports = { getBooks, createBook, updateBook, deleteBook }
