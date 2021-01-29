ALTER TABLE "public"."users" ALTER COLUMN "id" TYPE uuid;
ALTER TABLE ONLY "public"."users" ALTER COLUMN "id" SET DEFAULT gen_random_uuid();
