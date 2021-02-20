alter table "public"."editions"
           add constraint "editions_winner_fkey"
           foreign key ("winner")
           references "public"."applications"
           ("id") on update restrict on delete restrict;
