import { useState, useEffect } from "react"
import axios from 'axios'


const Home = () => {
    const [recipes, setRecipes] = useState([])
    const getRecipes = async () => {
        try {
            let res = await axios.get('http://localhost:3001/api/recipes')
            setRecipes(res.data.recipes)
            
        } catch (err) {
            console.log(err);
        }
        
    }

    useEffect(() => {
        getRecipes()
    }, [])

    return recipes && (

      <div className="home-page">
        {console.log(recipes.recipes)}
        {/* <h1>Recipes</h1>
        {recipes.map((rec) => (
            <div key={rec._id}>
                <h3>name: {rec.name}</h3>


            </div> 

        ))} */}
        
       
      </div>
    )
  }
  
  export default Home