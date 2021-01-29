DROP TRIGGER IF EXISTS "set_public_rating_rounds_updated_at" ON "public"."rating_rounds";
ALTER TABLE "public"."rating_rounds" DROP COLUMN "updated_at";
