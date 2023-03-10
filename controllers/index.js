
const Recipe = require('../models/recipe')
require('../models/category')


const createRecipe = async (req, res) => {
    try {
        
        if (!(req.body.image)) {
            req.body.image = `https://react.semantic-ui.com/images/wireframe/square-image.png`
            recipe = await new Recipe({
                name: req.body.name,
                ingredients: req.body.ingredients.split(','),
                instructions: req.body.instructions,
                category: req.body.category,
                image: req.body.image
            })
            recipe.save()
            return res.json(recipe)
        } else {
            recipe = await new Recipe({
                name: req.body.name,
                ingredients: req.body.ingredients.split(','),
                instructions: req.body.instructions,
                category: req.body.category,
                image: req.body.image
            })
            recipe.save()
            return res.json(recipe)
        }
        
        
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
        if (typeof req.body.ingredients === 'string') {
            req.body.ingredients = req.body.ingredients.split(',')
            const recipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, {new: true})
            res.json(recipe)
        } else if ((Array.isArray(req.body.ingredients))) {
            const recipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, {new: true})
            res.json(recipe)
        }
    } catch (error) {
        return res.send(error.message)
    }
}

const deleteRecipe = async (req, res) => {
    try {
        const { id } = req.params;
        await Recipe.findByIdAndDelete(id)
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