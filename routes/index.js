const { Router } = require('express');
const router = Router();
const Controller = require('../controllers/')

router.get('/', (req, res) => res.send('This is root!'))
router.get('/recipes', Controller.getAllRecipes)
router.post('/create-recipe', Controller.createRecipe)
router.get('/read-recipe/:id', Controller.getRecipeById )
router.delete('/delete-recipe/:id', Controller.deleteRecipe)
router.put('/edit-recipe/:id', Controller.updateRecipe)


module.exports = router;