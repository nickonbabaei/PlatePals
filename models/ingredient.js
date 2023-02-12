const mongoose = require('mongoose')
const {Schema} = require('mongoose')

const Ingredient = new Schema(
    {
        measurement: {type: String, required: true},
        name: {type: String, required: true}

    },
    { timestamps: true },
)

module.exports = mongoose.model('Ingredient', Ingredient)
