ALTER TABLE ONLY "public"."rating_rounds" ALTER COLUMN "end_at" SET DEFAULT (now() + '2 days'::interval day);
