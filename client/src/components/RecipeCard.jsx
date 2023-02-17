import { Link } from "react-router-dom"


const RecipeCard = ({ image, name, objectid, category }) => {

    return (
        <Link to={`/recipe/details/${objectid}`}>
            <div className="card">
                <div className="img-wrapper">
                    <img src={image} alt={image} />
                </div>
                <div className="info-wrapper flex-col">
                    <h3>{name}</h3>
                </div>
            </div>
        </Link>

    )
}

export default RecipeCard