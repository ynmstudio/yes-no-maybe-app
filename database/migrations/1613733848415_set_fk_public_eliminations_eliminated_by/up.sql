alter table "public"."eliminations"
           add constraint "eliminations_eliminated_by_fkey"
           foreign key ("eliminated_by")
           references "public"."users"
           ("id") on update restrict on delete restrict;
