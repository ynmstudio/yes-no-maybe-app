ALTER TABLE "public"."works" ADD COLUMN "video_password" text;
ALTER TABLE "public"."works" ALTER COLUMN "video_password" DROP NOT NULL;
