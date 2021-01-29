ALTER TABLE ONLY "public"."rating_rounds" ALTER COLUMN "start_at" SET DEFAULT (now() + '1 day'::interval day);
