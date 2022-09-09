import { useEffect, useState } from "react";

export function useCities() {
  const [data, setData] = useState({ status: "loading" });
  const [city, setCity] = useState(undefined);

  useEffect(() => {
    fetch("/api/cities")
      .then((response) => {
        if (!response.ok) {
          setData({ status: "error", error: response.statusText });
        }
        return response.json();
      })
      .then((data) => {
        setData({ status: "success", data });
        setCity(data.find(c => c.name === "Kyiv") || data[0]);
      });
  }, []);

  const cityNames = data.data?.map(c => c.name);
  function selectCity(name) {
    setCity(data.data.find(c => c.name === name));
  }

  const isLoading = data.status === "loading";

  return [isLoading, data.error, cityNames, city, selectCity];
}
