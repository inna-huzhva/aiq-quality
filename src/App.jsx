import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useCities } from "./cities.jsx";
import { useData } from "./data/useData.jsx";
import NavBar from "./navbar/NavBar.jsx";
import Map from "./map/Map.jsx";
import Data from "./data/Data.jsx";
import "./normalize.css"

function NotFound() {
  return <h1>Page Not Found</h1>;
};

function App() {
  const [cityNames, city, selectCity] = useCities();
  const data = useData();

  return (
    <BrowserRouter>
      <NavBar cities={cityNames} city={city.name} selectCity={selectCity} />
      {data.status === "loading" && <h5>Loading...</h5>}
      {data.status === "error" && (
        <h1 style={{ color: "maroon" }}>
          Error happened! {data.error}
        </h1>
      )}
      {data.status === "success" && (
        <Routes>
          <Route path="/" element={<Map city={city} data={data.data} />} />
          <Route path="data" element={<Data data={data.data} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
