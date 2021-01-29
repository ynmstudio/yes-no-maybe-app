alter table "public"."rating_rounds"
           add constraint "rating_rounds_prev_round_id_fkey"
           foreign key ("prev_round_id")
           references "public"."rating_rounds"
           ("id") on update restrict on delete restrict;
