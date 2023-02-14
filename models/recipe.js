const mongoose = require('mongoose')
const {Schema} = require('mongoose')

const Recipe = new Schema(
    {
        name: {type: String, required: true},
        category: {type: Schema.Types.ObjectId, ref: 'Category', required: true},
        ingredients: {type: [String], required: true},
        instructions: {type: String, required: true},
        image: {type: String, required: false}
    },
    { timestamps: true },
)

module.exports = mongoose.model('Recipe', Recipe)

