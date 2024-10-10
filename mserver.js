const express = require('express')
const { simpleLogger } = require('./middlewares/simpleLogger')
const app = express()

app.use(simpleLogger)

app.get('/hello', (req, res, next) => {
    res.json({ message: 'hello afridi' })
})

app.get('/home', (req, res, next) => {
    res.json({ message: 'Sweet home at' })
})

app.listen(8000, () => {
    console.log('application is running')
})
