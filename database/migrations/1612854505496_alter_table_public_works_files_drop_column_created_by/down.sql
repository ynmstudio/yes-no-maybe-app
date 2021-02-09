ALTER TABLE "public"."works_files" ADD COLUMN "created_by" text;
ALTER TABLE "public"."works_files" ALTER COLUMN "created_by" DROP NOT NULL;
