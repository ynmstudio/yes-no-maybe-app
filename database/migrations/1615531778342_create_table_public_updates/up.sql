CREATE TABLE "public"."updates"("id" serial NOT NULL, "update" text NOT NULL, "url" text, "edition_id" integer NOT NULL, "created_at" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("id") , FOREIGN KEY ("edition_id") REFERENCES "public"."editions"("id") ON UPDATE cascade ON DELETE cascade);
