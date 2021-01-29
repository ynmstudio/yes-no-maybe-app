ALTER TABLE "public"."editions" ADD COLUMN "application_end" date NOT NULL DEFAULT now() - '00:01:00'::interval;
