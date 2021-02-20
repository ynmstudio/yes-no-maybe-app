alter table "public"."editions"
           add constraint "editions_winner_id_fkey"
           foreign key ("winner_id")
           references "public"."applications"
           ("id") on update restrict on delete restrict;
