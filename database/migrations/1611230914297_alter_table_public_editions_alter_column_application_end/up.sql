ALTER TABLE ONLY "public"."editions" ALTER COLUMN "application_end" SET DEFAULT now() + interval '2' day;
