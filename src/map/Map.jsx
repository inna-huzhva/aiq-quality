import React from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import Station from "./Station.jsx";
import "./map.css";

function ChangeView({ center }) {
  const map = useMap();
  map.setView(center);
  return null;
}

function Map({ city, data }) {
  return (
    <div className="map">
      <MapContainer center={city.center} zoom={10} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ChangeView center={city.center} />
        {data.map(s => (
          <Station key={s.id} data={s} />
        ))}
      </MapContainer>
    </div>
  );
}

export default Map;
