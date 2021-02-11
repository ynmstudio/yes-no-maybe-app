ALTER TABLE "public"."applications" ADD COLUMN "payment_id" uuid;
ALTER TABLE "public"."applications" ALTER COLUMN "payment_id" DROP NOT NULL;
