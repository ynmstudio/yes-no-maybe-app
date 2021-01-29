alter table "public"."ratings"
           add constraint "ratings_round_id_fkey"
           foreign key ("round_id")
           references "public"."rating_rounds"
           ("id") on update restrict on delete restrict;
