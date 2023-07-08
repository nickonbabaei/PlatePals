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
        await axios.post('/api/create-recipe', recipeState)
        setRecipeState(initialRecipeState)
        navigate('/')
    }

    return (
        <div className="max-w-screen-2xl mx-auto">

            <h1 className="text-4xl sm:py-8 py-4 font-medium">Create Recipe</h1>

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
                    <option>Select One (Required)</option>
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
                    placeholder="Required and comma seperated"
                    onChange={handleRecipeChange}
                    value={recipeState.ingredients}
                ></textarea>

                <label htmlFor="instructions">Instructions:</label>
                <textarea
                    id="instructions"
                    cols="30"
                    rows="10"
                    placeholder="Required"
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