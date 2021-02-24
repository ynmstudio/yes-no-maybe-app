alter table "public"."ratings" drop constraint "ratings_application_id_fkey",
          add constraint "ratings_application_id_fkey"
          foreign key ("application_id")
          references "public"."applications"
          ("id")
          on update restrict
          on delete restrict;
