/* eslint-disable no-unused-vars */
import { useEffect, useState, useMemo, useRef } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import RecipeContainer from "./Components/RecipeContainer";
import "./assets/style.css";

function App() {
  const [recipes, setRecipes] = useState([]);

  const filteredRecipes = useMemo(
    () => filterRecipesComputeIntensive(recipes),
    [recipes]
  );

  const end = useRef(null);

  useEffect(() => {
    async function fetchRecipes() {
      const results = await fetch("https://api.sampleapis.com/recipes/recipes");
      const json = await results.json();

      setRecipes(json);
    }

    fetchRecipes();

    return () => console.log("unmounted");
  }, []);

  function filterRecipesComputeIntensive(recipes) {
    const now = performance.now();
    while (performance.now() - now < 8000) {
      //spin()
    }
    // return recipes.filter((word) => word.name.split(" ").length <= 4);
    return recipes;
  }
  // const filteredRecipes = filterRecipesComputeIntensive(recipes);
  function handleRef() {
    end.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  function handleDelete(i) {
    const nextRecipes = [...recipes];
    nextRecipes.splice(i, 1);
    setRecipes(nextRecipes);
  }

  return (
    <>
      <Navbar handleRef={handleRef} />
      {recipes.map((data, index) => (
        <RecipeContainer
          recipe={data}
          key={data.id}
          handleDelete={() => handleDelete(index)}
        />
      ))}
      <Footer reff={end} />
    </>
  );
}

export default App;
