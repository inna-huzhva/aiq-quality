import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

function NavBar({ cities, city, selectCity }) {
  function handleSelect(e) {
    selectCity(e.target.value);
  }
  return (
    <nav className="navbar">
      <Link to="/">Map</Link>
      <Link to="/data">Data</Link>
      <div className="city-select">
        <select value={city} onChange={handleSelect}>
          {cities.map(c => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>
    </nav>
  );
}

export default NavBar;
