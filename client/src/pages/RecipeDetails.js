import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

const RecipeDetails = () => {

    let navigate = useNavigate()

    const [details, setDetails] = useState(null)

    let { recipeID } = useParams()

    const getRecipe = async () => {
        const response = await axios.get(`http://localhost:3001/api/read-recipe/${recipeID}`)
        setDetails(response.data)
    }

    useEffect(() => {
        getRecipe()
    }, [recipeID])

    const editButton = () => {
        navigate(`/recipe/edit/${recipeID}`)
    }

    const deleteButton = (evt) => {
        evt.preventDefault()
        const confirmation = window.confirm("You are about to delete this recipe, Click OK to confirm.")
        if (confirmation) {
            axios.delete(`http://localhost:3001/api/delete-recipe/${recipeID}`)
            navigate('/')
        } else {
            return
        }
    }


    return details && (
        <div>
        <header className="home-header">
                <div className="head">
                    <div className="head-container">
                        <div className="head-text">
                            <h1>Plate Pals</h1>
                        </div>
                    </div>
                </div>

            </header>

        <div className='details-card'>
            <div className='image'>
                <img src={details.image} alt='' />
            </div>
            <div className='details-info'>
                <h1>{details.name}</h1>
                <h3>{details.category.name}</h3>
            </div>
            <div className='ingredients'>
                <h2>Ingredients</h2>
                {details.ingredients.map((ing) => 
                <p>{ing}<br/></p>)}
            </div>
        
        </div>
        <div className='instructions'>
            <h2>Instructions</h2>
            <p>{details.instructions}</p>
        </div>
        <button className='edit-button' onClick={editButton}>Edit </button>
        <button className='delete-button' onClick={deleteButton}>Delete </button>
        </div>

    )
}

export default RecipeDetails