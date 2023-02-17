const db = require('../db')
const Recipe = require('../models/recipe')
const Category = require('../models/category')



db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const breakfast = await new Category({
        name: 'Breakfast'
    })
    breakfast.save()

    const lunch = await new Category({
        name: 'Lunch'
    })
    lunch.save()

    const dinner = await new Category({
        name: 'Dinner'
    })
    dinner.save()

    const snack = await new Category({
        name: 'Snack'
    })
    snack.save()

    
    const recipe1 = await new Recipe({
        name: 'Grilled Cheese',
        category: snack._id,
        ingredients: ['2 slices cheddar cheese', '2 slices toast', '1 tsp butter'],
        instructions: 'Heat a non-stick pan over medium heat. Place one tablespoon of butter in the pan and let it melt. Place one slice of bread in the pan, then add cheese on top of it. Place the other slice of bread on top of the cheese. Cook the sandwich for 2-3 minutes on each side, or until the bread is golden brown and the cheese is melted. Serve hot and enjoy',
        image: 'https://images.eatthismuch.com/img/906648_tabitharwheeler_f6aeb0f2-6c5f-4b67-8dcd-c3310e266ae4.jpg'
    })
    recipe1.save()
    const recipe2 = await new Recipe({
        name: 'One Pan Chicken Fajitas',
        category: dinner._id,
        ingredients: ['6oz raw chicken breast', '1 red pepper', '1 green pepper', '1 tsp olive oil', '1 tsp fajita seasoning', 'salt and pepper'],
        instructions: 'This one-pan meal is quick and easy to prepare. Slice chicken and bell peppers into strips and place them on a baking sheet. Drizzle with olive oil and season with salt, pepper, and fajita seasoning. Bake at 400°F for 20-25 minutes, or until the chicken is cooked through and the peppers are tender.',
        image: 'https://media.istockphoto.com/id/1266334787/photo/fajitas-de-pollo-chicken-marinated-tortillas-with-onions-and-peppers.jpg?s=612x612&w=0&k=20&c=62rRkNAcwAC5hVhOByXpmHqIprKI--w8WGanUNFR6-c='
    })
    recipe2.save()
    const recipe3 = await new Recipe({
        name: 'Avocado Toast',
        category: breakfast._id,
        ingredients: ['1/2 avocado', '1 slice toast', '1 tsp red chili flakes', 'salt and pepper'],
        instructions: 'This breakfast or snack is healthy, tasty, and easy to make. Toast bread and spread mashed avocado on top. Season with salt, pepper, and red pepper flakes. You can also add toppings like sliced tomato, feta cheese, or a fried egg.',
        image: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2Fimage%2F2018%2F07%2Fmain%2F1807w-avocado-toast-recipe.jpg%3Fitok%3D_dDi7ZQQ'
    })
    recipe3.save()
    const recipe4 = await new Recipe({
        name: 'Caprese Salad',
        category: snack._id,
        ingredients: ['1 tomato', '100g mozzarella cheese', '1 tsp olive oil', '1 tsp balsamic vineger', '4 fresh basil leaves', 'salt and pepper'],
        instructions: 'This refreshing and simple salad is perfect for summer. Slice tomatoes and fresh mozzarella cheese, and arrange them on a plate. Drizzle with olive oil and balsamic vinegar, and top with fresh basil leaves. Season with salt and pepper to taste.',
        image: 'https://www.thespruceeats.com/thmb/2pjgFA7_nbZtlXr68BECvf6fO48=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/caprese-salad-tomato-salad-2217097-hero-03-75a0b89b30aa4a52b10fe4fdd9abfeb5.jpg'
    })
    recipe4.save()



    
    
}

const run = async () => {
    await main()
    

}


run()