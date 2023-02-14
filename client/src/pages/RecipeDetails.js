import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

const RecipeDetails = () => {
    
    let navigate = useNavigate()

    const [details, setDetails] = useState(null)

    let {recipeID} = useParams()

    const getRecipe = async () => {
        const response = await axios.get(`http://localhost:3001/api/read-recipe/${recipeID}`)
        console.log(response.data)
        setDetails(response.data)
    }

    useEffect(() => {
        getRecipe()
    }, [recipeID])

    const editButton = () => {
        navigate('')
    }

    const deleteButton = () => {
        await axios.delete()
    }


    return details && (
        
        <div className="recipe-details">
        <section className="image-container">
          <div>
            <img src={details.image} alt='' />
          </div>
        </section>
        <section className="details">
          <div className="flex-row space">
            <h3>Name: {details.name}</h3>
            <h3>Category: {details.category.name}</h3>
            <h3>Ingredients: {details.ingredients.map((ing) => ing)}, </h3>
          </div>
          <div>
            <h3>
            Instructions
            </h3>
            {details.instructions}
          </div>
        </section>
        <button className='edit-button' onClick={editButton}> </button>
        <button className='delete-button' onClick={deleteButton}> </button>

       
      </div>
    )
  }
  
  export default RecipeDetails