const Ingredient = require('../models/ingredient')

const createIngredient = async (req, res) => {
    try {
        const ingredient = await new Ingredient(req.body)
        await ingredient.save()
        return res.json({plant})
    } catch (err) {
        return res.json({err: err.message})
    }
}

const getAllIngredients = async (req, res) => {
    try {
        const ingredients = await Ingredient.find()
        return res.json({ingredients})
    } catch(err) {
        res.send(err.message)
    }
}

const getIngredientById = async (req, res) => {
    try {
        const { id } = req.params
        const ingredient = await Ingredient.findById(id)
        if (ingredient) {
            return res.json({ingredient})
        }
        return res.send('Plant with the specified ID does not exists')
    } catch (error) {
        return res.send(error.message)
    }
}

const updateIngredient = async (req, res) => {
    try {
        const ingredient = await Ingredient.findByIdAndUpdate(req.params.id, req.body, { new: true})
        res.json(ingredient)
    } catch (error) {
        return res.send(error.message)
    }
}

const deleteIngredient = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Ingredient.findByIdAndDelete(id)
        if (deleted) {
            return res.send("Ingredient deleted")
        }
        throw new Error("Ingredient not found")
    } catch (error) {
        return res.send(error.message)
    }
}


module.exports = {
    createIngredient,
    getAllIngredients,
    getIngredientById,
    updateIngredient,
    deleteIngredient
}