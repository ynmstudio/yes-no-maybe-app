alter table "public"."applications"
           add constraint "applications_created_by_fkey"
           foreign key ("created_by")
           references "public"."users"
           ("id") on update restrict on delete cascade;
