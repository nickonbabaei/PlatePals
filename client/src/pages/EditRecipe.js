import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"

const EditRecipe = () => {
    let {recipeID} = useParams()
    let navigate = useNavigate()

    // const [recipeState, setRecipeState] = useState(editRecipeState)
    const [recievedRecipe, setRecipe] = useState(null)

    const getRecipe = async () => {
      const response = await axios.get(`http://localhost:3001/api/read-recipe/${recipeID}`)
      setRecipe(response.data)
    }

    useEffect(() => {
      getRecipe()
    }, [recipeID])

    // const editRecipeState = {
    //     name: '',
    //     ingredients: '',
    //     instructions: '',
    //     category: '',
    //     image: ''
    // }

    const handleRecipeChange = (evt) => {
        setRecipe({... recievedRecipe, [evt.target.id] : evt.target.value})
    }

    const handleRecipeSubmit = async (evt) => {
        evt.preventDefault()
        await axios.post('http://localhost:3001/api/edit-recipe', recipeState) 
        // setRecipeState(editRecipeState)
        navigate('/')
    }

    return (
      <div className="edit-recipe">
        <form onSubmit={handleRecipeSubmit}>
            
            <label htmlFor="name">Recipe Name:</label>
            <input 
            type="text" 
            id="name" 
            onChange={handleRecipeChange}
            value={recievedRecipe.name}
            />

            <label htmlFor="category">Category:</label>
            <select id="category" onChange={handleRecipeChange} value={recievedRecipe.category}>
                <option value="63ebc0f1f3f976863fd609f4">Breakfast</option>                            
                <option value="63ebc0f1f3f976863fd609f5">Lunch</option>
                <option value="63ebc0f1f3f976863fd609f6">Dinner</option>
                <option value="63ebc0f1f3f976863fd609f7">Snack</option>
            </select>

            <label htmlFor="ingredients">Ingredients Seperated by Commas:</label>
            <textarea
            id="ingredients"
            cols="30"
            rows="10"
            onChange={handleRecipeChange}
            value={recievedRecipe.ingredients}
            ></textarea>

            <label htmlFor="instructions">Instructions:</label>
            <textarea
            id="instructions"
            cols="30"
            rows="10"
            onChange={handleRecipeChange}
            value={recievedRecipe.instructions}
            ></textarea>

            <button type="submit">Edit Recipe</button>
        </form>
       
      </div>
    )
  }
  
  export default CreateRecipe