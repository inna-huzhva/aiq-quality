import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useCities } from "./useCities.jsx";
import NavBar from "./navbar/NavBar.jsx";
import Map from "./map/Map.jsx";
import Data from "./data/Data.jsx";
import "./normalize.css"

function NotFound() {
  return <h1>Page Not Found</h1>;
};

function App() {
  const [isLoading, error, cityNames, city, selectCity] = useCities();

  return (
    <BrowserRouter>
      {isLoading && <h5>Loading...</h5>}
      {error && (
        <h1 style={{ color: "maroon" }}>
          Error happened when loading cities! {error}
        </h1>
      )}
      {(!isLoading && !error) && (
        <>
          <NavBar cities={cityNames} city={city.name} selectCity={selectCity} />
          <Routes>
            <Route path="/" element={<Map city={city} />} />
            <Route path="data" element={<Data city={city} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </>
      )}
    </BrowserRouter>
  );
}

export default App;
