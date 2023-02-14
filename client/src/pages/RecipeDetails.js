import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const RecipeDetails = () => {

    const [details, setDetails] = useState(null)

    const getRecipe = async () => {
        const response = await axios.get('http://localhost:3001/api/recipes')
        setDetails(response.data.recipes)
    }

    return (
      <div className="recipe-details">
        

       
      </div>
    )
  }
  
  export default RecipeDetails