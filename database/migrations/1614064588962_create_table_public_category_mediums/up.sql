CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE TABLE "public"."category_mediums"("id" uuid NOT NULL DEFAULT gen_random_uuid(), "name_en" Text NOT NULL, "name_de" text NOT NULL, PRIMARY KEY ("id") , UNIQUE ("name_en"), UNIQUE ("name_de"));
