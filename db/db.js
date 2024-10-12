const Ticket = require('../models/ticket')
class MyDB {
    constructor() {
        this.tickets = []
    }

    /**
     *
     * @param {string} username
     * @param {number} price
     * @returns {Ticket}
     */
    create(username, price) {
        const ticket = new Ticket(username, price)
        this.tickets.push(ticket)
        return ticket
    }

    /**
     * create multiple ticket for a single user
     * @param {string} username
     * @param {string} price
     * @param {number} quantity
     * @returns {Array<Ticket>}

    */
    // bulk multiple ticket
    bulkCreate(username, price, quantity) {
        const result = []
        for (let i = 0; i < quantity; i++) {
            const ticket = this.create(username, price)
            result.push(ticket)
        }
        return result
    }

    // return all tickets
    /**
     * return all available tickets
     */
    find() {
        return { data: this.tickets, total: this.tickets.length }
    }

    // single ticket
    /**
     * @param {string} ticketId
     * @returns {Ticket}
     */
    findById(ticketId) {
        const ticket = this.tickets.find(
            /**
             * @param {Ticket} ticket
             */
            (ticket) => ticket.id === ticketId
        )
        return ticket
    }
    /**
     * @param {string} username
     * @returns {Array<Ticket>} username
     */
    findByusername(username) {
        const tickets = this.tickets.filter(
            /**
            * @param {Ticket} ticket
            
            */
            (ticket) => ticket.username === username
        )
        return tickets
    }

    /**
     * @param {string} ticketId
     * @param {{username: string, price: number}} ticketBody
     * @returns {Ticket}
     */

    // update ticket info
    updateById(ticketId, ticketBody) {
        const ticket = this.findById(ticketId)
        ticket.username = ticketBody.username ?? ticket.username
        ticket.price = ticketBody.price ?? ticket.price
        ticket.updatedAt = new Date()
        return ticket
    }

    /**
     * @param {string} ticketId
     */
    deleteById(ticketId) {
        const index = this.tickets.findIndex((ticket) => ticket.id === ticketId)

        if (index !== -1) {
            this.tickets.splice(index, 1)
            return true
        } else {
            return false
        }
    }

    /**
     *
     * @param {number} winnerCount
     * @returns {Array<Ticket>}
     */

    draw(winnerCount) {
        let winnerIndexes = new Array(winnerCount)
        let index = 0
        while (index < winnerCount) {
            let winnerIndex = Math.floor(Math.random() * this.tickets.length)

            if (!winnerIndexes.includes(winnerIndex)) {
                winnerIndexes[index++] = winnerIndex
                continue
            }
        }

        const winners = winnerIndexes.map((index) => this.tickets[index])

        return winners
    }
}

const myDB = new MyDB()

module.exports = myDB
