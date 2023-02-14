const Ingredient = require('../models/ingredient')
const Recipe = require('../models/recipe')

const createIngredient = async (req, res) => {
    try {
    const ingredient = await new Ingredient(req.body)
    await ingredient.save()
    return res.json({ingredient})
        } catch (error) {
    return res.json({ error: error.message })
}
}


const createRecipe = async (req, res) => {
    try {
        recipe = await new Recipe({
            name: req.body.name,
            ingredients: req.body.ingredients,
            instructions: req.body.instructions
        })
        recipe.save()
        return res.json({recipe})
    } catch (err) {
        return res.json({err: err.message})
    }
}

const getAllRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.find()
        return res.json({recipes})
    } catch(err) {
        res.send(err.message)
    }
}

const getRecipeById = async (req, res) => {
    try {
        const { id } = req.params
        const recipe = await Recipe.findById(id)
        if (recipe) {
            return res.json({recipe})
        }
        return res.send('Recipe with the specified ID does not exists')
    } catch (error) {
        return res.send(error.message)
    }
}

const updateRecipe = async (req, res) => {
    try {
        const recipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true})
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
    createIngredient,
    createRecipe,
    getAllRecipes,
    getRecipeById,
    updateRecipe,
    deleteRecipe
}