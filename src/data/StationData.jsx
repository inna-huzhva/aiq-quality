import React from "react";
import { Link, useParams } from 'react-router-dom';
import { useStationData } from "./useData.jsx";

function StationData() {
  const { stationId } = useParams();
  const data = useStationData(stationId);
  return (
    <div>
      <div>
        <Link to="..">Back</Link>
      </div>
      <div>
        {data.status === "loading" && <h5>Loading...</h5>}
        {data.status === "error" && (
          <h1 style={{ color: "maroon" }}>
            Error happened when loading station data! {data.error}
          </h1>
        )}
        {data.status === "success" && (
          <div>
            {JSON.stringify(data.data)}
          </div>
        )}
      </div>
    </div>
  );
}

export default StationData;
