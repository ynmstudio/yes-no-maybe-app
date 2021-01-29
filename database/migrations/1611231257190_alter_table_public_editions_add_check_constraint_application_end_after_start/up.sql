alter table "public"."editions" add constraint "application_end_after_start" check (application_start < application_end);
