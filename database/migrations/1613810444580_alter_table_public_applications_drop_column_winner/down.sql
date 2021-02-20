ALTER TABLE "public"."applications" ADD COLUMN "winner" bool;
ALTER TABLE "public"."applications" ALTER COLUMN "winner" DROP NOT NULL;
