ALTER TABLE "public"."works_specifications" ADD COLUMN "created_by" text;
ALTER TABLE "public"."works_specifications" ALTER COLUMN "created_by" DROP NOT NULL;
