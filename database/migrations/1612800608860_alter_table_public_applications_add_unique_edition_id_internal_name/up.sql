alter table "public"."applications" add constraint "applications_edition_id_internal_name_key" unique ("edition_id", "internal_name");
