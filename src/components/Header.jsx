import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="flex justify-between items-center h-[80px] container">
        <div>
          <NavLink to="/">Home</NavLink>
        </div>
        <div className="flex items-center gap-3">
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "underline" : "")}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "underline" : "")}
          >
            Contact
          </NavLink>
          <NavLink
            to="/dashboard"
            className={({ isActive }) => (isActive ? "underline" : "")}
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/Login"
            className={({ isActive }) =>
              isActive ? "underline" : "btn btn-accent"
            }
          >
            Login
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Header;
