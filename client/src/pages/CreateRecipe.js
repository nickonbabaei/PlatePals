import { useState } from "react"
import axios from "axios"

const CreateRecipe = () => {
    const initialRecipeState = {
        name: '',
        ingredients: null,
        instructions: '',
        category: '',
        image: ''
    }

    const initialIngredientsState = {
        measurement: '',
        ingredient: ''
    }

    const [recipeState, setRecipeState] = useState(initialRecipeState)
    const [ingredientsState, setIngredientsState] = useState(initialIngredientsState)

    const handleRecipeChange = (evt) => {
        setRecipeState({... recipeState, [evt.target.id] : evt.target.value})
    }

    const handleRecipeSubmit = async (evt) => {
        evt.preventDefault()
        await axios.post('http://localhost:3001/issues', recipeState) // this is where object we created on front end gets sent to backend (server.js)
        setRecipeState(initialRecipeState)
        


    }



    return (
      <div className="create-recipe">
        <form onSubmit={handleRecipeSubmit}>
            <label htmlFor="category">Category:</label>
            <select id="category" onChange={handleRecipeChange} value={recipeState.category}>
                <option value="breakfast">Breakfast</option>                            
                <option value="lunch">Lunch</option>
                <option value="dinner">Dinner</option>
                <option value="snack">Snack</option>
            </select>
            
            <label htmlFor="name">Recipe Name:</label>
            <input 
            type="text" 
            id="name" 
            onChange={handleRecipeChange}
            value={recipeState.name}
            />

            <label htmlFor="instructions">Instructions</label>
            <textarea
            id="instructions"
            cols="30"
            rows="10"
            onChange={handleRecipeChange}
            value={recipeState.instructions}
            ></textarea>

            <button type="submit">Create recipe</button>
        </form>
       
      </div>
    )
  }
  
  export default CreateRecipe