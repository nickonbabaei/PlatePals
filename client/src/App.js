import logo from './logo.svg';
import './App.css';
import {Route, Routes} from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import CreateRecipe from './pages/CreateRecipe'
import RecipeDetails from './pages/RecipeDetails'
import EditRecipe from './pages/EditRecipe'


function App() {

  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/recipe/create' element={<CreateRecipe />} />
          <Route path='/recipe/details/:recipeID' element={<RecipeDetails />} />
          <Route path='/recipe/edit/:recipeID' element={<EditRecipe />} />
        </Routes>
      </main>
      
    </div>
  );
}

export default App;
