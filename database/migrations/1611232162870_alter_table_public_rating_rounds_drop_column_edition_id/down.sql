ALTER TABLE "public"."rating_rounds" ADD COLUMN "edition_id" uuid;
ALTER TABLE "public"."rating_rounds" ALTER COLUMN "edition_id" DROP NOT NULL;
