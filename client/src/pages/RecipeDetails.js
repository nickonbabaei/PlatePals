import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const RecipeDetails = () => {

    const [details, setDetails] = useState(null)

    let {recipeID} = useParams()

    const getRecipe = async () => {
        const response = await axios.get(`http://localhost:3001/api/read-recipe/${recipeID}`)
        setDetails(response.data.recipe)
    }

    useEffect(() => {
        getRecipe()
    }, [recipeID])


    return (
      <div className="recipe-details">
        {console.log(details)}
        
        

       
      </div>
    )
  }
  
  export default RecipeDetails