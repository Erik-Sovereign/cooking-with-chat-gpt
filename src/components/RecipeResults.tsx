import React from "react";

interface Recipe {
  title: string;
  instructions: string;
}

interface Props {
  recipes: string;
}

const RecipeResults: React.FC<Props> = ({ recipes }) => {
  let newRecipes = recipes.replaceAll("\\n", "<br />");
  newRecipes = newRecipes.replaceAll('"', "");

  return (
    <div>
      <p dangerouslySetInnerHTML={{ __html: newRecipes }}></p>
    </div>
  );
};

export default RecipeResults;
