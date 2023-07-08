import React from "react";
import "./Homepage.css";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <>
      <div className="home">
        <div className="presentation">
          <p>Hello, <span className="name">I’m Fabien</span>,</p>a junior full stack
          developer.
          <p className="introduction">
            i create websites using Mongo DB, Express JS,
            react JS and Node JS
          </p>
          <div className="redirections">
            <Link to="mailto:taupinfabien2607@gmail.com" className="button1">
              <div>
                <p>Let's Chat</p>
              </div>
            </Link>
            <Link to="/portfolio" className="button2">
              <div>Portfolio</div>
            </Link>
          </div>
        </div>
        <div className="overlay"></div>
      </div>
    </>
  );
}

export default Homepage;
