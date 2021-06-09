
ALTER TABLE "public"."work_files" ADD COLUMN "comment" text NULL;

COMMENT ON COLUMN "public"."work_files"."comment" IS E'Password for Vimeo/YouTube Videos';
alter table "public"."work_files" rename column "comment" to "password";

ALTER TABLE "public"."work_specifications" DROP COLUMN "video_password" CASCADE;

ALTER TABLE "public"."work_specifications" DROP COLUMN "video_url" CASCADE;
