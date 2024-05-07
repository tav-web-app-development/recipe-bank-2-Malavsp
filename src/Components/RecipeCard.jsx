// import React from "react";
import { useContext } from "react";
import RecipeContainer from "./RecipeContainer";
import { LevelContext } from "../context/LevelContext";

const RecipeCard = () => {
  const value = useContext(LevelContext);
  const recipesJsx = value.recipes.map((data, index) => (
    <RecipeContainer
      recipe={data}
      key={data.id}
      index={index}
      handleDelete={value.handleDelete}
      updateRecipe={value.updateRecipe}
    />
  ));

  return recipesJsx;
};

export default RecipeCard;
