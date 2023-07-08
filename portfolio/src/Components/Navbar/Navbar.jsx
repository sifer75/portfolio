import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="menuHeader centering2">
        <div className="logo displaying2">Taupin Fabien</div>
        <div className="menuButton">
        <ul className="menu">
          <li>
            <Link to="/" className="lien">
              <p>Home</p>
            </Link>
          </li>
          <li>
            <Link to="/portfolio" className="lien">
              <p>Portfolio</p>
            </Link>
          </li>
        </ul>
        <div className="button displaying2">get in touch</div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
