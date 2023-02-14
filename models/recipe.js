const mongoose = require('mongoose')
const {Schema} = require('mongoose')

const Ingredient = new Schema(
    {
        measurement: {type: String, required: true},
        name: {type: String, required: true}

    },
    { timestamps: true },
)

const Recipe = new Schema(
    {
        name: {type: String, required: true},
        category: {type: Schema.Types.ObjectId, required: true},
        ingredients: {type: [String], required: true},
        instructions: {type: String, required: true},
        image: {type: String, required: false},

    },
    { timestamps: true },
)

module.exports = mongoose.model('Recipe', Recipe)

