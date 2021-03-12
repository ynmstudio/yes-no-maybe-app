ALTER TABLE "public"."updates" ADD COLUMN "update" text;
ALTER TABLE "public"."updates" ALTER COLUMN "update" DROP NOT NULL;
