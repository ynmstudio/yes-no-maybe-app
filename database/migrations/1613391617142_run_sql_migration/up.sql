CREATE OR REPLACE FUNCTION get_alias() RETURNS trigger AS $emp_stamp$
BEGIN
    IF NEW.internal_name IS NULL THEN
        SELECT  get_random_word() || '-' || get_random_word() || '-' || get_random_word() || '-' || get_random_word();
    END IF;
    RETURN NEW;
END
$emp_stamp$ LANGUAGE plpgsql;

 CREATE TRIGGER get_alias_trigger BEFORE INSERT OR UPDATE ON applications
      FOR EACH ROW EXECUTE PROCEDURE get_alias();
