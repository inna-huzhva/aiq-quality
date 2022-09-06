import React, { useState, useEffect } from "react";
import "./data.css";

function findPol(pollutants, code) {
  return pollutants.find(p => p.pol === code)?.value;
}

function Data() {
  const [data, setData] = useState({ status: "loading" });

  useEffect(() => {
    fetch("/data.json")
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

  return (
    <div className="data">
      {data.status === "loading" && <h5>Loading...</h5>}
      {data.status === "error" && (
        <h1 style={{ color: "maroon" }}>
          Error happened! {data.error}
        </h1>
      )}
      {data.status === "success" && (
        <div>
          <table className="stations">
            <thead>
              <tr>
                <th>City</th>
                <th>Station</th>
                <th>Coordinates</th>
                <th>PM2.5, ug/m3</th>
                <th>PM10, ug/m3</th>
                <th>Temperature, Celcius</th>
                <th>Humidity, %</th>
                <th>Pressure, hPa</th>
                <th>Air Quality Index, aqi</th>
              </tr>
            </thead>
            <tbody>
              {data.data.map(s => (
                <tr key={s.id}>
                  <td>{s.cityName}</td>
                  <td>{s.stationName}</td>
                  <td>{s.latitude}, {s.longitude}</td>
                  <td>{findPol(s.pollutants, "PM2.5")}</td>
                  <td>{findPol(s.pollutants, "PM10")}</td>
                  <td>{findPol(s.pollutants, "Temperature")}</td>
                  <td>{findPol(s.pollutants, "Humidity")}</td>
                  <td>{findPol(s.pollutants, "Pressure")}</td>
                  <td>{findPol(s.pollutants, "Air Quality Index")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Data;
