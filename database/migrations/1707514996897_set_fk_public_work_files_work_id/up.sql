alter table "public"."work_files" drop constraint "work_files_work_id_fkey",
  add constraint "work_files_work_id_fkey"
  foreign key ("work_id")
  references "public"."works"
  ("id") on update cascade on delete cascade;
