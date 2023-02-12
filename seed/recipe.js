const db = require('../db')
const Recipe = require('../models/recipe')
const Ingredient = require('../models/ingredient')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const ingredient1 = await new Ingredient({
        measurement: '2 slices',
        name: 'white bread'
    })
    ingredient1.save()

    const ingredient2 = await new Ingredient({
        measurement: '2 slices',
        name: 'cheddar cheese'
    })
    ingredient2.save()

    const ingredient3 = await new Ingredient({
        measurement: '1 tbs',
        name: 'butter'
    })
    ingredient3.save()

    const recipe = await new Recipe({
        name: 'Grilled Cheese',
        ingredients: [ingredient1._id, ingredient2._id, ingredient3._id],
        instructions: 'Heat a non-stick pan over medium heat. Place one tablespoon of butter in the pan and let it melt. Place one slice of bread in the pan, then add cheese on top of it. Place the other slice of bread on top of the cheese. Cook the sandwich for 2-3 minutes on each side, or until the bread is golden brown and the cheese is melted. Serve hot and enjoy',
        image: 'https://images.eatthismuch.com/img/906648_tabitharwheeler_f6aeb0f2-6c5f-4b67-8dcd-c3310e266ae4.jpg'
    })
    recipe.save()

    console.log('succesfully logged');
}

const run = async () => {
    await main()
    // db.close()
}
    
run()
    
 