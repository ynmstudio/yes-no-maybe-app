ALTER TABLE "public"."rating_rounds" ADD COLUMN "created_at" timestamptz NULL DEFAULT now();
