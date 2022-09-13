import React from "react";
import { Link } from 'react-router-dom';
import { CircleMarker, Popup } from "react-leaflet";

function categorizeSpot(aqi) {
  if (aqi) {
    if (aqi <= 50) {
      return ["#009900", "#00e600", "Good"];
    } else if (aqi <= 100) {
      return ["#e6b800", "#ffdb4d", "Moderate"];
    } else if (aqi <= 150) {
      return ["#cc7a00", "#ffa31a", "Unhealthy for Sensitive Groups"];
    } else if (aqi <= 200) {
      return ["#cc0000", "#ff1a1a", "Unhealthy"];
    } else if (aqi <= 300) {
      return ["#602060", "#ac39ac", "Very Unhealthy"];
    } else if (aqi <= 500) {
      return ["#330000", "#800000", "Hazardous"];
    }
  }
  return ["#393232", "#7b6b6b", "Data is not available"];
}

function formatDate(d) {
  return d && new Date(d).toLocaleString("uk");
}

function Station({ data: { id, latitude, longitude, stationName, aqi, moment } }) {
  const [color, fillColor, status] = categorizeSpot(aqi);
  return (
    <CircleMarker
      center={[latitude, longitude]}
      radius={10}
      pathOptions={{
        color,
        fillColor,
        fillOpacity: 0.5
      }}
    >
      <Popup closeButton={false}>
        <div className="popup">
          <div className="pollution">
            <div className="aqi" style={{ backgroundColor: fillColor }}>{aqi || "-"}</div>
            <div className="status">{status}</div>
          </div>
          <div className="station">
            <div>Address: {stationName}</div>
            <div>Last measured: {formatDate(moment)}</div>
          </div>
          <Link to={`/data/${id}`}>History</Link>
        </div>
      </Popup>
    </CircleMarker>
  );
}

export default Station;
