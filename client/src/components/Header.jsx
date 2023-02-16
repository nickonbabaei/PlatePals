import { Link } from "react-router-dom"

const Header = () => {

  return (
    <header>
    <nav>
        <h3>
        <Link to={'/'}>Home</Link>
        <Link to={'/recipe/create'}>Create Recipe</Link>
        <Link to={'/about'}>About</Link>
        </h3>
    </nav>
    </header>
  )
}

export default Header