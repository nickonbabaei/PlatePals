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

    const deleteButton = async (evt) => {
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

        <div className='details-card'>
            <div className='image'>
                <img src={details.image} alt='' />
            </div>
            <div className='details-info'>
                <h1>{details.name}</h1>
                <h4>{details.category.name}</h4>
            </div>
            <div className='ingredients'>
                <h2>Ingredients</h2>
                {details.ingredients.map((ing) => 
                <p>{ing}<br/></p>)}
                
            </div>
            <button className='edit-button' onClick={editButton}>Edit </button>
            <button className='delete-button' onClick={deleteButton}>Delete </button>

           
        </div>



        //     <section className="details">
        //       <div className="flex-row space">
        //         <h3>Name: {details.name}</h3>
        //         <h3>Category: {details.category.name}</h3>
        //         <h3>Ingredients: {details.ingredients.map((ing) => ing)} </h3>
        //       </div>
        //       <div>
        //         <h3>
        //         Instructions
        //         </h3>
        //         {details.instructions}
        //       </div>
        //     </section>
          


        //   </main>
    )
}

export default RecipeDetails