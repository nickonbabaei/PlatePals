const { Router } = require('express')
const IngredientController = require('../controllers/IngredientController')
const RecipeController = require('../controllers/RecipeController')
const router = Router()

router.get('/', (req, res) => res.send('This is root!'))
