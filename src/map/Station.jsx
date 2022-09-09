import React from "react";
import { CircleMarker, Popup } from "react-leaflet";

function Station({ data: { latitude, longitude, stationName, aqi, moment } }) {
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
      <Popup closeButton={false}>
        {stationName} {aqi} {moment}
      </Popup>
    </CircleMarker>
  );
}

export default Station;
