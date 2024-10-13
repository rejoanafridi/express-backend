const mongoose = require('mongoose')
const { validate } = require('uuid')

const personSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        maxLength: [10, 'maximum 10 charts'],
        minLength: [3, 'maximum 3 charts']
    },
    lastName: {
        type: String,
        required: true,
        maxLength: [10, 'maximum 10 charts'],
        minLength: [3, 'maximum 3 charts']
    },
    email: {
        type: String,
        required: true,
        minLength: [6, 'min 6 charts'],
        validate: {
            validator: (v) => {
                return v.endsWith('.com')
            },
            message: (props) => `${props.value} is not a valid email`
        }
    },
    age: Number,
    bio: String,
    single: Boolean
})
const Person = mongoose.model('Person', personSchema)

mongoose
    .connect('mongodb://localhost:27017/mon-demo')
    .then(async () => {
        console.log('database connected')
        const person = new Person({
            firstName: 'Afridi',
            lastName: 'Islam',
            email: 'afridi@email.com'
        })
        await person.save()
        console.log('person created')
        console.log(person)
    })
    .catch((e) => console.log(e))
    .finally(() => {
        mongoose.connection.close()
        console.log('close database')
    })
