ALTER TABLE "public"."works" ADD COLUMN "video_url" text;
ALTER TABLE "public"."works" ALTER COLUMN "video_url" DROP NOT NULL;
