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
            <header className="home-header">
                <div className="head">
                    <div className="head-container">
                        <div className="head-text">
                            <h1 className="text-8xl">Plate Pals</h1>
                        </div>
                    </div>
                </div>
            </header>
            <h1 className="text-4xl py-8 font-medium">Your Recipes</h1>
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