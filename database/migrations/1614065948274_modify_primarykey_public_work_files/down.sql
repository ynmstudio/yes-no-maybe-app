alter table "public"."work_files" drop constraint "work_files_pkey";
alter table "public"."work_files"
    add constraint "works_files_pkey" 
    primary key ( "id" );
