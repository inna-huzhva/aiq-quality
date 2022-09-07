import { useState } from "react";

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

export function useCities() {
  const [city, setCity] = useState(cities[0]);

  const cityNames = cities.map(c => c.name);
  function selectCity(name) {
    setCity(cities.find(c => c.name === name));
  }

  return [cityNames, city, selectCity];
}
