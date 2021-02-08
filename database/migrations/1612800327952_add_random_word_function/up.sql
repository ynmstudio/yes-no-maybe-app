CREATE OR REPLACE FUNCTION get_random_word() RETURNS text AS $$
SELECT value FROM wordlist 
WHERE id = (
  SELECT width_bucket(random(), 0::float8, 1::float8, (SELECT max(id) FROM wordlist))
);
$$ LANGUAGE sql;
