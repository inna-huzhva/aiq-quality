import React from "react";
import { CircleMarker, Popup } from "react-leaflet";

function findMeasurement(measurements, code) {
  return measurements.find(p => p.phenomenon === code);
}

function Station({ data: { latitude, longitude, stationName, latestMeasurements } }) {
  const aqi = findMeasurement(latestMeasurements, "pm25");
  return (
    <CircleMarker
      center={[latitude, longitude]}
      radius={10}
      pathOptions={{
        color: "darkred",
        fillColor: "red",
        fillOpacity: 0.5
      }}
    >
      <Popup>
        {stationName} {aqi?.value} {aqi?.moment}
      </Popup>
    </CircleMarker>
  );
}

export default Station;
