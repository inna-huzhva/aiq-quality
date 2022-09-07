import React from "react";
import { CircleMarker, Popup } from "react-leaflet";

function findPollutant(pollutants, code) {
  return pollutants.find(p => p.pol === code);
}

function Station({ data: { latitude, longitude, stationName, pollutants } }) {
  const aqi = findPollutant(pollutants, "Air Quality Index");
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
        {stationName} {aqi?.value} {aqi?.time}
      </Popup>
    </CircleMarker>
  );
}

export default Station;
