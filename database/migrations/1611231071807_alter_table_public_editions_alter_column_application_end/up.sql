ALTER TABLE ONLY "public"."editions" ALTER COLUMN "application_end" SET DEFAULT now() + interval '1' day;
