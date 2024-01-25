const mongoose = require('mongoose')

const quotesSchema = new mongoose.Schema({
    quote:{
        type: String
    },
    author:{
        type:String
    },
    date:{
        type:String
    },
    dateCreated: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Quotes', quotesSchema)