import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar m-3">
      <Link to="/">
        <span className="navbar-brand mb-0 h1">Contact List</span>
      </Link>
    </nav>
  );
};


