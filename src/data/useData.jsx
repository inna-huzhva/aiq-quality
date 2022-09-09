import { useState, useEffect } from "react";

export function useData() {
  const [data, setData] = useState({ status: "loading" });

  useEffect(() => {
    fetch("/api/stations")
      .then((response) => {
        if (!response.ok) {
          setData({ status: "error", error: response.statusText });
        }
        return response.json();
      })
      .then((data) => {
        setData({ status: "success", data });
      });
  }, []);

  return data;
}
