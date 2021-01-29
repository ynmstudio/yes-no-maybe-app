CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE TABLE "public"."ratings"("id" uuid NOT NULL DEFAULT gen_random_uuid(), "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), "round_id" integer NOT NULL, "application_id" uuid NOT NULL, "created_by" uuid NOT NULL, "value" integer NOT NULL, PRIMARY KEY ("id") , UNIQUE ("round_id", "application_id", "created_by"), CONSTRAINT "rating_value_constraint" CHECK (value >= 0 AND value <= 10));
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
CREATE TRIGGER "set_public_ratings_updated_at"
BEFORE UPDATE ON "public"."ratings"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_ratings_updated_at" ON "public"."ratings" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
