CREATE EXTENSION IF NOT EXISTS pgcrypto;
CREATE TABLE "public"."users"("id" uuid NOT NULL DEFAULT gen_random_uuid(), "type" text NOT NULL, "name" text NOT NULL, PRIMARY KEY ("id") );
