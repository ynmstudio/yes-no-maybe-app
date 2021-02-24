alter table "public"."work_specifications" drop constraint "work_specifications_work_id_fkey",
             add constraint "work_specifications_work_id_fkey"
             foreign key ("work_id")
             references "public"."works"
             ("id") on update cascade on delete cascade;
