CREATE TABLE "public"."rating_rounds"("id" serial NOT NULL, "start_at" timestamptz NOT NULL DEFAULT now(), "end_at" timestamptz NOT NULL DEFAULT now() + interval '1' day, PRIMARY KEY ("id") );
