import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Contact from "./Components/Contact";
import RecipeCard from "./Components/RecipeCard";
import App from "./App";
import NewRecipe from "./Components/NewRecipe";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/new",
        element: <NewRecipe />,
      },
      {
        index: true,
        // path: "/new",
        element: <RecipeCard />,
      },
    ],
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
