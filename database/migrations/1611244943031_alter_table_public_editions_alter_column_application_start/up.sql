ALTER TABLE ONLY "public"."editions" ALTER COLUMN "application_start" SET DEFAULT (now() + '1 day'::interval day);
