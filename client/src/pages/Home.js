import { useState, useEffect } from "react"
import axios from 'axios'
import RecipeCard from "../components/RecipeCard"



const Home = () => {
    const [food, setFood] = useState([])
    const getRecipes = async () => {
        const response = await axios.get('http://localhost:3001/api/recipes')
        setFood(response.data)
    }

    useEffect(() => {
        getRecipes()
    }, [])

    return (

        <div className="home-page">
            <header className="home-header">
                <div className="head">
                    <div className="head-container">
                        <div className="head-text">
                            <h1>Plate Pals</h1>
                        </div>
                    </div>
                </div>

            </header>
            <div className="entire-home">
            <h1>Your Recipes</h1>
            <section className="container-grid">
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
        </div>
    )
}

export default Home