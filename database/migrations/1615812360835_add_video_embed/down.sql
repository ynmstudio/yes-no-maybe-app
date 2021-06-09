
ALTER TABLE "public"."work_specifications" ADD COLUMN "video_url" text;
ALTER TABLE "public"."work_specifications" ALTER COLUMN "video_url" DROP NOT NULL;

ALTER TABLE "public"."work_specifications" ADD COLUMN "video_password" text;
ALTER TABLE "public"."work_specifications" ALTER COLUMN "video_password" DROP NOT NULL;

COMMENT ON COLUMN "public"."work_files"."comment" IS E'';
alter table "public"."work_files" rename column "password" to "comment";

ALTER TABLE "public"."work_files" DROP COLUMN "comment";
