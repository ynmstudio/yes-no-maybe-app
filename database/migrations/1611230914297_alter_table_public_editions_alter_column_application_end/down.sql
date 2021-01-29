ALTER TABLE ONLY "public"."editions" ALTER COLUMN "application_end" SET DEFAULT (now() + '1 day'::interval);
