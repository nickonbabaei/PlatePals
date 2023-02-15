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

      <div className="home-page">
        
        <h1>Recipes</h1>
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
    )
  }
  
  export default Home