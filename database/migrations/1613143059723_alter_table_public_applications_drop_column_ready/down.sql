ALTER TABLE "public"."applications" ADD COLUMN "ready" bool;
ALTER TABLE "public"."applications" ALTER COLUMN "ready" DROP NOT NULL;
ALTER TABLE "public"."applications" ALTER COLUMN "ready" SET DEFAULT false;
