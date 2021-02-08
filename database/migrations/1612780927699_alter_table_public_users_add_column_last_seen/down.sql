DROP TRIGGER IF EXISTS "set_public_users_last_seen" ON "public"."users";
ALTER TABLE "public"."users" DROP COLUMN "last_seen";
