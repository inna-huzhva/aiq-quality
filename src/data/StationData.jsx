import React from "react";
import { Link, useParams } from 'react-router-dom';

function StationData() {
  const { stationId } = useParams();
  return (
    <div>
      <div>
        <Link to="..">Back</Link>
      </div>
      <div>
        Station {stationId}
      </div>
    </div>
  );
}

export default StationData;
