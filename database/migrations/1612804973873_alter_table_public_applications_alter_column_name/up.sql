ALTER TABLE ONLY "public"."applications" ALTER COLUMN "name" SET DEFAULT '""';
ALTER TABLE "public"."applications" ALTER COLUMN "name" SET NOT NULL;
