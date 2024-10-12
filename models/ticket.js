const shortId = require('shortid')
/**
 *  constructor function
 * @param {string} userName
 * @param {number} price

 */
class Ticket {
    constructor(username, price) {
        this.id = shortId.generate()
        this.username = username
        this.price = price
        this.createAt = new Date()
        this.updatedAt = new Date()
    }
}

module.exports = Ticket
