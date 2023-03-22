import React, { useState } from "react";

interface Props {
  onAddIngredient: (ingredient: string) => void;
}

const AddIngredients: React.FC<Props> = ({ onAddIngredient }) => {
  const [ingredient, setIngredient] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (ingredient.trim()) {
      onAddIngredient(ingredient.trim());
      setIngredient("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Zutat hinzufügen"
        value={ingredient}
        onChange={(e) => setIngredient(e.target.value)}
      />
      <button type="submit">Hinzufügen</button>
    </form>
  );
};

export default AddIngredients;
