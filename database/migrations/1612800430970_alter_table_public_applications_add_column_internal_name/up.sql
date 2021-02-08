ALTER TABLE "public"."applications" ADD COLUMN "internal_name" text NULL UNIQUE DEFAULT get_random_word() || '-' || get_random_word() || '-' || get_random_word() || '-' || get_random_word();
