import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./navbar/NavBar.jsx";
import Map from "./map/Map.jsx";
import Data from "./data/Data.jsx";
import "./normalize.css"

function NotFound() {
  return <h1>Page Not Found</h1>;
};

const cities = [
  {
    name: "Kyiv",
    center: [50.45466, 30.52380]
  },
  {
    name: "Kremenchuk",
    center: [49.07591, 33.42635]
  },
  {
    name: "Kryvyi Rih",
    center: [47.92183, 33.41223]
  }
];

function App() {
  const [city, setCity] = useState(cities[0]);

  const cityNames = cities.map(c => c.name);
  function selectCity(name) {
    setCity(cities.find(c => c.name === name));
  }

  return (
    <BrowserRouter>
      <NavBar cities={cityNames} city={city.name} selectCity={selectCity} />
      <Routes>
        <Route path="/" element={<Map city={city} />} />
        <Route path="data" element={<Data />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
