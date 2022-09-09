import React, {useEffect} from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import { useMap as useMapLoading } from "./useMap.jsx";
import Station from "./Station.jsx";
import "./map.css";

function ChangeView({ center }) {
  const map = useMap();
  useEffect(() => {
    map.closePopup();
  });
  map.setView(center);
  return null;
}

function Map({ city }) {
  const map = useMapLoading();
  return (
    <div className="map">
      {map.status === "loading" && <h5>Loading...</h5>}
      {map.status === "error" && (
        <h1 style={{ color: "maroon" }}>
          Error happened when loading latest AQI! {map.error}
        </h1>
      )}
      {map.status === "success" && (
        <MapContainer center={[city.latitude, city.longitude]} zoom={10} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <ChangeView center={[city.latitude, city.longitude]} />
          {map.data.map(s => (
            <Station key={s.id} data={s} />
          ))}
        </MapContainer>
      )}
    </div>
  );
}

export default Map;
