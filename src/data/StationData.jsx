import React from "react";
import { Link, useParams } from 'react-router-dom';
import { useStationData } from "./useData.jsx";

function Station({ station }) {
  return (
    <div className="station">
      <div className="info">
        <div>ID: {station.id}</div>
        <div>City: {station.cityName}</div>
        <div>Station name: {station.stationName}</div>
        <div>Location: {station.latitude}, {station.longitude}</div>
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
            {station.measurements.map(m => (
              <tr key={`${m.phenomenon}-${m.moment}`}>
                <td>{m.phenomenon}</td>
                <td>{m.moment}</td>
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
        <Link to="..">Back</Link>
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
