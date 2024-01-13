import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react'

function App() {
  const [recipeFormShown, showRecipeForm] = useState(false);
  const [recipes, setRecipes] = useState([]);

  const submitRecipe = (event) => {
    event.preventDefault();

    const newRecipeName = document.getElementById('newRecipeName').ariaValueMax;
    const newRecipeInstructions = document.getElementById('newRecipeInstructions').value;

    setRecipes([
      ...recipes,
      {
        name: newRecipeName,
        instructions: newRecipeInstructions,
      },
    ]);

    document.getElementById('newRecipeName').value = '';
    document.getElementById('newRecipeInstructions').value = '';
    showRecipeForm(false);
  };

  return (
    <div className="App">
      <h1 className="App-header">My Recipes</h1>
      {recipes.length === 0 ? (
        <p>There are no recipes to list.</p>
      ) : (
        <ul>
          {recipes.map((recipe, index) => (
            <li key={index}>
              <strong>Name:</strong> {recipe.name}, <strong>Instructions:</strong> {recipe.instructions}
            </li>
          ))}
        </ul>
      )}
      {recipeFormShown ? (
        <form id="recipe-form" name="recipe-form" onSubmit={submitRecipe}>
          <label htmlFor="newRecipeName">Recipe Name: </label>
          <input type="text" id="newRecipeName" required />
          <label htmlFor="newRecipeInstructions">Instructions</label>
          <textarea id="newRecipeInstructions" placeholder="Write recipe instructions here..." required />
          <input type="submit" />
        </form>
      ) : (
        <button onClick={() => showRecipeForm(!recipeFormShown)}>Add Recipe</button>
      )}
    </div>
  );
}

export default App;
