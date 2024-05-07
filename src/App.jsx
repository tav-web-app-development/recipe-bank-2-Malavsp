/* eslint-disable no-unused-vars */
import { useEffect, useState, useMemo, useRef } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import "./assets/style.css";
import { LevelContext } from "./context/LevelContext";

function App() {
  const [recipes, setRecipes] = useState([]);

  const filteredRecipes = useMemo(
    () => filterRecipesComputeIntensive(recipes),
    [recipes]
  );

  const footerElement = useRef(null);

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
    footerElement.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  function handleDelete(i) {
    const nextRecipes = [...recipes];
    nextRecipes.splice(i, 1);
    setRecipes(nextRecipes);
  }

  function updateRecipe(tempRecipe, i) {
    console.log(tempRecipe);
    const changedRecipe = [...recipes];
    changedRecipe[i] = tempRecipe;
    setRecipes(changedRecipe);
  }
  return (
    <>
      <Navbar handleRef={handleRef} />
      <LevelContext.Provider value={{ recipes, handleDelete, updateRecipe }}>
        <Outlet />
      </LevelContext.Provider>
      <Footer footerElement={footerElement} />
    </>
  );
}

export default App;
