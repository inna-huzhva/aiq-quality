import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/">Map</Link>
      <Link to="/data">Data</Link>
      <Link to="/history">History</Link>
      <div className="city-select">
        <select>
          <option>Kyiv</option>
          <option>Kremenchuk</option>
          <option>Kryvyi Rih</option>
        </select>
      </div>
    </nav>
  );
}

export default NavBar;
