const { Router } = require('express');
const router = Router();
const Controller = require('../controllers/')

router.get('/', (req, res) => res.send('This is root!'))
router.get('/recipes', Controller.getAllRecipes)
router.post('/create-recipe', Controller.createRecipe)
router.post('/create-ingredient', Controller.createRecipe)

module.exports = router;