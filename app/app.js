require('dotenv').config('../.env')
const express = require('express')
const { errorHandler, notFoundHandler } = require('./error')
const app = express()

const myDB = require('../db/db')

myDB.create('user 1', 10)
myDB.create('user 2', 20)
myDB.create('user 3', 13)
myDB.create('user 4', 40)
myDB.create('user 5', 50)
myDB.bulkCreate('user 5', 1000, 5)
const tickets = myDB.find()
console.log('all tickets', tickets)

const winners = myDB.draw(2)
console.log('winners', winners)

app.use(require('./middleware'))
app.use(require('./routes'))
app.use(notFoundHandler)
app.use(errorHandler)

module.exports = app
