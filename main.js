const express = require('express')

const app = express()
app.use(express.json())
const booksRouter = require('./routes/books')

app.use('/books', booksRouter)

app.listen(8000, () => {
    console.log('Server is listening on port 8000')
})
