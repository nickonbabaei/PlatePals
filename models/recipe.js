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
        ingredients: {type: [Schema.Types.ObjectId], ref: 'Ingredient'},
        instructions: {type: String, required: true},
        category: {type: String, required: false},
        image: {type: String, required: false},

    },
    { timestamps: true },
)

module.exports = mongoose.model('Recipe', Recipe)

