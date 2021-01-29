ALTER TABLE ONLY "public"."editions" ALTER COLUMN "application_end" SET DEFAULT (now() - '00:01:00'::interval);
