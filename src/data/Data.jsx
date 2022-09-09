import React from "react";
import { useData } from "./useData.jsx";
import "./data.css";

function findMeasurement(measurements, code) {
  return measurements.find(p => p.phenomenon === code)?.value;
}

function pa2mmhg(p) {
  return p ? (p / 133.322).toFixed() : undefined;
}

function Data() {
  const data = useData();
  return (
    <div className="data">
      {data.status === "loading" && <h5>Loading...</h5>}
      {data.status === "error" && (
        <h1 style={{ color: "maroon" }}>
          Error happened when loading data! {data.error}
        </h1>
      )}
      {data.status === "success" && (
        <table className="stations">
          <thead>
            <tr>
              <th>City</th>
              <th>Station</th>
              <th>Coordinates</th>
              <th>PM2.5, ug/m3</th>
              <th>PM10, ug/m3</th>
              <th>Temperature, C</th>
              <th>Humidity, %</th>
              <th>Pressure, mmHg</th>
            </tr>
          </thead>
          <tbody>
            {data.data.map(s => (
              <tr key={s.id}>
                <td>{s.cityName}</td>
                <td>{s.stationName}</td>
                <td>{s.latitude}, {s.longitude}</td>
                <td>{findMeasurement(s.latestMeasurements, "pm25")}</td>
                <td>{findMeasurement(s.latestMeasurements, "pm10")}</td>
                <td>{findMeasurement(s.latestMeasurements, "temperature")}</td>
                <td>{findMeasurement(s.latestMeasurements, "humidity")}</td>
                <td>{pa2mmhg(findMeasurement(s.latestMeasurements, "pressure_pa"))}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Data;
