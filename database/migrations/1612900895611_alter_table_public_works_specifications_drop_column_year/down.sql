ALTER TABLE "public"."works_specifications" ADD COLUMN "year" date;
ALTER TABLE "public"."works_specifications" ALTER COLUMN "year" DROP NOT NULL;
