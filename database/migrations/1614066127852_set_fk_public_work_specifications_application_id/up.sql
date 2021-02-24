alter table "public"."work_specifications" drop constraint "works_specifications_application_id_fkey",
             add constraint "work_specifications_application_id_fkey"
             foreign key ("application_id")
             references "public"."applications"
             ("id") on update set null on delete cascade;
