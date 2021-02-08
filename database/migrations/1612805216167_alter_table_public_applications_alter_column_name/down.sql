ALTER TABLE ONLY "public"."applications" ALTER COLUMN "name" SET DEFAULT ''::text'::text';
ALTER TABLE "public"."applications" ALTER COLUMN "name" SET NOT NULL;
