ALTER TABLE "public"."users" ADD COLUMN "last_seen" timestamptz NULL DEFAULT now();

CREATE OR REPLACE FUNCTION "public"."set_current_timestamp_last_seen"()
RETURNS TRIGGER AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."last_seen" = NOW();
  RETURN _new;
END;
$$ LANGUAGE plpgsql;
CREATE TRIGGER "set_public_users_last_seen"
BEFORE UPDATE ON "public"."users"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_last_seen"();
COMMENT ON TRIGGER "set_public_users_last_seen" ON "public"."users" 
IS 'trigger to set value of column "last_seen" to current timestamp on row update';
