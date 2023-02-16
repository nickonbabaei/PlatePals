import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const CreateRecipe = () => {
    let navigate = useNavigate()

    const initialRecipeState = {
        name: '',
        ingredients: '',
        instructions: '',
        category: '',
        image: ''
    }

    const [recipeState, setRecipeState] = useState(initialRecipeState)

    const handleRecipeChange = (evt) => {
        setRecipeState({ ...recipeState, [evt.target.id]: evt.target.value })
    }

    const handleRecipeSubmit = async (evt) => {
        evt.preventDefault()
        await axios.post('http://localhost:3001/api/create-recipe', recipeState)
        setRecipeState(initialRecipeState)
        navigate('/')
    }

    return (
        <div className="create-recipe">
            <form onSubmit={handleRecipeSubmit}>

                <label htmlFor="name">Recipe Name:</label>
                <input
                    type="text"
                    id="name"
                    placeholder="Required"
                    onChange={handleRecipeChange}
                    value={recipeState.name}
                />

                <label htmlFor="category">Category:</label>
                <select id="category" onChange={handleRecipeChange} value={recipeState.category}>
                    <option disabled>Select One (required):</option>
                    <option value="63ebc0f1f3f976863fd609f4">Breakfast</option>
                    <option value="63ebc0f1f3f976863fd609f5">Lunch</option>
                    <option value="63ebc0f1f3f976863fd609f6">Dinner</option>
                    <option value="63ebc0f1f3f976863fd609f7">Snack</option>
                </select>

                <label htmlFor="ingredients">Ingredients:</label>
                <textarea
                    id="ingredients"
                    cols="30"
                    rows="10"
                    placeholder="Comma Seperated"
                    onChange={handleRecipeChange}
                    value={recipeState.ingredients}
                ></textarea>

                <label htmlFor="instructions">Instructions:</label>
                <textarea
                    id="instructions"
                    cols="30"
                    rows="10"
                    onChange={handleRecipeChange}
                    value={recipeState.instructions}
                ></textarea>

                <label htmlFor="image">Image URL:</label>
                <input
                    type="text"
                    id="image"
                    placeholder="Not Required"
                    onChange={handleRecipeChange}
                    value={recipeState.image}
                />

                <button type="submit">Create Recipe</button>
            </form>

        </div>
    )
}

export default CreateRecipe