import AddIngredients from "@/src/components/AddIngredients";
import RecipeResults from "@/src/components/RecipeResults";
import type { NextPage } from "next";
import { useState } from "react";

interface Recipe {
  title: string;
  instructions: string;
}

const Home: NextPage = () => {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [recipes, setRecipes] = useState<string>("");

  const handleAddIngredient = (ingredient: string) => {
    setIngredients((prevIngredients) => [...prevIngredients, ingredient]);
  };

  const handleFetchRecipes = async () => {
    const recipeText = await fetch("/api/chatGptApi", {
      body: JSON.stringify({ ingredients }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    }).then((res) => res.text());

    setRecipes(recipeText);
  };

  return (
    <div>
      <h1>Rezeptfinder</h1>
      <AddIngredients onAddIngredient={handleAddIngredient} />
      <button onClick={handleFetchRecipes}>Rezepte finden</button>
      <div>
        <h2>Zutaten:</h2>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
      <RecipeResults recipes={recipes} />
    </div>
  );
};

export default Home;
