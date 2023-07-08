import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

const RecipeDetails = () => {

    let navigate = useNavigate()

    const [details, setDetails] = useState(null)

    let { recipeID } = useParams()

    const getRecipe = async () => {
        const response = await axios.get(`/api/read-recipe/${recipeID}`)
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
            axios.delete(`/api/delete-recipe/${recipeID}`)
            navigate('/')
        } else {
            return
        }
    }

    return details && (

        <div className='mx-auto flex flex-col max-w-screen-sm min-h-screen'>
            <h1 className='text-4xl sm:pt-8 pt-4 font-medium'>{details.name}</h1>
            <h3 className='font-medium text-sm pt-1'>{details.category?.name}</h3>
            <img src={details.image} className='border-0 rounded-xl mt-6 cover mx-6' />
            <div className='flex flex-col'>
                <div className='bg-sky-400 mx-12 sm:mx-0 rounded-xl my-6'>
                    <h2 className='font-semibold underline py-1'>Ingredients</h2>
                    {details?.ingredients.map((ing) =>
                        <p>-{ing}<br /></p>)}
                </div>

                <div className='bg-sky-400 mx-12 sm:mx-0 rounded-xl px-4'>
                    <h2 className='font-semibold underline py-1'>Instructions</h2>
                    <p className='pb-1'>{details?.instructions}</p>
                </div>
                <div className='flex justify-center gap-8 py-4'>
                    <button className='border-0 rounded-xl bg-sky-400 px-2 py-1 text-xl hover:scale-105' onClick={editButton}>Edit </button>
                    <button className='border-0 rounded-xl bg-sky-400 px-2 py-1 text-xl hover:scale-105' onClick={deleteButton}>Delete </button>
                </div>
            </div>
        </div>

    )
}

export default RecipeDetails