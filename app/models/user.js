const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'name is required']
    },
    code : {
        type: String,
        required: [true, 'code is required']
    }
})


const User = mongoose.model('User' , userSchema)
module.exports = User
