import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  const linkStyle = {
    color: "white",
  };

  return (
    <div>
      <nav>
        <h3>Shopping Cart Project</h3>
        <ul className="nav-links">
          <Link to="/" style={linkStyle}>
            <li>Home</li>
          </Link>
          <Link to="/Shopping" style={linkStyle}>
            <li>Shopping</li>
          </Link>
          <Link to="/About" style={linkStyle}>
            <li>About</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
