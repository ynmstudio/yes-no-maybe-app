alter table "public"."editions" drop constraint "application_starts_in_future";
alter table "public"."editions" add constraint "application_starts_in_future" check (created_at <= application_start);
