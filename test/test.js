const myDB = require('../db/db')

myDB.create('user 1', 10)
myDB.create('user 2', 20)
myDB.create('user 3', 13)
myDB.create('user 4', 40)
myDB.create('user 5', 50)
myDB.bulkCreate('user 5', 1500, 5)
const tickets = myDB.find()
console.log('all tickets', tickets)

const winners = myDB.draw(4)
console.log('winners', winners)
