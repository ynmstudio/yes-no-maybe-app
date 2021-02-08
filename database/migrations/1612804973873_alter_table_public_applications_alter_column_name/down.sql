ALTER TABLE ONLY "public"."applications" ALTER COLUMN "name" DROP DEFAULT;
ALTER TABLE "public"."applications" ALTER COLUMN "name" DROP NOT NULL;
