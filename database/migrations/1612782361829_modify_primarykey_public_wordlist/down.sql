alter table "public"."wordlist" drop constraint "wordlist_pkey";
alter table "public"."wordlist"
    add constraint "wordlist_pkey" 
    primary key ( "id" );
