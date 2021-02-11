alter table "public"."applications" add foreign key ("payment_id") references "public"."payments"("id") on update cascade on delete restrict;
