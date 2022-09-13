CREATE TABLE cities (
  name VARCHAR PRIMARY KEY,
  latitude NUMERIC(9, 6) NOT NULL,
  longitude NUMERIC(9, 6) NOT NULL
);


CREATE TABLE stations (
  id INT PRIMARY KEY,
  city_name VARCHAR NOT NULL,
  station_name VARCHAR NOT NULL,
  latitude NUMERIC(9, 6) NOT NULL,
  longitude NUMERIC(9, 6) NOT NULL
);


CREATE TABLE measurements (
  station_id INT NOT NULL,
  phenomenon VARCHAR NOT NULL,
  moment TIMESTAMP NOT NULL,
  value NUMERIC(12, 1) NOT NULL
);

CREATE INDEX measurements_moment_station_id ON measurements (moment, station_id);


CREATE TABLE pm25_ranges (
  clow NUMERIC(4, 1) NOT NULL,
  chigh NUMERIC(4, 1) NOT NULL,
  ilow INT NOT NULL,
  ihigh INT NOT NULL,
  category VARCHAR NOT NULL
);

INSERT INTO pm25_ranges
VALUES
  (0.0, 12.0, 0, 50, 'Good'),
  (12.1, 35.4, 51, 100, 'Moderate'),
  (35.5, 55.4, 101, 150, 'Unhealthy for Sensitive Groups'),
  (55.5, 150.4, 151, 200, 'Unhealthy'),
  (150.5, 250.4, 201, 300, 'Very Unhealthy'),
  (250.5, 350.4, 301, 400, 'Hazardous'),
  (350.5, 500.4, 401, 500, 'Hazardous');
