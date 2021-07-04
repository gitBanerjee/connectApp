import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import "./Header.module.css";

function Header() {
  return (
    <Fragment>
      <nav>
        <ul>
          <li>
            <NavLink
              activeStyle={{
                fontWeight: "bold",
                color: "red",
              }}
              to="/"
              exact
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              activeStyle={{
                fontWeight: "bold",
                color: "red",
              }}
              to="/stopwatch"
            >
              Stopwatch
            </NavLink>
          </li>
          <li>
            <NavLink
              activeStyle={{
                fontWeight: "bold",
                color: "red",
              }}
              to="/todo"
            >
              Todo
            </NavLink>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
}

export default Header;
