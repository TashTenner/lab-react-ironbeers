import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const navbar = () => {
  return (
    <nav className="nav-style">
      <ul>
        <li>
          <NavLink to="/" className="nav-style-line">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/beers" className="nav-style-line">
            Beers
          </NavLink>
        </li>
        <li>
          <NavLink to="/random-beer" className="nav-style-line">
            Random Beer
          </NavLink>
        </li>
        <li>
          <NavLink to="/new-beer" className="nav-style-line">
            New Beer
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default navbar;
