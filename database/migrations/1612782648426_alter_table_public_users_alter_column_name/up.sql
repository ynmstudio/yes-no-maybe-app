ALTER TABLE ONLY "public"."users" ALTER COLUMN "name" SET DEFAULT 'md5(random()::text)';
