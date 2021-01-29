CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE TABLE "public"."works"("id" uuid NOT NULL DEFAULT gen_random_uuid(), "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), "application_id" uuid NOT NULL, "type" text NOT NULL, PRIMARY KEY ("id") , FOREIGN KEY ("application_id") REFERENCES "public"."applications"("id") ON UPDATE cascade ON DELETE cascade);
CREATE OR REPLACE FUNCTION "public"."set_current_timestamp_updated_at"()
RETURNS TRIGGER AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$ LANGUAGE plpgsql;
CREATE TRIGGER "set_public_works_updated_at"
BEFORE UPDATE ON "public"."works"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_works_updated_at" ON "public"."works" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
