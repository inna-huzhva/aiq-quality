import React from "react";
import "./data.css";

function findMeasurement(measurements, code) {
  return measurements.find(p => p.phenomenon === code)?.value;
}

function pa2mmhg(p) {
  return p ? (p / 133.322).toFixed() : undefined;
}

function Data({ data }) {
  return (
    <div className="data">
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
          {data.map(s => (
            <tr key={s.id}>
              <td>{s.cityName} {s.id}</td>
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
    </div>
  );
}

export default Data;
