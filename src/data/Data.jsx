import React from "react";
import "./data.css";

function findPol(pollutants, code) {
  return pollutants.find(p => p.pol === code)?.value;
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
            <th>Temperature, Celcius</th>
            <th>Humidity, %</th>
            <th>Pressure, hPa</th>
            <th>Air Quality Index, aqi</th>
          </tr>
        </thead>
        <tbody>
          {data.map(s => (
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
  );
}

export default Data;
