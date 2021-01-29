alter table "public"."rating_rounds"
           add constraint "rating_rounds_edition_id_fkey"
           foreign key ("edition_id")
           references "public"."editions"
           ("id") on update restrict on delete restrict;
