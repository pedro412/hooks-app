import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Navbar
        </Link>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink exact className="nav-link" activeClassName="active" to="/">
              Home
            </NavLink>
            <NavLink
              exact
              className="nav-link"
              activeClassName="active"
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              exact
              className="nav-link"
              activeClassName="active"
              to="/login"
            >
              Login
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};
