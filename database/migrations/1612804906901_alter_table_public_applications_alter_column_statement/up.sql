ALTER TABLE ONLY "public"."applications" ALTER COLUMN "statement" SET DEFAULT '""';
ALTER TABLE "public"."applications" ALTER COLUMN "statement" SET NOT NULL;
