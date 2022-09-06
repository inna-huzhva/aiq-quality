import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./navbar/NavBar.jsx";
import Map from "./map/Map.jsx";
import Data from "./data/Data.jsx";
import "./normalize.css"

function NotFound() {
  return <h1>Page Not Found</h1>;
};

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Map />} />
        <Route path="data" element={<Data />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
