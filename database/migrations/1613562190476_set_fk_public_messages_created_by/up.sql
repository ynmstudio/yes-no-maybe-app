alter table "public"."messages" drop constraint "messages_created_by_fkey",
             add constraint "messages_created_by_fkey"
             foreign key ("created_by")
             references "public"."users"
             ("id") on update cascade on delete cascade;
