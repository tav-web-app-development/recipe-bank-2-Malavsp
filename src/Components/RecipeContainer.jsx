/*eslint-disable no-unused-vars*/
/* eslint-disable react/prop-types */
import { useState } from "react";

function RecipeContainer({ recipe, handleDelete, updateRecipe, index }) {
  const [tempRecp, setTempRecp] = useState(recipe);
  const [isEdit, setIsEdit] = useState(false);

  function handleEditClick() {
    setIsEdit(!isEdit);
    if (isEdit) {
      updateRecipe(tempRecp, index);
    }
  }

  function handleChange(e, key) {
    const nextRecipe = { ...tempRecp, [key]: e.target.value };
    setTempRecp(nextRecipe);
  }

  return (
    <>
      <div
        className="recipe-container"
        onClick={() => {
          document.title = tempRecp.title;
        }}
      >
        <div className="recipe">
          <h2>{tempRecp.title}</h2>
          <p>
            {isEdit ? (
              <>
                <textarea
                  value={tempRecp.description}
                  rows={4}
                  cols={56}
                  onChange={(e) => handleChange(e, "description")}
                />
              </>
            ) : (
              <>
                <strong>Description:</strong>
                {tempRecp.description ? tempRecp.description : "No description"}
              </>
            )}
          </p>
          <p>
            {isEdit ? (
              <textarea
                value={tempRecp.ingredients}
                rows={16}
                cols={56}
                onChange={(e) => handleChange(e, "ingredients")}
              />
            ) : (
              <>
                <strong>Ingredients:</strong> {tempRecp.ingredients}
              </>
            )}
          </p>
          <p>
            {isEdit ? (
              <textarea
                value={tempRecp.directions}
                rows={16}
                cols={56}
                onChange={(e) => handleChange(e, "directions")}
              />
            ) : (
              <>
                <strong>Directions:</strong> {tempRecp.directions}
              </>
            )}
          </p>
          <img
            src={tempRecp.photoUrl}
            alt={tempRecp.title}
            width={300}
            height={300}
          />
          <br />
          <button onClick={handleEditClick}>{isEdit ? "Save" : "Edit"}</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </>
  );
}

export default RecipeContainer;
