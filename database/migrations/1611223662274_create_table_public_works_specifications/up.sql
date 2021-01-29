CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE TABLE "public"."works_specifications"("id" uuid NOT NULL DEFAULT gen_random_uuid(), "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), "work_id" uuid NOT NULL, "order" integer NOT NULL, "title" text NOT NULL, "year" date NOT NULL, "number_of_editions" Integer, "medium" text, "dimensions_height" integer, "dimensions_width" integer, "dimensions_depth" integer, "description" text, PRIMARY KEY ("id") , FOREIGN KEY ("work_id") REFERENCES "public"."works"("id") ON UPDATE cascade ON DELETE cascade);
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
CREATE TRIGGER "set_public_works_specifications_updated_at"
BEFORE UPDATE ON "public"."works_specifications"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_works_specifications_updated_at" ON "public"."works_specifications" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
