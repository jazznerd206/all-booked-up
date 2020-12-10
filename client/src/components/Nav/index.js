import React from "react";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar-center navbar-expand-lg">
      <a className="navbar-brand title" href="/">
        <p>Netboox</p>
      </a>
      <a className="navbar-brand" href="/search">
        <p>Search</p>
      </a>
      <a className="navbar-brand" href="/saved">
        <p>Saved</p>
      </a>
    </nav>
  );
}

export default Nav;
