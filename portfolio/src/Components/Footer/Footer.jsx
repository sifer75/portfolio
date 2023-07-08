import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="description">
        <p className="textFooter displaying">Taupin Fabien</p>
      </div>
      <div className="direction">
        <div>
          <p className="textFooter">Let's Connect</p>
        </div>
        <div className="menuFooter">
          <Link to="mailto:taupinfabien2607@gmail.com" className="buttonFooter">
            <div className="gmail"></div>
          </Link>

          <Link
            to="https://fr.linkedin.com/in/fabien-taupin"
            className="buttonFooter"
          >
            <div className="linkedin"></div>
          </Link>

          <Link to="/cv" className="buttonFooter">
            <div className="cv"></div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
