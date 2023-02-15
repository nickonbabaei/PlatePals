const db = require('../db')
const Recipe = require('../models/recipe')
const Category = require('../models/category')



db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    // const breakfast = await new Category({
    //     name: 'Breakfast'
    // })
    // breakfast.save()

    // const lunch = await new Category({
    //     name: 'Lunch'
    // })
    // lunch.save()

    // const dinner = await new Category({
    //     name: 'Dinner'
    // })
    // dinner.save()

    const snack = await new Category({
        name: 'Snack'
    })
    snack.save()

    
    const recipe1 = await new Recipe({
        name: 'Grilled Cheese',
        category: snack._id,
        ingredients: ['2 slices cheddar cheese', '2 slices of toast', '1 tsp of butter'],
        instructions: 'Heat a non-stick pan over medium heat. Place one tablespoon of butter in the pan and let it melt. Place one slice of bread in the pan, then add cheese on top of it. Place the other slice of bread on top of the cheese. Cook the sandwich for 2-3 minutes on each side, or until the bread is golden brown and the cheese is melted. Serve hot and enjoy',
        image: 'https://images.eatthismuch.com/img/906648_tabitharwheeler_f6aeb0f2-6c5f-4b67-8dcd-c3310e266ae4.jpg'
    })
    recipe1.save()
    const recipe2 = await new Recipe({
        name: 'Grilled Cheese',
        category: snack._id,
        ingredients: ['2 slices cheddar cheese', '2 slices of toast', '1 tsp of butter'],
        instructions: 'Heat a non-stick pan over medium heat. Place one tablespoon of butter in the pan and let it melt. Place one slice of bread in the pan, then add cheese on top of it. Place the other slice of bread on top of the cheese. Cook the sandwich for 2-3 minutes on each side, or until the bread is golden brown and the cheese is melted. Serve hot and enjoy',
        image: 'https://images.eatthismuch.com/img/906648_tabitharwheeler_f6aeb0f2-6c5f-4b67-8dcd-c3310e266ae4.jpg'
    })
    recipe2.save()
    const recipe3 = await new Recipe({
        name: 'Grilled Cheese',
        category: snack._id,
        ingredients: ['2 slices cheddar cheese', '2 slices of toast', '1 tsp of butter'],
        instructions: 'Heat a non-stick pan over medium heat. Place one tablespoon of butter in the pan and let it melt. Place one slice of bread in the pan, then add cheese on top of it. Place the other slice of bread on top of the cheese. Cook the sandwich for 2-3 minutes on each side, or until the bread is golden brown and the cheese is melted. Serve hot and enjoy',
        image: 'https://images.eatthismuch.com/img/906648_tabitharwheeler_f6aeb0f2-6c5f-4b67-8dcd-c3310e266ae4.jpg'
    })
    recipe3.save()
    const recipe4 = await new Recipe({
        name: 'Grilled Cheese',
        category: snack._id,
        ingredients: ['2 slices cheddar cheese', '2 slices of toast', '1 tsp of butter'],
        instructions: 'Heat a non-stick pan over medium heat. Place one tablespoon of butter in the pan and let it melt. Place one slice of bread in the pan, then add cheese on top of it. Place the other slice of bread on top of the cheese. Cook the sandwich for 2-3 minutes on each side, or until the bread is golden brown and the cheese is melted. Serve hot and enjoy',
        image: 'https://images.eatthismuch.com/img/906648_tabitharwheeler_f6aeb0f2-6c5f-4b67-8dcd-c3310e266ae4.jpg'
    })
    recipe4.save()
    const recipe5 = await new Recipe({
        name: 'Grilled Cheese',
        category: snack._id,
        ingredients: ['2 slices cheddar cheese', '2 slices of toast', '1 tsp of butter'],
        instructions: 'Heat a non-stick pan over medium heat. Place one tablespoon of butter in the pan and let it melt. Place one slice of bread in the pan, then add cheese on top of it. Place the other slice of bread on top of the cheese. Cook the sandwich for 2-3 minutes on each side, or until the bread is golden brown and the cheese is melted. Serve hot and enjoy',
        image: 'https://images.eatthismuch.com/img/906648_tabitharwheeler_f6aeb0f2-6c5f-4b67-8dcd-c3310e266ae4.jpg'
    })
    recipe5.save()
    const recipe6 = await new Recipe({
        name: 'Grilled Cheese',
        category: snack._id,
        ingredients: ['2 slices cheddar cheese', '2 slices of toast', '1 tsp of butter'],
        instructions: 'Heat a non-stick pan over medium heat. Place one tablespoon of butter in the pan and let it melt. Place one slice of bread in the pan, then add cheese on top of it. Place the other slice of bread on top of the cheese. Cook the sandwich for 2-3 minutes on each side, or until the bread is golden brown and the cheese is melted. Serve hot and enjoy',
        image: 'https://images.eatthismuch.com/img/906648_tabitharwheeler_f6aeb0f2-6c5f-4b67-8dcd-c3310e266ae4.jpg'
    })
    recipe6.save()
    const recipe7 = await new Recipe({
        name: 'Grilled Cheese',
        category: snack._id,
        ingredients: ['2 slices cheddar cheese', '2 slices of toast', '1 tsp of butter'],
        instructions: 'Heat a non-stick pan over medium heat. Place one tablespoon of butter in the pan and let it melt. Place one slice of bread in the pan, then add cheese on top of it. Place the other slice of bread on top of the cheese. Cook the sandwich for 2-3 minutes on each side, or until the bread is golden brown and the cheese is melted. Serve hot and enjoy',
        image: 'https://images.eatthismuch.com/img/906648_tabitharwheeler_f6aeb0f2-6c5f-4b67-8dcd-c3310e266ae4.jpg'
    })
    recipe7.save()
    const recipe8 = await new Recipe({
        name: 'Grilled Cheese',
        category: snack._id,
        ingredients: ['2 slices cheddar cheese', '2 slices of toast', '1 tsp of butter'],
        instructions: 'Heat a non-stick pan over medium heat. Place one tablespoon of butter in the pan and let it melt. Place one slice of bread in the pan, then add cheese on top of it. Place the other slice of bread on top of the cheese. Cook the sandwich for 2-3 minutes on each side, or until the bread is golden brown and the cheese is melted. Serve hot and enjoy',
        image: 'https://images.eatthismuch.com/img/906648_tabitharwheeler_f6aeb0f2-6c5f-4b67-8dcd-c3310e266ae4.jpg'
    })
    recipe8.save()
    const recipe9 = await new Recipe({
        name: 'Grilled Cheese',
        category: snack._id,
        ingredients: ['2 slices cheddar cheese', '2 slices of toast', '1 tsp of butter'],
        instructions: 'Heat a non-stick pan over medium heat. Place one tablespoon of butter in the pan and let it melt. Place one slice of bread in the pan, then add cheese on top of it. Place the other slice of bread on top of the cheese. Cook the sandwich for 2-3 minutes on each side, or until the bread is golden brown and the cheese is melted. Serve hot and enjoy',
        image: 'https://images.eatthismuch.com/img/906648_tabitharwheeler_f6aeb0f2-6c5f-4b67-8dcd-c3310e266ae4.jpg'
    })
    recipe9.save()
    const recipe10 = await new Recipe({
        name: 'Grilled Cheese',
        category: snack._id,
        ingredients: ['2 slices cheddar cheese', '2 slices of toast', '1 tsp of butter'],
        instructions: 'Heat a non-stick pan over medium heat. Place one tablespoon of butter in the pan and let it melt. Place one slice of bread in the pan, then add cheese on top of it. Place the other slice of bread on top of the cheese. Cook the sandwich for 2-3 minutes on each side, or until the bread is golden brown and the cheese is melted. Serve hot and enjoy',
        image: 'https://images.eatthismuch.com/img/906648_tabitharwheeler_f6aeb0f2-6c5f-4b67-8dcd-c3310e266ae4.jpg'
    })
    recipe10.save()

    
    
}

const run = async () => {
    await main()
    

}


run()