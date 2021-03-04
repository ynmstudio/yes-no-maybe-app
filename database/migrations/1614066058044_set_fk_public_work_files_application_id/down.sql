alter table "public"."work_files" drop constraint "work_files_application_id_fkey",
          add constraint "works_files_application_id_fkey"
          foreign key ("application_id")
          references "public"."applications"
          ("id")
          on update cascade
          on delete cascade;