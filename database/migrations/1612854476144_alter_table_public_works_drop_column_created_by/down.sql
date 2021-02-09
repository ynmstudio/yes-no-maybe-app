ALTER TABLE "public"."works" ADD COLUMN "created_by" text;
ALTER TABLE "public"."works" ALTER COLUMN "created_by" DROP NOT NULL;
