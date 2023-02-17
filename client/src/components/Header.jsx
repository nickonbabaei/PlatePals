import { Link } from "react-router-dom"

const Header = () => {

  return (
    <header className="main-header">
    <nav>
        <h3>
        <Link to={'/'}>Your Recipes</Link>
        <Link to={'/recipe/create'}>Create Recipe</Link>
        <Link to={'/about'}>About</Link>
        </h3>
    </nav>
    </header>
  )
}

export default Header