const db = require('../db')
const Recipe = require('../models/recipe')
const Ingredient = require('../models/ingredient')



db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {

    const ingredients = [
        {
        measurement: '2 slices',
        name: 'white bread'
        },
        {
        measurement: '2 slices',
        name: 'cheddar cheese'
        },
        {
        measurement: '1 tbs',
        name: 'butter'
        }

    ]
    await Ingredient.insertMany(ingredients)  
    const ingredientList = await Ingredient.find()


    const recipe = await new Recipe({
        name: 'Grilled Cheese',
        ingredients: ingredientList.map((ing) => ing._id),
        instructions: 'Heat a non-stick pan over medium heat. Place one tablespoon of butter in the pan and let it melt. Place one slice of bread in the pan, then add cheese on top of it. Place the other slice of bread on top of the cheese. Cook the sandwich for 2-3 minutes on each side, or until the bread is golden brown and the cheese is melted. Serve hot and enjoy',
        image: 'https://images.eatthismuch.com/img/906648_tabitharwheeler_f6aeb0f2-6c5f-4b67-8dcd-c3310e266ae4.jpg'
    })
    recipe.save()
}

const run = async () => {
    await main()
    

}


run()