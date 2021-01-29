ALTER TABLE ONLY "public"."editions" ALTER COLUMN "application_end" SET DEFAULT (now() + '2 day'::interval day);
