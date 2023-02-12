const Recipe = require('../models/recipe')

const createRecipe = async (req, res) => {
    try {
        const recipe = await new Recipe(req.body)
        await recipe.save()
        return res.json({plant})
    } catch (err) {
        return res.json({err: err.message})
    }
}





module.exports = {
    createRecipe
}