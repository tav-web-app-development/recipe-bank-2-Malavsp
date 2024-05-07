import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
function Navbar({ handleRef }) {
  return (
    <>
      <div className="navbar">
        <h1>Recipe App</h1>
        <nav>
          <Link
            to=""
            onClick={handleRef}
            style={{ padding: "2px", border: "2px solid white" }}
          >
            End of Page
          </Link>
          <ul>
            <li>
              <Link to="" className="links">
                Home
              </Link>
            </li>
            <li>
              <Link to="" className="links">
                Recipes
              </Link>
            </li>
            <li>
              <Link to="" className="links">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="links">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/new" className="links">
                Submit
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
