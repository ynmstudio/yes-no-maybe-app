alter table "public"."applications"
           add constraint "applications_payment_id_fkey"
           foreign key ("payment_id")
           references "public"."payments"
           ("id") on update cascade on delete restrict;
