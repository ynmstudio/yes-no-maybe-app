alter table "public"."work_files" drop constraint "works_files_work_id_fkey",
             add constraint "work_files_work_id_fkey"
             foreign key ("work_id")
             references "public"."works"
             ("id") on update set null on delete set null;
