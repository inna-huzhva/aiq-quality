import React from "react";
import { CircleMarker, Popup } from "react-leaflet";

function spotColor(aqi) {
  if (aqi) {
    if (aqi <= 50) {
      return ["#009900", "#00e600"];
    } else if (aqi <= 100) {
      return ["#e6b800", "#ffdb4d"];
    } else if (aqi <= 150) {
      return ["#cc7a00", "#ffa31a"];
    } else if (aqi <= 200) {
      return ["#cc0000", "#ff1a1a"];
    } else if (aqi <= 300) {
      return ["#602060", "#ac39ac"];
    } else if (aqi <= 500) {
      return ["#330000", "#800000"];
    }
  }
  return ["#393232", "#7b6b6b"];
}

function Station({ data: { latitude, longitude, stationName, aqi, moment } }) {
  const [color, fillColor] = spotColor(aqi);
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
        {stationName} {aqi} {moment}
      </Popup>
    </CircleMarker>
  );
}

export default Station;
