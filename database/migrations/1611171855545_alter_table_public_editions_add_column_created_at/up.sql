ALTER TABLE "public"."editions" ADD COLUMN "created_at" timestamptz NOT NULL DEFAULT now();
