ALTER TABLE "public"."applications" ADD COLUMN "payment_file" text;
ALTER TABLE "public"."applications" ALTER COLUMN "payment_file" DROP NOT NULL;
