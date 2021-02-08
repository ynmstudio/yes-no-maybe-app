ALTER TABLE ONLY "public"."users" ALTER COLUMN "name" SET DEFAULT 'substr(concat(md5(random()::text), md5(random()::text)), 0, 5)';
