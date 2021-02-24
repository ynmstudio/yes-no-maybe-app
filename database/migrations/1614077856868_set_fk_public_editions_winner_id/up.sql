alter table "public"."editions" drop constraint "editions_winner_id_fkey",
             add constraint "editions_winner_id_fkey"
             foreign key ("winner_id")
             references "public"."applications"
             ("id") on update set null on delete set null;
