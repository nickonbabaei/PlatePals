
const Recipe = require('../models/recipe')
require('../models/category')

// const createIngredient = async (req, res) => {
//     try {
//     const ingredient = await new Ingredient(req.body)
//     await ingredient.save()
//     return res.json({ingredient})
//         } catch (error) {
//     return res.json({ error: error.message })
// }
// }


const createRecipe = async (req, res) => {
    try {
        
        recipe = await new Recipe({
            name: req.body.name,
            ingredients: req.body.ingredients.split(','),
            instructions: req.body.instructions,
            category: req.body.category,
            image: req.body.image
        })
        recipe.save()
        return res.json(recipe)
    } catch (err) {
        return res.json({err: err.message})
    }
}

const getAllRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.find()
        return res.json(recipes)
    } catch(err) {
        res.send(err.message)
    }
}

const getRecipeById = async (req, res) => {
    try {
        const { id } = req.params
        const recipe = await Recipe.findById(id).populate('category')
        return res.json(recipe)
        
    } catch (error) {
        return res.send({msg: error.message, err: 'Recipe with the specified ID does not exists'})
    }
}

const updateRecipe = async (req, res) => {
    try {
        const recipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.json(recipe)
    } catch (error) {
        return res.send(error.message)
    }
}

const deleteRecipe = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Recipe.findByIdAndDelete(id)
        if (deleted) {
            return res.send("Recipe deleted")
        }
        throw new Error("Recipe not found")
    } catch (error) {
        return res.send(error.message)
    }
}




module.exports = {
    createRecipe,
    getAllRecipes,
    getRecipeById,
    updateRecipe,
    deleteRecipe
}