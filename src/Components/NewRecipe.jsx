// import React from "react";

import { useNavigate } from "react-router-dom";

const NewRecipe = () => {
  let navigate = useNavigate();
  return (
    <form onSubmit={() => navigate("..")}>
      <div>
        <label htmlFor="title">Enter title here : </label>
        <input type="text" id="title" />
      </div>
      <div>
        <label htmlFor="description">Enter description here : </label>
        <input type="text" id="description" />
      </div>
      <div>
        <label htmlFor="ingredients">Enter ingredients here :</label>
        <textarea type="text" id="ingredients" rows={1} cols={36} />
      </div>
      <div>
        <label htmlFor="directions">Enter directions here :</label>
        <textarea type="text" id="directions" rows={1} cols={36} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default NewRecipe;
