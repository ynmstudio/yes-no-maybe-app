alter table "public"."editions" drop constraint "application_starts_in_future";
alter table "public"."editions" add constraint "application_starts_in_future" check (CHECK (created_at < application_start));
