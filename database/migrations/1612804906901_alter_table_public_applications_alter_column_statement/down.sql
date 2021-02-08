ALTER TABLE ONLY "public"."applications" ALTER COLUMN "statement" DROP DEFAULT;
ALTER TABLE "public"."applications" ALTER COLUMN "statement" DROP NOT NULL;
