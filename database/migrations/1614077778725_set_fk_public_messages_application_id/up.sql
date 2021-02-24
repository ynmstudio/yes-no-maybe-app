alter table "public"."messages" drop constraint "messages_application_id_fkey",
             add constraint "messages_application_id_fkey"
             foreign key ("application_id")
             references "public"."applications"
             ("id") on update cascade on delete cascade;
