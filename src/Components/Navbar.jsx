/* eslint-disable react/prop-types */
function Navbar({ handleRef }) {
  return (
    <>
      <div className="navbar">
        <h1>Recipe App</h1>
        <nav>
          <a
            onClick={handleRef}
            style={{ padding: "2px", border: "2px solid white" }}
          >
            End of Page
          </a>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Recipes</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
