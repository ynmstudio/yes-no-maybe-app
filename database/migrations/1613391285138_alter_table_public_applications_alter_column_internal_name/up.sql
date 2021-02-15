ALTER TABLE ONLY "public"."applications" ALTER COLUMN "internal_name" SET DEFAULT get_random_word() || '-' || get_random_word() || '-' || get_random_word() || '-' || get_random_word();
