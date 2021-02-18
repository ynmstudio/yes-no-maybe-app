alter table "public"."ratings"
           add constraint "ratings_message_id_fkey"
           foreign key ("message_id")
           references "public"."messages"
           ("id") on update cascade on delete cascade;
