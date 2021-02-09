alter table "public"."works_specifications"
           add constraint "works_specifications_application_id_fkey"
           foreign key ("application_id")
           references "public"."applications"
           ("id") on update cascade on delete cascade;
