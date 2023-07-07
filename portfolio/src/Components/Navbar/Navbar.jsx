import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="menuHeader">
        <div className="logo">Taupin Fabien</div>
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
        <div className="button">get in touch</div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
