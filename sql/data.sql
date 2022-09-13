INSERT INTO cities (
  name, latitude, longitude
)
VALUES
  ('Kyiv', 50.45466, 30.52380),
  ('Dnipro', 48.45000, 34.98333),
  ('Kharkiv', 49.98081, 36.25272),
  ('Lviv', 49.83826, 24.02324),
  ('Odesa', 46.47747, 30.73262),
  ('Zaporizhzhia', 47.82289, 35.19031);


INSERT INTO stations (
  id, city_name, station_name, latitude, longitude
)
VALUES
  (17095, 'Kyiv', 'Bulhakova', 50.40978, 30.40825),
  (21660, 'Kyiv', 'Bohatyrs''ka 6a', 50.51976, 30.48619),
  (12935, 'Kyiv', 'Heroiv Stalinhrada 9',  50.49905, 30.51377),
  (13903, 'Kyiv', 'Obolonskyi av. 27', 50.51609, 30.49918),
  (915, 'Kyiv', 'Simi Kulzhenkiv, 31', 50.52077, 30.46833),
  (1556, 'Kyiv', 'Kyrylivska, 64', 50.47412, 30.49444),
  (13540, 'Kyiv', 'Levitana, 3', 50.37515, 30.54114),
  (14059, 'Kyiv', 'Lisovyi av., 22', 50.48105, 30.62886),
  (21025, 'Kyiv', 'Mezhova 66', 50.50410, 30.43151),
  (19867, 'Kyiv', 'Turivska, 28', 50.47340, 30.51286),
  (13537, 'Kyiv', 'Peremohy av., 67', 50.45794, 30.41064),
  (21026, 'Kyiv', 'Odeska, 28', 50.42106, 30.33532),
  (17114, 'Kyiv', '40-richchia Zhovtnia av., 17B', 50.40099, 30.51814),
  (16059, 'Kyiv', 'Metrolohichna 6', 50.35207, 30.47723),
  (3016, 'Kyiv', 'Budindustrii, 4', 50.40215, 30.56938),
  (17107, 'Kyiv', 'Volodymyra Maiakovskoho av., 21H', 50.50567, 30.59126),
  (21018, 'Kyiv', 'Kakhovska 67', 50.46223, 30.59160),
  (12925, 'Kyiv', 'Reheneratorna, 4', 50.43289, 30.62204),
  (18660, 'Kyiv', 'Izhevska 19', 50.40026, 30.60958),
  (12939, 'Kyiv', 'Borshchahivska 13', 50.44725, 30.47014),
  (14669, 'Kyiv', 'Yevhena Konovaltsia, 44A', 50.42292, 30.53840),
  (15705, 'Kharkiv', 'Valentynivska, 24A', 50.01213, 36.33395),
  (14835, 'Kharkiv', 'Metrobudivskyi, 14', 50.00603, 36.18053),
  (18756, 'Kharkiv', 'Rohatynskaia Levada, 54', 49.99710, 36.21778),
  (13983, 'Kharkiv', 'Moskovska, 42', 49.94432, 36.18823),
  (3022, 'Kharkiv', 'Nakhimova, 41', 48.44634, 35.01492),
  (136, 'Dnipro', 'Park Druzhby Narodiv', 48.54021, 35.09216),
  (4208, 'Dnipro', 'Berdianska, 1', 48.48741, 35.06684),
  (13538, 'Dnipro', 'Zooparkova', 48.47308, 35.19523),
  (14714, 'Dnipro', 'Naberezhna Zavodska, 44', 48.49065, 34.98529),
  (3617, 'Dnipro', 'Chernyshevskoho, 24A', 48.45283, 35.05332),
  (1, 'Dnipro', 'Heroiv av., 40', 48.40815, 35.07332),
  (4210, 'Dnipro', 'Bohdana Khmelnytskoho av., 229', 48.37329, 34.99548),
  (9, 'Dnipro', 'Kalynova, 49', 48.51283, 35.06225),
  (18979, 'Dnipro', 'Ivana ta Yuriia Lypy, 2', 46.45005, 30.72008),
  (1345, 'Zaporizhzhia', 'Ladozka, 40A', 47.89041, 35.06637),
  (18783, 'Zaporizhzhia', 'Voronezka, 1', 47.82801, 35.03832),
  (1131, 'Zaporizhzhia', 'Tbiliska, 27A', 47.83643, 35.10547),
  (1309, 'Zaporizhzhia', 'Tsentralnyi boulevard, 22A', 47.83491, 35.13448),
  (18883, 'Odesa', 'Pishonivska, 23', 46.48532, 30.71318),
  (18885, 'Odesa', 'Hretska, 15', 46.48212, 30.74089),
  (19250, 'Odesa', 'Frantsuzkyi boulevard, 22', 46.45622, 30.75829),
  (18884, 'Odesa', 'Liniia 13-ho Tramvaia, 26', 46.41207, 30.72211),
  (18895, 'Odesa', 'Kvitkova, 13', 46.37613, 30.71217),
  (19362, 'Odesa', 'Yakirnyi alley, 14', 46.38731, 30.74759),
  (3552, 'Odesa', 'Kytobiina, 4', 46.41404, 30.74390),
  (18153, 'Lviv', 'Kulparkivska, 226K', 49.80432, 23.97687),
  (17050, 'Lviv', 'Maloholoskivska, 15', 49.86632, 24.00460),
  (16732, 'Lviv', 'Dmytra Bortnianskoho, 28', 49.84452, 24.00210),
  (18636, 'Lviv', 'Lychakivska, 133', 49.83717, 24.05811),
  (16998, 'Lviv', 'Ivana Franka, 118', 49.82543, 24.03307),
  (18634, 'Lviv', 'Zelena, 204', 49.81123, 24.05981),
  (18635, 'Lviv', 'Pidmiska, 11', 49.82382, 23.97949),
  (4177, 'Lviv', 'Donetska, 8', 49.85501, 24.03605),
  (16830, 'Lviv', 'Slovianska, 5', 49.81302, 24.01800);


CREATE TEMP TABLE st_tmp (
  device_id VARCHAR,
  phenomenon VARCHAR,
  value NUMERIC(12, 4),
  logged_at TIMESTAMP,
  value_text VARCHAR
);

-- sed -i.bak -e '390496d' saveecobot_18883.csv

DO $$
  DECLARE
    sid int;
    file varchar;
  BEGIN
    FOR sid IN
      SELECT id FROM stations ORDER BY id
    LOOP
      file := '/stations/saveecobot_' || sid || '.csv';
      EXECUTE format('
        COPY st_tmp
        FROM %L
        WITH (FORMAT CSV, DELIMITER '','', ENCODING ''UTF8'', HEADER TRUE)
      ', file);
    END LOOP;
  END;
$$;

-- keep only some data types
DELETE FROM st_tmp
WHERE phenomenon NOT IN (
  'humidity', 'pm1', 'pm10', 'pm25', 'pressure_pa', 'temperature'
);

-- remove old data
DELETE FROM st_tmp
WHERE logged_at < '2022-06-01';

INSERT INTO measurements (
  station_id, phenomenon, moment, value
)
SELECT device_id::int, phenomenon, logged_at, value
FROM st_tmp;

-- take measurements only once per half-hour
CREATE TEMP TABLE ms AS
SELECT DISTINCT ON (station_id, phenomenon, date_trunc('hour', moment) + date_part('minute', moment)::int / 30 * interval '30 minute') *
FROM measurements
ORDER BY station_id, phenomenon, date_trunc('hour', moment) + date_part('minute', moment)::int / 30 * interval '30 minute', moment;

TRUNCATE measurements;

INSERT INTO measurements
SELECT *
FROM ms;


-- remove even more old data
DELETE FROM measurements
WHERE moment < '2022-08-25';


-- normalize bad pressure
UPDATE measurements
SET value = value / 10
WHERE phenomenon = 'pressure_pa'
  AND value > 150000;
