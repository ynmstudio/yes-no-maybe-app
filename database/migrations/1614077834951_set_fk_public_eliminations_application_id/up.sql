alter table "public"."eliminations" drop constraint "eliminations_application_id_fkey",
             add constraint "eliminations_application_id_fkey"
             foreign key ("application_id")
             references "public"."applications"
             ("id") on update cascade on delete cascade;
