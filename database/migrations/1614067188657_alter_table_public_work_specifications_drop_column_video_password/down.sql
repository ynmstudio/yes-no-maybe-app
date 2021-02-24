ALTER TABLE "public"."work_specifications" ADD COLUMN "video_password" text;
ALTER TABLE "public"."work_specifications" ALTER COLUMN "video_password" DROP NOT NULL;
