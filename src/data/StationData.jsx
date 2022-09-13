import React, { useState } from "react";
import { Link, useParams } from 'react-router-dom';
import { useStationData } from "./useData.jsx";

function formatDate(d) {
  return new Date(d).toLocaleString("uk");
}

const phenomenons = [
  "pm25", 'pm10', 'pm1', 'humidity', 'temperature', 'pressure_pa'
];

function compareMomentsAsc(a, b) {
  if (a.moment === b.moment)
    return 0;
  if (a.moment < b.moment)
    return -1;
  return 1;
}

function compareMomentsDesc(a, b) {
  return -compareMomentsAsc(a, b)
}

function Station({ station }) {
  const [phenomenonFilter, setPhenomenonFilter] = useState(phenomenons[0]);
  const [sortOrder, setSortOrder] = useState("desc");
  const sortFn = sortOrder === "asc" ? compareMomentsAsc : compareMomentsDesc;
  return (
    <div className="station">
      <div className="info">
        <div>ID: {station.id}</div>
        <div>City: {station.cityName}</div>
        <div>Station name: {station.stationName}</div>
        <div>Location: {station.latitude}, {station.longitude}</div>
      </div>
      <div className="options">
        <div>
          <label>Phenomenon: </label>
          <select value={phenomenonFilter} onChange={e => setPhenomenonFilter(e.target.value)}>
            {phenomenons.map(p => (
              <option key={p}>{p}</option>
            ))}
          </select>
        </div>
        <div className="sorting">
          <label>
            <input
              type="radio"
              checked={sortOrder === "desc"}
              onChange={() => setSortOrder("desc")}
            />Newest first</label>
          <label>
            <input
              type="radio"
              checked={sortOrder === "asc"}
              onChange={() => setSortOrder("asc")}
            />Oldest first</label>
        </div>
      </div>
      <div className="history">
        <table>
          <thead>
            <tr>
              <th>Phenomenon</th>
              <th>Time</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {station.measurements
              .slice()
              .sort(sortFn)
              .filter(m => m.phenomenon === phenomenonFilter)
              .map(m => (
                <tr key={`${m.phenomenon}-${m.moment}`}>
                  <td>{m.phenomenon}</td>
                  <td>{formatDate(m.moment)}</td>
                  <td>{m.value}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function StationData() {
  const { stationId } = useParams();
  const data = useStationData(stationId);
  return (
    <div className="station-page">
      <div className="back-link">
        <Link to="..">All stations</Link>
      </div>
      {data.status === "loading" && <h5>Loading...</h5>}
      {data.status === "error" && (
        <h1 style={{ color: "maroon" }}>
          Error happened when loading station data! {data.error}
        </h1>
      )}
      {data.status === "success" && (
        <Station station={data.data} />
      )}
    </div>
  );
}

export default StationData;
