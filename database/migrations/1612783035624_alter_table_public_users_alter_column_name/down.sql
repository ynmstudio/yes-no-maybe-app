ALTER TABLE ONLY "public"."users" ALTER COLUMN "name" SET DEFAULT ''generate_random_string(5)'::text';
ALTER TABLE "public"."users" ALTER COLUMN "name" SET NOT NULL;