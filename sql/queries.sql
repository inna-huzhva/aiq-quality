-- all cities
SELECT jsonb_agg(j)
FROM (
  SELECT jsonb_build_object(
    'name', name,
    'latitude', latitude,
    'longitude', longitude
  ) AS j
  FROM cities
  ORDER BY name
) AS sub;

-- stations with all latest measurements
SELECT jsonb_agg(j)
FROM (
  SELECT jsonb_build_object(
    'id', s.id,
    'cityName', s.city_name,
    'stationName', s.station_name,
    'latitude', s.latitude,
    'longitude', s.longitude,
    'latestMeasurements', COALESCE(jsonb_agg(
      jsonb_build_object(
        'phenomenon', phenomenon,
        'moment', moment,
        'value', value
      )
      ORDER BY phenomenon
    ) FILTER (WHERE phenomenon IS NOT NULL), '[]')
  ) AS j
  FROM stations s
    LEFT JOIN (
      SELECT DISTINCT ON (station_id, phenomenon) station_id, phenomenon, moment, value
      FROM measurements
      ORDER BY station_id, phenomenon, moment DESC
    ) AS lms ON s.id = lms.station_id
  GROUP BY s.id
  ORDER BY s.id
) AS sub;

-- latest aqi for every station
SELECT jsonb_agg(j)
FROM (
  SELECT jsonb_build_object(
    'id', s.id,
    'cityName', s.city_name,
    'stationName', s.station_name,
    'latitude', s.latitude,
    'longitude', s.longitude,
    'moment', moment,
    'pm2.5', m.value,
    'aqi', ((ihigh - ilow) * (value - clow) / (chigh - clow) + ilow)::int
  ) AS j
  FROM (
    SELECT DISTINCT ON (station_id) station_id, moment
    FROM measurements m
    WHERE phenomenon = 'pm25'
    ORDER BY station_id, m.moment DESC
  ) AS lms
  LEFT JOIN LATERAL (
    SELECT AVG(value)::numeric(12, 1) AS value
    FROM measurements
    WHERE moment >= lms.moment - '24 hours'::interval AND moment <= lms.moment
      AND phenomenon = 'pm25'
      AND station_id = lms.station_id
  ) AS m ON true
    JOIN pm25_ranges r ON m.value >= r.clow AND m.value <= r.chigh
    RIGHT JOIN stations s ON s.id = lms.station_id
  ORDER BY s.id
) AS sub;

-- all measurements for given station
SELECT jsonb_build_object(
  'id', s.id,
  'cityName', s.city_name,
  'stationName', s.station_name,
  'latitude', s.latitude,
  'longitude', s.longitude,
  'measurements', COALESCE(jsonb_agg(
    jsonb_build_object(
      'phenomenon', phenomenon,
      'moment', moment,
      'value', value
    )
    ORDER BY phenomenon, moment
  ) FILTER (WHERE moment IS NOT NULL), '[]')
) AS j
FROM stations s
  LEFT JOIN measurements m ON m.station_id = s.id
WHERE s.id = 21660
GROUP BY s.id;
