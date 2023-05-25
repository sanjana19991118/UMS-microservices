const mongoose = require('mongoose')
const Schema = mongoose.Schema

const detailsSchema = new Schema({
    age: {
        type: Number,
        required: true
    },
    city : {
        type: String,
        required: true
    },
    user : {
        type: Schema.Types.ObjectId,
        ref : 'User',
        required: true
    }
    
})


const Details = mongoose.model('Details' , detailsSchema)
module.exports = Details
