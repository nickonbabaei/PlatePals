import { Link } from "react-router-dom"


const RecipeCard = ({ image, name, objectid }) => {

    return (
        <Link to={`/recipe/details/${objectid}`} className='hover:scale-105'>
            <div className="p-4">
                <div class="relative h-[270px] sm:h-[300px]">
                    <img
                        src={image}
                        alt=""
                        class="absolute inset-0 object-cover w-full h-full rounded-t-xl"
                    />
                </div>

                <div class="relative bg-sky-500 py-3 rounded-b-xl">
                    <h3
                        class="sm:text-lg text-sm text-gray-700"
                    >
                        {name}
                    </h3>
                </div>
            </div>
        </Link>

    )
}

export default RecipeCard