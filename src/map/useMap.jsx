import { useState, useEffect } from "react";

export function useMap() {
  const [data, setData] = useState({ status: "loading" });

  useEffect(() => {
    fetch("/api/latest_aqi")
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
