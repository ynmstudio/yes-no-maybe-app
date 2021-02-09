ALTER TABLE "public"."works" ADD COLUMN "type" text;
ALTER TABLE "public"."works" ALTER COLUMN "type" DROP NOT NULL;
