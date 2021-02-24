ALTER TABLE "public"."work_specifications" ADD COLUMN "video_url" text;
ALTER TABLE "public"."work_specifications" ALTER COLUMN "video_url" DROP NOT NULL;
