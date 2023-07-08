import { useState, useEffect } from "react"
import axios from 'axios'
import RecipeCard from "../components/RecipeCard"

const Home = () => {
    const [food, setFood] = useState([])
    const getRecipes = async () => {
        const response = await axios.get('/api/recipes')
        setFood(response.data)
    }

    useEffect(() => {
        getRecipes()
    }, [])

    return (
        <div className="max-w-screen-2xl mx-auto">
            <h1 className="text-2xl sm:text-4xl sm:py-8 py-4 font-medium">My Recipes</h1>
            <section className="grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 px-4">
                {food.map((rec) => (
                    <RecipeCard
                        key={rec._id}
                        objectid={rec._id}
                        name={rec.name}
                        image={rec.image}
                    />
                ))}
            </section>
        </div>

    )
}

export default Home