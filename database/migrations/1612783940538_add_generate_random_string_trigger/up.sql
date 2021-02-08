CREATE OR REPLACE FUNCTION generate_random_string() RETURNS TRIGGER AS $emp_stamp$
DECLARE
  characters TEXT := 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  bytes BYTEA := gen_random_bytes(size);
  l INT := length(characters);
  i INT := 0;
BEGIN
  WHILE i < 5 LOOP
    NEW.name := NEW.name || substr(characters, get_byte(bytes, i) % l + 1, 1);
    i := i + 1;
  END LOOP;
  RETURN NEW;
END;
$emp_stamp$ LANGUAGE plpgsql VOLATILE;

CREATE TRIGGER create_random_user_name BEFORE INSERT ON users
      FOR EACH ROW EXECUTE PROCEDURE generate_random_string();
