alter table "public"."work_files" drop constraint "work_files_application_id_fkey",
          add constraint "work_files_application_id_fkey"
          foreign key ("application_id")
          references "public"."applications"
          ("id")
          on update set null
          on delete set null;
