alter table "public"."applications" drop constraint "applications_created_by_fkey",
             add constraint "applications_created_by_fkey"
             foreign key ("created_by")
             references "public"."users"
             ("id") on update cascade on delete cascade;
